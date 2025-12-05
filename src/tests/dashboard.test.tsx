import { Dashboard } from "@/components/pages/Dashboard";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

describe("Dashboard component", () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  it("should render the dashboard component", () => {
    const dashboard = screen.getByLabelText("dashboard");
    expect(dashboard).toBeInTheDocument();
  });

  it("should render the dashboard title, sub-title, and CTA", () => {
    const title = screen.getByRole("heading", { name: /mes habitudes du jour/i });
    const subTitle = screen.getByLabelText("sub-title");
    const Action = screen.getByRole("button", { name:/ajouter une habitude/i });

    const Array = [title, subTitle, Action];

    Array.forEach((elt) => expect(elt).toBeInTheDocument());
  });

});
