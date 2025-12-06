import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { SideBar } from "@/components/ui/sidebar/SideBar";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Sidebar component", () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <SideBar isDrawerOpen={true} />
      </MemoryRouter>
    );

  it("should render properly on mount", () => {
    setup();
    expect(screen.getByLabelText("sidebar")).toBeVisible();
  });

  it("should be hidden when drawer is closed", () => {
    render(
      <MemoryRouter>
        <SideBar isDrawerOpen={false} />
      </MemoryRouter>
    );
    expect(screen.getByLabelText("sidebar")).not.toBeVisible();
  });

  it("should contain a heading with an icon", () => {
    setup();
    const heading = screen.getByRole("heading", { name: /habit coach/i });
    expect(heading).toBeInTheDocument();
  });

  it("should contain a list of 6 links", () => {
    setup();
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
  });

  it.each([
    /dashboard/i,
    /toutes les habitudes/i,
    /statistiques/i,
    /communaut/i,
    /param/i,
    /aide/i,
  ])("should contain a link with the text %s", (text) => {
    setup();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should apply hover class only if component uses dynamic class change", async () => {
    setup();
    const user = userEvent.setup();
    const link = screen.getAllByRole("link")[0];

    await user.hover(link);
    expect(link.className).toMatch(/hover/);
    await user.unhover(link);
  });

  it("should navigate to the community page when clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <SideBar isDrawerOpen={true} />

        <Routes>
          <Route path="/communaute" element={<div>Habitudes populaires</div>} />
        </Routes>
      </MemoryRouter>
    );

    await user.click(screen.getByText(/communaut/i));

    expect(screen.getByText(/habitudes populaires/i)).toBeInTheDocument();
  });

  it("should render a profile picture", () => {
    setup();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toMatch(/uploads\/avatar/i);
  });
});
