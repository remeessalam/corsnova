import axios from "axios";

// const baseUrl = "http://localhost:5001/api";
const baseUrl = "https://corsnova-backend-main.vercel.app/api";

// get all blogs (published)
export const getBlogs = () => axios.get(`${baseUrl}/blogs/published`);

// get blog by slug
export const getBlogBySlug = (slug) =>
  axios.get(`${baseUrl}/blogs/slug/${slug}`);

// get featured blogs
export const getFeaturedBlogs = () => axios.get(`${baseUrl}/blogs/featured`);
