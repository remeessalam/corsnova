import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Faq from "../Components/Faq";
import { useQuery } from "@tanstack/react-query";
import BlogItem from "../components/blog/BlogItem";
import { getBlogBySlug, getBlogs } from "../Util/api";
import { LoadingSpinner } from "../components/LoadingSpinner";
import ViewBlogHeader from "../components/blog/ViewBlogHeader";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import { Helmet } from "react-helmet";
import FloatingIcons from "../components/blog/FloatingIcons";
import SubscribePopup from "../components/blog/SubscribePopup";

function BlogView() {
  const { slug } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!slug || hasTriggered) return;
    const hasSubmitted = localStorage.getItem("hasSubmittedForm");
    const expiry = localStorage.getItem("formSubmissionExpiry");

    if (hasSubmitted === "true") {
      if (expiry && new Date(expiry) > new Date()) {
        return; // Still within expiry period
      } else {
        // Expired, clear the flags
        localStorage.removeItem("hasSubmittedForm");
        localStorage.removeItem("formSubmissionExpiry");
      }
    }

    // Time-based trigger (5 seconds)
    const timeTrigger = setTimeout(() => {
      triggerPopup();
    }, 5000);

    // Scroll-based trigger (50% of page)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollPosition / pageHeight) * 100;

      if (scrollPercentage > 50) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeTrigger);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slug, hasTriggered]);

  const triggerPopup = () => {
    if (!hasTriggered) {
      setShowPopup(true);
      setHasTriggered(true);
    }
  };

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
  let h1tag = document.getElementsByTagName("h1");
  for (let i = 0; i < h1tag.length; i++) {
    h1tag[i].style.fontSize = "2rem";
  }

  let h2tag = document.getElementsByTagName("h2");
  for (let i = 0; i < h2tag.length; i++) {
    h2tag[i].style.fontSize = "1.5rem";
  }

  let h3tag = document.getElementsByTagName("h3");
  for (let i = 0; i < h3tag.length; i++) {
    h3tag[i].style.fontSize = "1.3rem";
  }

  let h4tag = document.getElementsByTagName("h4");
  for (let i = 0; i < h4tag.length; i++) {
    h4tag[i].style.fontSize = "1rem";
  }

  let h5tag = document.getElementsByTagName("h5");
  for (let i = 0; i < h5tag.length; i++) {
    h5tag[i].style.fontSize = "0.83rem";
  }

  let h6tag = document.getElementsByTagName("h6");
  for (let i = 0; i < h6tag.length; i++) {
    h6tag[i].style.fontSize = "0.67rem";
  }

  return (
    <>
      {" "}
      <WebsiteHeader />
      <Helmet>
        <title>{blog.title} | Kheya Mindai</title>
        <meta
          name="description"
          content={
            blog.metaDescription || blog.excerpt || `Read about ${blog.title}`
          }
        />
        {blog.metaKeywords && blog.metaKeywords.length > 0 ? (
          <meta name="keywords" content={blog.metaKeywords.join(",")} />
        ) : (
          blog.tags &&
          blog.tags.length > 0 && (
            <meta name="keywords" content={blog.tags.join(",")} />
          )
        )}
        {blog.categoryId && (
          <meta name="category" content={blog.categoryId.name} />
        )}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={
            blog.metaDescription || blog.excerpt || `Read about ${blog.title}`
          }
        />
        <meta property="og:image" content={blog.imageUrl} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://corsnova.com/blog/${slug}`} />
      </Helmet>
      <FloatingIcons />
      {showPopup && <SubscribePopup onClose={() => setShowPopup(false)} />}
      <div className="relative  overflow-x-hidden max-w-screen">
        <div className="absolute inset-0 h-[30rem] w-full bg-gradient-to-b from-primary via-secondary/50 to-white" />

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
