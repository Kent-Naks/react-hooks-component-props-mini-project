// src/__tests__/About.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import logo from "../assets/logo";
import defaultLogo from "../assets/default-logo.png"; // Update with actual path to default logo

test("renders a <aside> element", () => {
  const { container } = render(<About />);
  expect(container.querySelector("aside")).toBeInTheDocument();
});

test("renders a <img> with the blog logo and alt text of 'blog logo'", () => {
  render(<About image={logo} />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(logo); // Ensure logo is correctly compared
});

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(defaultLogo); // Check for default image URL
});

test("renders a <p> with the about text", () => {
  render(<About about="About this blog" />);
  const p = screen.queryByText("About this blog");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

