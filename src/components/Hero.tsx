import React from "react";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container flex flex-col items-center text-center z-10 animate-fade-in">
        <p className="text-primary font-medium mb-4 animate-slide-in">
          Hello, I'm
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-in"
          style={{ animationDelay: "0.1s" }}
        >
          Adise Mamoye
        </h1>
        <h2
          className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-slide-in"
          style={{ animationDelay: "0.2s" }}
        >
          Software Developer
          {/* specializing in{" "}
          <span className="text-primary">Vue.js</span> */}
        </h2>
        <p
          className="max-w-xl text-muted-foreground mb-10 animate-slide-in"
          style={{ animationDelay: "0.3s" }}
        >
          I build exceptional, accessible, and user-friendly web applications
          with modern technologies and best practices.
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">View projects</a>
          </Button>
        </div>

        <div
          className="flex items-center gap-6 animate-slide-in"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="https://github.com/Adise211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/adise-mamoye-15876a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a> */}
          <a
            href="mailto:adisemamo211@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-pulse-subtle"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
