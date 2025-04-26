"use client";
const StayConnectePage = () => {
  return (
    <>
      <SectionTitleWithoutSub title="Stay Connected" />
      <div className="border-t-2 pt-10 pb-24 max-w-4xl mx-auto px-12">
        <h2 className="text-3xl font-bold">Hello 👋</h2>
        <p className="mt-4 text-lg">
          Thank you for your interest. Whether you have a question, are eager to
          collaborate, or simply want to connect, I&apos;m always happy to hear
          from you. Even, any kind of feedback is also highly appreciated. Feel
          free to leave a message, and I&apos;ll get back to you as soon as
          possible.
        </p>
        <p className="text-blue-500 font-bold mt-4 text-xl">
          There is nothing more exciting than hearing from you. Your feedback
          helps us better!
        </p>
        <ContactForm />
        <NextButton text="Next" href="/support-hsm" />
      </div>
    </>
  );
};

export default StayConnectePage;

import NextButton from "@/components/Shared/NextButton";
import { SectionTitleWithoutSub } from "@/components/Shared/SectionTitle/SectionTitle";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/9891567653de0d793191e58899a01f6c",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Email: email,
            Message: message,
            _subject: "New Contact Message",
            _template: "box",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        toast.success("Message sent! Thank you for reaching out.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#C1E2E5]  shadow-md rounded-md mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-black font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-black font-medium">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-black font-medium">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2D8CBB] text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
