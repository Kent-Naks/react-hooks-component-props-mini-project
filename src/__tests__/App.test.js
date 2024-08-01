// src/__tests__/App.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import blogData from "../data/blog"; // Adjust path to your blogData

// Mock blogData if necessary
jest.mock("../data/blog", () => ({
  name: "Underreacted",
  image: "mock-image-url", // Replace with appropriate mock or leave as is
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    // Add more mock posts if needed
  ],
}));

test("renders the correct child components", () => {
  render(<App />);
  
  // Check if the main container is rendered
  expect(screen.getByText(/Underreacted/i)).toBeInTheDocument(); // Check blog name
  
  // Check for specific components within App
  expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming <Header> uses role 'banner'
  expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Assuming <About> uses role 'contentinfo'
  expect(screen.getByRole('main')).toBeInTheDocument(); // Assuming <ArticleList> uses role 'main'
  
  // Check for content within child components if needed
  expect(screen.getByAltText("blog logo")).toBeInTheDocument(); // Ensure the image is rendered
  expect(screen.getByText("A blog about learning React")).toBeInTheDocument(); // Check about text
});

