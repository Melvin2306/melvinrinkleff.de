// src/components/CV.tsx

import React from "react";

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
}

interface Skill {
  name: string;
}

interface Language {
  name: string;
  proficiency: string;
}

interface Tool {
  name: string;
}

interface Social {
  platform: string;
  link: string;
}

interface Course {
  name: string;
  institution: string;
  year: string;
}

interface VoluntaryWork {
  role: string;
  organization: string;
  period: string;
}

const CV: React.FC = () => {
  const data = {
    name: "Melvin Rinkleff",
    education: [
      {
        degree: "B.A. Business Administration",
        institution: "Hochschule Weserberland",
        period: "2018-2021",
      },
    ],
    experience: [
      {
        role: "Founder Associate",
        company: "suena",
        period: "September 2022-Present",
      },
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
      // and so on
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
      },
    ],
    voluntaryWork: [
      {
        role: "Member of the Student Council",
        organization: "CODE University of Applied Sciences",
        period: "2021-2022",
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
      {/* Rest of the sections go here */}
    </div>
  );
};

export default CV;
