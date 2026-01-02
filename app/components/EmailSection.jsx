import react from "react";
import GithubIcon from "../../public/images/github.png";
import LinkedInIcon from "../../public/images/linkined.png";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  return (
    <section className="grid  md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-xl font-bold  text-white  my-2">Lets Connect </h5>
        <p className="text-white mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          recusandae dicta commodi accusantium, omnis molestiae atque vitae at
          dignissimos deserunt distinctio eveniet sed, deleniti ea earum. Sit
          doloremque voluptatum quidem?
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src={LinkedInIcon} alt="Linkedin Icon" className="w-8 h-8" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[450px] ">
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {" "}
              Your Email
            </label>
            <input
              type="text"
              id="email"
              required
              placeholder="example@gmail.com"
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5   "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              {" "}
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just Saying Hi"
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5   "
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5  "
              placeholder="Let's talk About...."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default EmailSection;
