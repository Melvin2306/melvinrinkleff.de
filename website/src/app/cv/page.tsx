import React from "react";
import Link from "next/link";

const CV: React.FC = () => {
  const data = {
    name: "Melvin Rinkleff",
    position: "Student Software Engineering",
    email: "melvin.rinkleff@gmx.de",
    phone: "+49 1590 1188669",
    education: [
      {
        degree: "Exchange Semester",
        institution: "NTNU - Norwegian University of Science and Technology",
        period: "August 2023 - December 2023",
        location: "Gjøvik",
        courses: [
          "//Slash Hackathon",
          "Building my own Web Application",
          "Research in relationships and sexual pleasure",
          "Spotify Data Analysis",
          "Group Full Stack Development",
        ],
        url: "https://www.ntnu.edu",
      },
      {
        degree: "Bachelor Software Engineering",
        institution: "CODE University of Applied Sciences",
        period: "2021 - Present",
        location: "Berlin",
        projects: [
          "//Slash Hackathon",
          "Building my own Web Application",
          "Research in relationships and sexual pleasure",
          "Spotify Data Analysis",
          "Group Full Stack Development",
        ],
        url: "https://code.berlin",
      },
      {
        degree:
          "Bachelor Business Administration (Specialization Energy Economics)",
        institution: "Hochschule Weserberland",
        period: "2018 - 2021",
        location: "Hameln",
        project:
          "Transformation of the German gas infrastructure to hydrogen infrastructure",
        url: "https://www.hsw-hameln.de",
      },
    ],
    experience: [
      {
        role: "Working Student Full Stack Development",
        company: "Carbyte",
        period: "August 2023 - Present",
        location: "Remote",
        description: "Fullstack development with Next.js",
        url: "https://carbyte.de",
      },
      {
        role: "Founder Associate (Working Student)",
        company: "suena GmbH",
        period: "September 2022 - July 2023",
        location: "Hamburg (remote)",
        description:
          "Support of the founders in administrative tasks, business development and finance and development of KPIs",
        url: "https://www.suena.energy",
      },
      {
        role: "Working Student Operations",
        company: "Ostrom",
        period: "March 2022 - September 2022",
        location: "Berlin",
        description:
          "Energy industry specific operations tasks, edifact communication with market partners, customer service",
        url: "https://www.ostrom.de",
      },
      {
        role: "Business Process Analyst",
        company: "enercity",
        period: "July 2021 - March 2022",
        location: "Hannover (remote)",
        description:
          "Business process management and execution of business process automation for energy trading compliance processes",
        url: "https://www.enercity.de",
      },
      {
        role: "Dual Studies (Business Administration with Specialization in Energy Economics)",
        company: "enercity",
        period: "August 2018 - July 2021",
        location: "Hannover",
        description:
          "Working in different teams and departments throughout the organization and special focus on the energy trading department and compliance",
        url: "https://www.enercity.de",
      },
    ],
    industryKnowledge: [
      "Business Process Management",
      "Full Stack Development",
      "Project Management",
      "Product Management",
      "Energy Industry Research",
    ],
    skills: [
      { name: "HTML/CSS" },
      { name: "MS Office" },
      { name: "Javascript" },
      { name: "Python" },
    ],
    languages: [
      { name: "German", proficiency: "Native" },
      { name: "English", proficiency: "Fluent" },
    ],
    tools: [
      { name: "Notion" },
      { name: "Figma" },
      { name: "Miro" },
      { name: "VS Code" },
      { name: "Intercom" },
      { name: "Hubspot" },
      { name: "SAP" },
      { name: "Power Cloud" },
      { name: "Postman" },
      { name: "Trello" },
      { name: "Jira" },
      { name: "Asana" },
      { name: "Slack" },
    ],
    socials: [
      {
        platform: "LinkedIn",
        link: "https://linkedin.com/in/melvin-rinkleff",
      },
      {
        platform: "Github",
        link: "https://github.com/Melvin2306",
      },
    ],
    additionalCourses: [
      {
        name: "Basic Certificate of Project Management",
        institution: "GPM-Deutsche Gesellschaft für Projektmanagement e.V.",
        year: "2020",
        location: "Hameln",
        url: "https://www.gpm-ipma.de",
      },
    ],
    voluntaryWork: [
      {
        role: "Member of the Social Committee",
        organization: "CHANCEN eG",
        period: "2022 - Present",
        location: "Berlin",
        description:
          "Deciding over requests for hardship from repayers. CHANCEN eG promotes equal opportunities for students irrespective of their financial background to finance their studies through an income share agreement",
        url: "https://chancen-eg.de",
      },
      {
        role: "Hackathon Event Management",
        organization: "//Slash Berlin",
        period: "2021 - Present",
        location: "Berlin",
        description:
          "Event Management and various other tasks at //Slash. //Slash is a student initiative at CODE University at which we are organizing a sustainability hackathon for 400 students and young professionals",
        url: "https://www.slash.berlin",
      },
      {
        role: "Member of the Student Council",
        organization: "CODE University of Applied Sciences",
        period: "2021 - 2022",
        location: "Berlin",
        description:
          "Representation of the student body in different areas of the university life at CODE, in particular being a member of the Admission Committee, initiating and organizing community events",
        url: "https://code.berlin",
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      {/* Education Section */}
      <div className="my-4">
        <h2 className="text-2xl font-bold">Education</h2>
        {data.education.map((edu) => (
          <div
            key={edu.institution}
            className="border border-blue-200 rounded-md p-2 my-2"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p>
              <a href={edu.url}>{edu.institution}</a>
            </p>
            <p>{edu.period}</p>
          </div>
        ))}
      </div>
      {/* Experience Section */}
      <div className="my-4">
        <h2 className="text-2xl font-bold">Experience</h2>
        {data.experience.map((exp) => (
          <div
            key={exp.company}
            className="border border-blue-200 rounded-md p-2 my-2"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p>
              <a href={exp.url}>{exp.company}</a>
            </p>
            <p>{exp.period}</p>
          </div>
        ))}
      </div>
      {/* Voluntary Work Section */}
      <div className="my-4">
        <h2 className="text-2xl font-bold">Voluntary Work</h2>
        {data.voluntaryWork.map((work) => (
          <div
            key={work.organization}
            className="border border-blue-200 rounded-md p-2 my-2"
          >
            <h3 className="text-xl font-semibold">{work.role}</h3>
            <p>
              <a href={work.url}>{work.organization}</a>
            </p>
            <p>{work.period}</p>
          </div>
        ))}
      </div>
      {/* Additional Courses Section */}
      <div className="my-4">
        <h2 className="text-2xl font-bold">Additional Courses</h2>
        {data.additionalCourses.map((course) => (
          <div
            key={course.name}
            className="border border-blue-200 rounded-md p-2 my-2"
          >
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <p>
              <a href={course.url}>{course.institution}</a>
            </p>
            <p>{course.year}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row my-4">
        {/* Skills Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul>
            {data.skills.map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </ul>
        </div>
        {/*  Industry Knowledge Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold">Industry Knowledge</h2>
          <ul>
            {data.industryKnowledge.map((knowledge) => (
              <li key={knowledge}>{knowledge}</li>
            ))}
          </ul>
        </div>
        {/* Tools Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold">Tools</h2>
          <ul>
            {data.tools.map((tool) => (
              <li key={tool.name}>{tool.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row">
        {/* Languages Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold">Languages</h2>
          <ul>
            {data.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
        </div>

        {/* Socials Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold">Socials</h2>
          <ul>
            {data.socials.map((social) => (
              <li key={social.platform}>
                <Link href={social.link} target="_blank" rel="noreferrer">
                  {social.platform}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CV;
