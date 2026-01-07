"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/images/github.png";
import LinkedInIcon from "../../public/images/linkined.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-white mb-4 max-w-md">
          Feel free to reach out. I’d love to hear from you.
        </p>

        <div className="flex gap-2">
          <Link href="https://github.com" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src={LinkedInIcon} alt="Linkedin Icon" className="w-8 h-8" />
          </Link>
        </div>
      </div>

      <div className="w-full">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just Saying Hi"
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5"
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>

          {status && <p className="text-white mt-3">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
