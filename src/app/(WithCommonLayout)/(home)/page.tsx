import Image from "next/image";

import { AnimatedModalDemo } from "@/components/home/leftPart/cvViewerModal/CvViewerModal";
import SocialMediaLink from "@/components/home/leftPart/socialMediaLink/SocialMediaLink";
import { TabsDemo } from "@/components/home/rightPart/tabsDemo/TabsDemo";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/home/rightPart/contactForm/ContactForm";

const HomePage = () => {
  return (
    <>
      <AnimatedSection id="about" delay={0.2}>
        <h2 className="mb-6 text-4xl font-bold">About</h2>
        {/* Content */}
        <p>
          I’m a passionate developer specializing in building responsive, high-performance web
          applications that blend creative design with solid technical execution. Currently, I’m
          focused on full-stack development using React, Node.js, and MongoDB.
          <br />
          <br />
          My academic background includes leading a DeepFake detection project with Vision
          Transformers, demonstrating my problem-solving skills. I’ve developed platforms like
          Jobs-Hunt (real-time job search) and Bike-Store (inventory management), showcasing my
          expertise in both frontend and backend development.
          <br />
          <br />
          As Deputy Project Manager at FIO, I honed my leadership and strategic planning skills,
          successfully driving community initiatives. Outside of coding, I volunteer with the Atiyar
          Para Young Star Club and stay updated on tech trends.
        </p>
      </AnimatedSection>

      <AnimatedSection id="experience" delay={0.3}>
        <h2 className="mb-6 text-4xl font-bold">Experience</h2>
        {/* Content */}
      </AnimatedSection>

      <AnimatedSection id="projects" delay={0.4}>
        <h2 className="mb-6 text-4xl font-bold">Projects</h2>
        {/* Content */}
      </AnimatedSection>

      <AnimatedSection id="contact" delay={0.5}>
        <h2 className="mb-6 text-4xl font-bold">Talk With Me</h2>
        {/* Content */}
        <ContactForm></ContactForm>
      </AnimatedSection>
    </>

    // <div className="p-4">
    //   <TabsDemo></TabsDemo>
    // </div>
  );
};

export default HomePage;
