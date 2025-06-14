// src/components/blog/SubscribePopup.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../constant";
import { IoMail } from "react-icons/io5";

const SubscribePopup = ({ onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    // Construct the email body
    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Interested in: Free strategy call";

    // Construct the request payload
    var payload = {
      name: companyDetails.name,
      to: companyDetails.email,
      //   to: "remeesreme4u@gmail.com",
      subject: "New Subscription Request",
      body: emailBody,
    };

    try {
      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const res = await response.json();
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Email sent successfully");
        setIsSuccess(true);
        reset();

        // Set local storage items
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        localStorage.setItem("hasSubmittedForm", "true");
        localStorage.setItem("formSubmissionExpiry", expiryDate.toISOString());

        // Close popup after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white text-black rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Thank You!
            </h3>
            <p>We'll be in touch soon to schedule your free strategy call.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-2">
              🚀 Curious how AI can grow your business?
            </h3>
            <p className="mb-4">
              Get a free 15-min strategy call + a custom roadmap for using AI in
              your industry.
            </p>
            <p className="mb-6 text-sm text-gray-600">
              👉 Just drop your name & email below.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-black py-3 rounded-lg hover:bg-primary/90 transition flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <IoMail /> Get Our Free Call
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscribePopup;
