"use client";
import { CircleArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export default function NewsletterForm() {
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email } = formData;

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

    // Submit the form
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
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        // toast.success("Thank you for subscribing!");
        setMessageDialogOpen(true);
        setFormData({ firstName: "", lastName: "", email: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  const floatingLabelClass = (value: string) =>
    value ? "text-xs -top-2 left-1 text-white" : "top-2 left-2 text-white";

  return (
    <div className="mx-4">
      <div className="bg-[#1E60AC] p-4 max-w-5xl mx-auto flex justify-center relative z-30 -mt-[104px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-2 w-full"
        >
          <span className="text-white font-semibold md:mr-6 w-full md:w-auto text-center md:text-left text-sm md:text-base">
            SUBSCRIBE THE NEWSLETTER
          </span>

          {["firstName", "lastName", "email"].map((field, index) => (
            <div key={index} className="relative w-full md:w-48">
              <input
                type="text"
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                className="peer w-full h-12 px-2 pt-4 text-white bg-[#2D8CBB] focus:outline-none text-sm font-roboto"
              />
              <label
                className={`absolute pointer-events-none transition-all duration-200 ease-in-out font-bold mt-1 top-0.5 opacity-80 ${floatingLabelClass(
                  formData[field as keyof FormData]
                )} peer-focus:text-xs peer-focus:top-0 peer-focus:left-2`}
              >
                {field.replace(/([A-Z])/, " $1").toUpperCase()}
              </label>
            </div>
          ))}

          <button
            type="submit"
            className="flex items-center justify-center gap-1 text-white font-semibold px-3 py-2 w-full md:w-auto"
          >
            <CircleArrowLeft className="rotate-180" />
            SIGN ME UP
          </button>
        </form>
      </div>
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