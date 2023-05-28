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
        degree: "Bachelor Software Engineering",
        institution: "CODE University of Applied Sciences",
        period: "2021-Present",
        location: "Berlin",
        projects: [
          "//Slash Hackathon",
          "Building my own Web Application",
          "Research in relationships and sexual pleasure",
          "Spotify Data Analysis",
          "Group Full Stack Development",
        ],
      },
      {
        degree:
          "Bachelor Business Administration (Specialization Energy Economics)",
        institution: "Hochschule Weserberland",
        period: "2018-2021",
        location: "Hameln",
        project:
          "Transformation of the German gas infrastructure to hydrogen infrastructure",
      },
    ],
    experience: [
      {
        role: "Founder Associate (Working Student)",
        company: "suena",
        period: "September 2022-Present",
        location: "Hamburg (remote)",
        description:
          "Support of the founders in administrative tasks, business development and finance and development of KPIs",
      },
      {
        role: "Working Student Operations",
        company: "Ostrom",
        period: "March 2022-September 2022",
        location: "Berlin",
        description:
          "Energy industry specific operations tasks, edifact communication with market partners, customer service",
      },
      {
        role: "Business Process Analyst",
        company: "enercity",
        period: "July 2021-March 2022",
        location: "Hannover (remote)",
        description:
          "Business process management and execution of business process automation for energy trading compliance processes",
      },
      {
        role: "Dual Studies (Business Administration with Specialization in Energy Economics)",
        company: "enercity",
        period: "August 2018-July 2021",
        location: "Hannover",
        description:
          "Working in different teams and departments throughout the organization and special focus on the energy trading department and compliance",
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
      },
    ],
    voluntaryWork: [
      {
        role: "Member of the Student Council",
        organization: "CODE University of Applied Sciences",
        period: "2021-2022",
        location: "Berlin",
        description:
          "Representation of the student body in different areas of the university life at CODE, in particular being a member of the Admission Committee, initiating and organizing community events",
      },
      {
        role: "Hackathon Event Management",
        organization: "//Slash Berlin",
        period: "2021-Present",
        location: "Berlin",
        description:
          "Event Management and various other tasks at //Slash. //Slash is a student initiative at CODE University at which we are organizing a sustainability hackathon for 400 students and young professionals",
      },
      {
        role: "Member of the Social Committee",
        organization: "CHANCEN eG",
        period: "2022-Present",
        location: "Berlin",
        description:
          "Deciding over requests for hardship from repayers. CHANCEN eG promotes equal opportunities for students irrespective of their financial background to finance their studies through an income share agreement",
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      {/* Education Section */}
      <div>
        <h2 className="text-2xl font-bold">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.institution}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.period}</p>
          </div>
        ))}
      </div>
      {/* Experience Section */}
      <div>
        <h2 className="text-2xl font-bold">Experience</h2>
        {data.experience.map((exp) => (
          <div key={exp.company}>
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <p>{exp.period}</p>
          </div>
        ))}
      </div>
      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul>
          {data.skills.map((skill) => (
            <li key={skill.name}>{skill.name}</li>
          ))}
        </ul>
      </div>
      {/*  Industry Knowledge Section */}
      <div>
        <h2 className="text-2xl font-bold">Industry Knowledge</h2>
        <ul>
          {data.industryKnowledge.map((knowledge) => (
            <li key={knowledge}>{knowledge}</li>
          ))}
        </ul>
      </div>
      {/* Languages Section */}
      <div>
        <h2 className="text-2xl font-bold">Languages</h2>
        <ul>
          {data.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
      </div>
      {/* Tools Section */}
      <div>
        <h2 className="text-2xl font-bold">Tools</h2>
        <ul>
          {data.tools.map((tool) => (
            <li key={tool.name}>{tool.name}</li>
          ))}
        </ul>
      </div>
      {/* Socials Section */}
      <div>
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
      {/* Additional Courses Section */}
      <div>
        <h2 className="text-2xl font-bold">Additional Courses</h2>
        {data.additionalCourses.map((course) => (
          <div key={course.name}>
            <h3>{course.name}</h3>
            <p>{course.institution}</p>
            <p>{course.year}</p>
          </div>
        ))}
      </div>
      {/* Voluntary Work Section */}
      <div>
        <h2 className="text-2xl font-bold">Voluntary Work</h2>
        {data.voluntaryWork.map((work) => (
          <div key={work.organization}>
            <h3>{work.role}</h3>
            <p>{work.organization}</p>
            <p>{work.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CV;
