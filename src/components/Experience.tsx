"use client";
import React from "react";
import { bebasNeue } from "./Projects";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/ThemeContext";
import { FaLocationArrow } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <Section id="experience" divClassName="md:flex-col">
      {/* Heading */}
      <SectionHeading title="My Experience" className="text-center" />
      <div ref={ref} className="mt-8">
        <VerticalTimeline
          lineColor={`${theme === "light" ? `black` : "white"}`}
        >
          <VerticalTimelineElement
            className=""
            visible={inView}
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="Aug 2023 - Present"
            dateClassName="dark:text-white text-black"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="">Product Manager</h3>
            <h4 className="flex">
              <a
                className="underline underline-offset-2"
                target="_blank"
                href="https://kognics.ai"
              >
                Kognics.ai
              </a>{" "}
              <span className="flex items-center ml-3">
                <GoLocation className="mr-1" /> Jaipur
              </span>
            </h4>
            <p>
              As Product Manager at Kognics, I streamlined development cycles,
              enhanced app reliability, improved user satisfaction by 25%,
              optimized UI with Figma, and aligned Agile processes to deliver
              strategic goals efficiently.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            visible={inView}
            contentStyle={{
              backgroundColor: "#0f172a",
              color: "#fff",
            }}
            date="July 2022 - July 2023"
            dateClassName="dark:text-white text-black"
            iconStyle={{
              background: "#0f172a",
              color: "#fff",
            }}
            icon={<MdWork />}
          >
            <h3 className="">Product Analyst</h3>
            <h4 className="flex">
              <a
                className="underline underline-offset-2"
                target="_blank"
                href="https://rapidoform.com"
              >
                Veesys Infosolutions Pvt Ltd
              </a>{" "}
              <span className="flex items-center ml-3">
                <GoLocation className="mr-1" /> Jaipur
              </span>
            </h4>
            <p>
              At Veesys Infosolutions, I enhanced customer satisfaction, drove a
              40% revenue increase, utilized SQL and BI tools for data analysis,
              optimized processes, and collaborated with teams to deliver
              scalable solutions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
