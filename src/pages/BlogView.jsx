import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Faq from "../Components/Faq";
import { useQuery } from "@tanstack/react-query";
import BlogItem from "../components/blog/BlogItem";
import { getBlogBySlug, getBlogs } from "../Util/api";
import { LoadingSpinner } from "../components/LoadingSpinner";
import ViewBlogHeader from "../components/blog/ViewBlogHeader";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";

function BlogView() {
  const { slug } = useParams();

  // Query for the specific blog
  const {
    data: blogData,
    isLoading: isBlogLoading,
    error: blogError,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const response = await getBlogBySlug(slug);
      return response.data.blog;
    },
    enabled: !!slug,
  });

  // Query for recent blogs
  const {
    data: recentBlogsData,
    isLoading: isRecentBlogsLoading,
    error: recentBlogsError,
  } = useQuery({
    queryKey: ["recentBlogs", slug],
    queryFn: async () => {
      const response = await getBlogs();
      // Filter out the current blog and limit to 3 blogs
      return response.data.blogs
        .filter((item) => item.slug !== slug)
        .slice(0, 3);
    },
    enabled: !!slug,
  });

  const blog = blogData;
  const recentBlogs = recentBlogsData || [];
  const isLoading = isBlogLoading || isRecentBlogsLoading;
  const error = blogError || recentBlogsError;

  // Scroll to top when blog changes
  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="wrapper pt-[5rem] text-center text-red-500">
        {error || "Blog not found"}
      </div>
    );
  }

  return (
    <>
      {" "}
      <WebsiteHeader />
      <div className="relative  overflow-x-hidden max-w-screen">
        <div className="relative max-w-5xl mx-auto px-4 space-y-10 pt-[7rem] pb-10 overflow-hidden">
          {/* Blog Header with all metadata */}
          <ViewBlogHeader blog={blog} />

          {/* Blog Content */}
          <div className="blog-content-container text-black">
            <div
              className="reset-html-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="wrapper paddingtop">
          <div className="flex justify-center items-center flex-col text-black">
            {/* <h1 className="text-[13px]  font-medium ">Recent Posts</h1> */}

            <h1 data-aos="fade-up" className=" my-3 heading-2">
              Related Posts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 dark:bg-darkblack">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((post, index) => (
                  <BlogItem key={index} item={post} passkey={true} />
                ))
              ) : (
                <p className="text-center col-span-3 text-gray-500 dark:text-gray-400 py-8">
                  No related posts found
                </p>
              )}
            </div>
            <div className="text-center mt-4 mb-12">
              <Link
                to="/blogs"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
              >
                View All Blogs
              </Link>
            </div>
          </div>
          {/* <Faq /> */}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
}

export default BlogView;
