import React, { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const emailJs = window.emailjs;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await emailJs.sendForm(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      "form",
      { publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY }
    );
    if (response.status == 200) {
      console.log("Form submitted!!");
      setIsSubmitted(true);
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } else {
      console.log("ERROR: sending form");
      toast({
        title: "Error!",
        description: "Could not send the message.Something went wrong.",
      });
    }

    // After 3 seconds, reset the button color
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact">
      <div className="section-container">
        <span className="inline-block text-sm text-primary font-medium mb-2">
          GET IN TOUCH
        </span>
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Interested in working together? Let's connect!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, a question about my work, or
                just want to say hello, feel free to reach out. I'm always open
                to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Jacksonville, FL</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    adisemamo211@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 (516) 838-9131</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form id="form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    name="user_email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  name="user_subject"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  name="message"
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                variant={isSubmitted ? "success" : "default"}
              >
                {!isSubmitted ? <Send className="h-4 w-4 mr-2" /> : ""}
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
