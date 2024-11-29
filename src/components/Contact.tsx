import React from "react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import ContactForm from "./ContactForm";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <Section id="contact" divClassName="">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <SectionHeading
          className="text-center md:text-left"
          title="Contact Me"
        />
        <div className="flex flex-col gap-10">
          {/* Email and resume */}
          <div className="flex flex-col text-center md:text-left gap-2">
            <p>
              Contact me at{" "}
              <a
                href=""
                className="dark:text-green-wala border-b pb-[1px] border-solid dark:border-green-wala border-black-wala"
              >
                utkarshj40@gmail.com
              </a>
              <span className="mx-4">OR</span>
              <a
                href=""
                className="dark:text-green-wala border-b pb-[1px] border-solid dark:border-green-wala border-black-wala"
              >
                +91 9799458603
              </a>
            </p>
            <p>
              For more info, here&apos;s my{" "}
              <a
                className="dark:text-green-wala border-b pb-[1px] border-solid dark:border-green-wala border-black-wala"
                href="/Utkarsh JainResume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex gap-8 text-3xl justify-center md:justify-start dark:text-green-wala">
            <a
              href="https://www.linkedin.com/in/utkarsh-jain-31b507b8/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
