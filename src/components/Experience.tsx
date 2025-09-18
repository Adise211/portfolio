import React from "react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Wyze - Cloud Knowledge Management System",
    period: "01/2023 - 05/2025",
    description:
      "Led frontend development at a B2B startup, driving 80% annual customer growth through improved UX and technical excellence. Implemented modern development practices and CI/CD workflows while collaborating with leadership.",
    achievements: [
      "Designed responsive and visually appealing user interfaces using Vue 3 and Vuetify, improving usability for support staﬀ and reducing customer support response by 75%.",
      "Migrated legacy codebase from Vue 2 to Vue 3 by refactoring into reusable, component-driven modules,leading to fewer production bugs and smoother integration with backend services.",
      "Implemented CI/CD pipeline by configuring automated build stages and deployment scripts in Azure DevOps, reducing deployment time by 50% and improving release reliability.",
      "Facilitated cross-functional collaboration between the CEO and backend developer by translating business requirements into technical specifications, resulting in successful API integration and 100% requirement fulfillment.",
    ],
    // technologies: [
    //   "Vue.js",
    //   "Pinia",
    //   "Vuetify",
    //   "Azure DevOps",
    //   "JavaScript",
    //   "Git",
    //   "SourceTree",
    // ],
  },
  {
    title: "Full Stack Developer",
    company: "Moyae - Electronic Health Record System",
    period: "03/2022 - 06/2022",
    description:
      "Developed a specialized EHR platform for vision care practices, reducing patient encounter times by 50% compared to traditional systems. Built a secure, HIPAA-compliant full-stack solution for small practice environments.",
    achievements: [
      "Developed full-stack EHR solution by building RESTful APIs with Node.js/PostgreSQL and React frontend components, enabling vision care practices to manage patient encounters 50% faster than traditional EMR systems.",
      "Secured patient data by implementing JWT authentication and role-based access controls across API endpoints, ensuring HIPAA compliance for sensitive ophthalmology and optometry patient records.",
      "Built responsive prescription management and appointment scheduling modules using React components, reducing front-office administrative tasks and streamlining clinical workflows for eye care professionals.",
      "Optimized application performance by refactoring database queries and implementing efficient data structures, reducing patient record load times by 60% to support real-time clinical decision-making.",
    ],
    // technologies: [
    //   "React.js",
    //   "Node.js",
    //   "Express",
    //   "PostgreSQL",
    //   "JavaScript",
    //   "Prisma",
    //   "RESTful APIs",
    //   "JWT",
    //   "Auth0",
    // ],
  },
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
                {/* <div className="flex flex-wrap gap-2 pt-3">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
