import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a className="text-xl font-bold text-primary">
              Adise <span className="text-foreground">Mamoye</span>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Adise211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/adise-mamoye-15876a240/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a> */}
              <a
                href="mailto:adisemamo211@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © {currentYear} Adise Mamoye. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
