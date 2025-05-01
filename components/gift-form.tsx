"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";


interface GiftFormProps {
  image: any;
}

export default function GiftForm({ image }: GiftFormProps) {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const name = searchParams.get("name");
  const [fullName, setFullName] = useState("");
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);

  useEffect(()=>{
    if(message === "gift-sent"){
      setMessageDialogOpen(true);
    }
  }, [message])

  return (
    <div className="grid w-full md:w-[75%] mx-auto gap-4 md:grid-cols-2 items-center bg-[#6BCBD5]/80 p-4 px-8">
      <Card>
        <CardHeader className="px-0">
          <CardTitle className="text-3xl font-bold text-red-600">
            Gift for You
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
            <form
              action="https://formsubmit.co/admin@healthsystemsmatter.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden fields for customization */}
              <input
                type="hidden"
                name="_subject"
                value="🎁 Your Gift PDF is Here!"
              />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="true" />
              <input
                type="hidden"
                name="_autoresponse"
                value={`Hi there,\n\nThanks for requesting your gift 🎁!\n\nClick the link below to download it:\n📥 https://healthsystemsmatter.com/files/Knowledge_Gift_Health_Systems_Matter_2025.pdf\n\n. Thank you.`}
              />
              <input
                type="hidden"
                name="_next"
                value={`https://healthsystemsmatter.com/gift-for-u?message=gift-sent&name=${encodeURIComponent(
                  fullName
                )}`}
              />

              {/* Use plain HTML input names that FormSubmit understands */}
              <div>
                <label htmlFor="fullName">
                  Full Name<span className="text-destructive ml-1">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="email">
                  Email<span className="text-destructive ml-1">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg bg-[#339aa5] font-bold text-white py-2 rounded"
              >
                Submit
              </button>
            </form>

        </CardContent>
      </Card>

      <div className="relative h-[400px] overflow-hidden order-first md:order-last flex justify-center">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt="Gift Box"
          className="object-cover w-[85%] py-8"
        />
      </div>
      {
        messageDialogOpen && <MessageDialog open={messageDialogOpen} setOpen={setMessageDialogOpen} name={name} />
      }
    </div>
  );
}

function MessageDialog({open, setOpen, name}: {open: boolean, setOpen: any, name:string | null}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="z-[50000] max-w-[650px] min-h-72 bg-cyan-100 px-8 flex items-center max-h-screen overflow-auto p-0">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <div className="h-full p-8 rounded-md font-roboto text-justify text-lg">
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary w-8 h-8"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Thank You, {name}!</h3>
              <p className="text-black">
                Kindly check your email — the gift has been sent as an
                attachment. If you do not find it in your inbox, please check
                your spam or junk folder.
              </p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}