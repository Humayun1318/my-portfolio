"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

export function ContactForm() {
  const [error, setError] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.querySelector("#firstname") as HTMLInputElement).value;
    const email = (form.querySelector("#email") as HTMLInputElement).value;
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value;

    if (!name) {
      return setError("Name");
    } else if (!email) {
      return setError("Mail");
    } else if (!message) {
      return setError("Message");
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Message sent successfully!", {
        position: "top-center",
      });
      form.reset();
      setError("");
    } else {
      toast.warn("Error sending message!", { position: "top-center" });
    }
  };

  return (
    <div className="mx-auto w-full max-w-11/12 rounded-none bg-[#040d331c] p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Contact Me</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Please fill out the form below to get in touch with me.
      </p>

      <form className="my-8 space-y-5" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="firstname">Your name:</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
          {error === "Name" && <p className="text-sm text-red-500">Name is required</p>}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message..."
            rows={4}
            className="font-medium" // Add custom classes
          />
          {error === "Message" && <p className="text-sm text-red-500">Message is required</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mt-4 mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          {error === "Mail" && <p className="text-sm text-red-500">Email is required</p>}
        </LabelInputContainer>

        <button
          className="group/btn relative mt-8 block h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
