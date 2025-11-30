import { describe, it, expect, beforeEach } from "vitest";
import { SideBar } from "../components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Sidebar component", () => {
  const user = userEvent.setup();

  it("should render properly on mount", () => {
    render(<SideBar isDrawerOpen={true} />);
    expect(screen.getByLabelText("sidebar")).toBeVisible();
  });
  it("should be hide when drawer is closed", () => {
    render(<SideBar isDrawerOpen={false} />);
    expect(screen.getByLabelText("sidebar")).not.toBeVisible();
  });
  it("should contain a heading with an icon", () => {
    render(<SideBar isDrawerOpen={true} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toHaveTextContent("Habit Coach");
  });
  it("should contain a list of links", () => {
    render(<SideBar isDrawerOpen={true} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(6);
  });

  beforeEach(() => render(<SideBar isDrawerOpen={true} />));

  it.each([
    /dashboard/i,
    /toutes les habitudes/i,
    /statistiques/i,
    /communauté/i,
    /param/i,
    /aide/i,
  ])("should contain a link with the text %s", (text) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  const link = screen.getByRole("listitem");

  it("should change color when hovered", async () => {
    await user.hover(link);
    expect(link).toHaveClass("hover:bg-blue-400 hover:text-blue-600");
    await user.unhover(link);
    expect(link).not.toHaveClass("hover:bg-blue-400 hover:text-blue-600");
  });

  it("should navigate to the community page when clicked", async () => {
    await user.click(screen.getByText(/communaut/i));
    expect(screen.getByText(/habitudes populaires/i)).toBeInTheDocument();
  });

  it("should render a profile picture", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", /uploads\/avatar/i);
  });
});
