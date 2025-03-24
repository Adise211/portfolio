import React from "react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Wyze - Cloud Knowledge Management System",
    period: "01/2023 - Present",
    description:
      "Lead the frontend development of a cloud-based knowledge management system.",
    achievements: [
      "Reduced support team response time by 42%, improving overall customer satisfaction",
      "Implemented CI/CD pipeline that decreased deployment time by 70%",
      "Led the migration from Vue 2 to Vue 3 for the major project.",
    ],
    technologies: [
      "Vue.js",
      "Pinia",
      "Vuetify",
      "Azure DevOps",
      "JavaScript",
      "Git",
      "SourceTree",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company: "Moyae - Electronic Health Record System",
    period: "03/2022 - 06/2022",
    description:
      "Optimized treatment time for ophthalmologists and optometrists by developing a comprehensive Electronic Health Record (EHR) system that improved operational efficiency.",
    achievements: [
      "Played a key role in developing scalable, maintainable code for various system features",
      "Integrated advanced frontend technologies to provide a modern user interface",
      "Supported long-term application growth and reliability",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "Vuex",
      "Prisma",
      "RESTful APIs",
    ],
  },
  // {
  //   title: "Junior Web Developer",
  //   company: "Digital Agency",
  //   period: "2016 - 2018",
  //   description:
  //     "Started as an intern and was later hired full-time. Assisted in the development of websites and web applications for various clients in different industries.",
  //   achievements: [
  //     "Developed responsive layouts for 15+ client websites",
  //     "Created interactive data visualizations using D3.js",
  //     "Built a custom CMS that reduced content update time by 60%",
  //   ],
  //   technologies: [
  //     "HTML/CSS",
  //     "JavaScript",
  //     "jQuery",
  //     "PHP",
  //     "WordPress",
  //     "MySQL",
  //   ],
  // },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <span className="inline-block text-sm text-primary font-medium mb-2">
          MY JOURNEY
        </span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          A chronicle of my professional path and accomplishments
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="experience-dot" />
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-secondary rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-muted-foreground mt-2">{exp.description}</p>

                <div className="mt-4 space-y-1">
                  <h4 className="text-sm font-semibold">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
