import Link from "next/link";

const Projects: React.FC = () => {
  const data = {
    projects: [
      {
        name: "Opinio",
        description:
          "Opinio is a platform for employees to give feedback to the software development team of internal developed software tools. The software development team can then use this feedback to improve the software tools. The tool can be easily implemented in the internal software tool and provides different insights in how the employees use the internal software, current bugs, trends in the joy of using the software and much more.",
        role: "Full Stack Software Developer",
        roleDescription: "",
        teamsize: "3",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned:
          "First experience of working as a software developer in a team. Learned how to collaborate effectively with other developers and how to use Git(hub) efficiently.",
        time: "January 2023 - Present",
        url: "https://app.getopinio.com/",
      },
      {
        name: "//Slash Hackathon 2022",
        description: "",
        role: "Event Managment & Partnerships",
        roleDescription: "",
        teamsize: "10",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned: "",
        time: "October 2021 - Present",
        url: "https://www.slash.berlin",
      },
      {
        name: "Spotify Data Analysis",
        description:
          "This project was part of the course 'Data Science' at the CODE University of Applied Sciences. The goal of the project was to analyze the data of the Spotify API and to find interesting insights. The project was done in a group of 4 people.",
        role: "Data Scientist",
        roleDescription: "",
        teamsize: "2",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned: "Extensive experience in Data Science.",
        time: "August 2022 - December 2022",
        url: "",
      },
      {
        name: "Peaches",
        description: "",
        role: "Product Manager",
        roleDescription: "",
        teamsize: "3",
        context: "CODE University of Applied Sciences",
        contextLink: "https://code.berlin",
        learned: "",
        time: "January 2021 - December 2022",
        url: "",
      },
      {
        name: "Simulation of the Develoment of the Hydrogen Infrastructure in Germany",
        description: "",
        role: "Team member",
        roleDescription: "",
        teamsize: "7",
        context: "HSW - Hochschule Weserbergland",
        contextLink: "https://www.hsw-hameln.de",
        learned: "",
        time: "October 2020 - May 2021",
        url: "",
      },
    ],
  };

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      {data.projects.map((pro) => (
        <div
          key={pro.name}
          className="border border-blue-200 rounded-md p-2 my-2"
        >
          <h3 className="text-xl font-semibold">{pro.name}</h3>
          <p>{pro.description}</p>
          <p>
            {pro.role} in a team of {pro.teamsize}
          </p>
          <p>
            <a href={pro.contextLink}>{pro.context}</a>
          </p>
          <p>{pro.learned}</p>
          <p>{pro.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
