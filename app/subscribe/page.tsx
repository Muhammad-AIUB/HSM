/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import NextButton from "@/components/Shared/NextButton";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export default function SubscribePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/admin@healthsystemsmatter.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            _subject: "New Newsletter Subscription",
            _captcha: "false",
            _template: "box",
          }),
        }
      );

      if (response.ok) {
        setSubscribed(true);
        // toast.success("Thank you for subscribing!");
        setMessageDialogOpen(true);
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="mb-12">
      <div className="flex justify-center items-center  bg-gradient-to-r from-sky-50 via-white to-sky-50 p-6 px-12 pb-16">
        <div className="max-w-2xl w-full py-2 text-center">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-6"
          >
            📩 Stay Informed – Subscribe Now!
          </motion.h3>
          <p className="mt-2">
            Subscribe once to receive curated updates on public health insights,
            upcoming events, thought-provoking blogs, expert interviews, and
            more—delivered straight to your inbox.
          </p>

          {/* Subscription Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 flex flex-col gap-4 shadow-sm p-8 border py-10 bg-[#6BCBD5]/80"
          >
            <input
              type="text"
              placeholder="First Name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 outline-none focus:ring-sky-500 font-medium placeholder-black/80"
            />
            <input
              type="text"
              placeholder="Last Name *"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 outline-none focus:ring-sky-500  font-medium placeholder-black/80"
            />
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 outline-none focus:ring-sky-500  font-medium placeholder-black/80"
                required
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-[#339aa5] text-white px-5 py-2.5 rounded-lg text-[18px]   transition-all duration-300 shadow-sm flex items-center justify-center gap-2 font-bold "
            >
              Submit
            </button>
          </motion.div>

          {subscribed && (
            <p className="mt-4 text-green-600 font-semibold">
              ✅ Thank you, {firstName}! You'll receive updates soon.
            </p>
          )}

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <p className="font-medium text-xl text-[#001844]">
              Follow us on social media:
            </p>
            <div className="flex gap-6 justify-center mt-3">
              <a
                href="https://www.linkedin.com/company/104141138/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-medium  text-blue-700  hover:text-sky-900 transition-all duration-300"
              >
                <FaLinkedinIn size={26} className="text-blue-600" /> LinkedIn
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564171250656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-medium text-blue-700 hover:text-sky-900 transition-all duration-300"
              >
                <FaFacebook size={28} className="text-blue-600" /> Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <NextButton text="Next" href="/newsletter/all-previous-issues" />

      {
        messageDialogOpen && <MessageDialog open={messageDialogOpen} setOpen={setMessageDialogOpen} />
      }
    </div>
  );
}

function MessageDialog({open, setOpen}: {open: boolean, setOpen: any}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="z-[50000] max-w-[650px] min-h-72 bg-cyan-100 px-8 flex items-center max-h-screen overflow-auto p-0">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="h-full p-8 rounded-md font-roboto text-justify text-lg">
        Thank you for subscribing! <br /> <br />
        You will receive the updated newsletter at the provided email address once it is published.
        </div>
      </DialogContent>
    </Dialog>
  );
}
