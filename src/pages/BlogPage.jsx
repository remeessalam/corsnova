import { useState } from "react";
import BlogHeader from "../components/blog/BlogHeader";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../Util/api";
import BlogItem from "../components/blog/BlogItem";
import { LoadingSpinner } from "../components/LoadingSpinner";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";

function BlogPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await getBlogs();
      return response.data.blogs;
    },
  });

  const blogs = data || [];
  return (
    <>
      <WebsiteHeader />

      <div className="relative max-w-screen min-h-screen">
        <div className="absolute inset-0 h-[30rem] w-full bg-gradient-to-b from-primary via-secondary/50 to-white" />

        <BlogHeader />
        <div className="wrapper pb-[3rem]">
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-center py-10 text-red-500">
              {error.message || "Failed to load blogs. Please try again later."}
            </div>
          ) : (
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {blogs.length > 0 ? (
                blogs.map((blog) => <BlogItem key={blog._id} item={blog} />)
              ) : (
                <div className="col-span-3 text-center text-2xl py-10 text-black">
                  No blogs found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
}

export default BlogPage;
