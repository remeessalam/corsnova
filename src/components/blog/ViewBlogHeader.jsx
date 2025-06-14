import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function ViewBlogHeader({ blog }) {
  // Format the publish date
  const formattedDate = blog.publishDate
    ? format(new Date(blog.publishDate), "MMMM dd, yyyy")
    : format(new Date(blog.createdAt), "MMMM dd, yyyy");

  return (
    <header className="z-10 " data-aos="fade-up">
      {/* ✅ Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-2">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link to="/" className="hover:underline !text-black">
              Home
            </Link>
            <span className="mx-1">/</span>
          </li>
          <li>
            <Link to="/blogs" className="hover:underline !text-black">
              Blogs
            </Link>
            <span className="mx-1">/</span>
          </li>
          <li className="text-black">{blog.title}</li>
        </ol>
      </nav>

      <h1 className="heading-2 !text-[2.25rem] md:!text-[2.5rem] text-black  mb-2 py-4">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center text-sm text-gray-800 0 gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Author:</span>
          <span>{blog.author?.name || blog.authorId?.name || "Admin"}</span>
        </div>
        <span className="hidden md:inline">|</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">Published:</span>
          <span>{formattedDate}</span>
        </div>
        <span className="hidden md:inline">|</span>
        <div className="flex items-center gap-2">
          <span className="font-medium">Category:</span>
          <span>{blog.categoryId?.name || "Uncategorized"}</span>
        </div>
      </div>

      {blog.excerpt && (
        <p className="text-gray-800 mb-6 text-lg italic">{blog.excerpt}</p>
      )}

      <div className="relative flex justify-center items-center">
        <img
          src={blog.imageUrl}
          alt={blog.imageAlt || blog.title}
          className="w-full max-h-[480px] md:h-[480px] rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default ViewBlogHeader;
