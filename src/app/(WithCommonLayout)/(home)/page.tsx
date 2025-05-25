"use client";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/home/rightPart/contactForm/ContactForm";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { education } from "@/lib/data";
import Experience from "@/components/home/rightPart/Experience";
import SkillsSection from "@/components/home/rightPart/SkillsSection";
import ProjectsSection from "@/components/home/rightPart/ProjectsSection";
import TechStackSection from "@/components/home/rightPart/HomePageFooter/TechStackSection";
import ContactDetails from "@/components/contactDetails/ContactDetails";

const HomePage = () => {
  return (
    <>
      <AnimatedSection id="about" delay={0.2} className="">
        <h2 className="mb-2 text-4xl font-bold">About</h2>
        {/* Content */}
        <p>
          I’m a passionate developer specializing in building responsive, high-performance web
          applications that blend creative design with solid technical execution. Currently, I’m
          focused on full-stack development using React, Node.js, and MongoDB.
          <br />
          <br />
          My academic background includes leading a DeepFake detection project using Vision
          Transformers as my BSc thesis, which sharpened my problem-solving and research skills. I
          have also developed modern web platforms like Trendora, a second-hand marketplace
          featuring real-time search and secure authentication built with Next.js, React, and
          Tailwind CSS, and Papyrus, a comprehensive stationery e-commerce application with backend
          management powered by Node.js, Express, and MongoDB. These projects demonstrate my
          proficiency in full-stack development and modern web technologies.
          <br />
          <br />
          As Deputy Project Manager at FIO, I honed my leadership and strategic planning skills,
          successfully driving community initiatives. Outside of coding, I volunteer with the Atiyar
          Para Young Star Club and stay updated on tech trends.
        </p>
        <div className="mx-auto max-w-5xl md:px-8">
          <HoverEffect items={education} />
        </div>
        <div>
          <SkillsSection />
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience" delay={0.3}>
        <h2 className="mb-6 text-3xl font-bold">Experience</h2>
        <Experience />
      </AnimatedSection>

      <AnimatedSection id="projects" delay={0.4}>
        <h2 className="mb-6 text-3xl font-bold">See My Works</h2>
        {/* Content */}
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection id="contact" delay={0.5}>
        <h2 className="mb-6 text-4xl font-bold">Talk With Me</h2>
        {/* Content */}
        <ContactForm></ContactForm>
        <h2 className="mt-8 mb-6 text-4xl font-bold">Get in Touch</h2>
        <ContactDetails></ContactDetails>
      </AnimatedSection>
      <TechStackSection></TechStackSection>
    </>
  );
};

export default HomePage;
