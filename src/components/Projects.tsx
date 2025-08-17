import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ELeads",
    description:
      "A modern lead management system built with React, TypeScript, and Node.js. ELeads helps businesses track, manage, and convert leads with a comprehensive dashboard, user management, and activity tracking.",
    image: "images/ELeads_app.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
      "JWT",
      "Prisma",
      "Git Actions",
    ],
    liveUrl: "https://eleads.up.railway.app",
    repoUrl: "https://github.com/Adise211/ELeads",
  },

  // {
  //   title: "Task Management App",
  //   description:
  //     "A productivity application for teams to manage tasks, track progress, and collaborate effectively with real-time updates.",
  //   image:
  //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //   technologies: ["Vue.js", "TypeScript", "Pinia", "Socket.io", "MongoDB"],
  //   liveUrl: "#",
  //   repoUrl: "#",
  // },
  // {
  //   title: "Weather Forecast App",
  //   description:
  //     "An elegant weather application that provides accurate forecasts, animated visualizations, and personalized weather alerts.",
  //   image:
  //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  //   technologies: [
  //     "Vue.js",
  //     "OpenWeatherAPI",
  //     "GSAP",
  //     "PWA",
  //     "Geolocation API",
  //   ],
  //   liveUrl: "#",
  //   repoUrl: "#",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <span className="inline-block text-sm text-primary font-medium mb-2">
          MY WORK
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my best work and personal projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden border bg-background card-hover flex flex-col h-full"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github size={16} /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Adise211"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
