import React from "react";
import { Code, Layout, Database, Server } from "lucide-react";

const skills = [
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Express",
  "RESTful APIs",
  "PostgreSQL",
  "React.js",
  "Vue.js",
  "HTML",
  "CSS",
  "Prisma ORM",
  "Git",
  "CI/CD (Azure DevOps)",
  "Firebase",
  "Tailwind CSS",
];

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2">
            <span className="inline-block text-sm text-primary font-medium mb-2">
              ABOUT ME
            </span>
            <h2 className="section-title">
              Building digital experiences with passion and precision
            </h2>
            <p className="section-subtitle">
              My journey in software development began over 3 years ago
            </p>

            <div className="space-y-6 text-muted-foreground">
              <p>
                I'm a Full Stack Developer with 3+ years of experience building
                scalable web applications for healthcare and B2B SaaS platforms.
                I specialize in the JavaScript ecosystem (React, Vue.js,
                Node.js) and have a proven track record of driving business
                growth through technical excellence, including delivering
                solutions that increased customer growth by 80% and improved
                system efficiency by up to 75%.
              </p>
              <p>
                My experience spans from developing HIPAA-compliant EHR systems
                for vision care practices to leading frontend development at B2B
                startups. I excel at translating business requirements into
                technical solutions, implementing modern development practices
                like CI/CD workflows, and collaborating cross-functionally with
                leadership teams to deliver production-ready applications that
                solve real-world problems.
              </p>
              <p>
                I'm passionate about creating user-focused applications that
                combine clean, maintainable code with exceptional user
                experiences. Whether optimizing database performance, migrating
                legacy codebases, or building responsive interfaces, I approach
                every project with a focus on scalability, security, and
                measurable impact.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-background rounded-full text-sm border card-hover"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border bg-background/50 card-hover">
                  <Layout className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-lg font-medium mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Building responsive and interactive user interfaces with
                    modern frameworks.
                  </p>
                </div>

                <div className="p-4 rounded-lg border bg-background/50 card-hover">
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-lg font-medium mb-2">
                    Backend Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Developing robust server-side applications and RESTful APIs.
                  </p>
                </div>

                <div className="p-4 rounded-lg border bg-background/50 card-hover">
                  <Database className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-lg font-medium mb-2">Database Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating efficient database schemas and optimizing queries.
                  </p>
                </div>

                <div className="p-4 rounded-lg border bg-background/50 card-hover">
                  <Server className="h-8 w-8 text-primary mb-3" />
                  <h4 className="text-lg font-medium mb-2">DevOps</h4>
                  <p className="text-sm text-muted-foreground">
                    Setting up CI/CD pipelines and managing cloud
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
