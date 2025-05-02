import Image from "next/image";

import { AnimatedModalDemo } from "@/components/home/leftPart/cvViewerModal/CvViewerModal";
import SocialMediaLink from "@/components/home/leftPart/socialMediaLink/SocialMediaLink";
import { TabsDemo } from "@/components/home/rightPart/tabsDemo/TabsDemo";
import { AnimatedSection } from "@/components/animated-section";

const HomePage = () => {
  return (
    <>
      <AnimatedSection id="about" delay={0.2}>
        <h2 className="mb-6 text-4xl font-bold">About</h2>
        {/* Content */}
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
        <h2 className="mb-6 text-4xl font-bold">Contact</h2>
        {/* Content */}
      </AnimatedSection>
      {/* <Section id="about">
        <h2 className="mb-6 text-2xl font-bold">About </h2>
        
        <p>
          I’m a passionate developer specializing in building responsive, high-performance web
          applications that blend creative design with solid technical execution. Currently, I’m
          focused on full-stack development using React, Node.js, and MongoDB. <br />
          <br />
          My academic background includes leading a DeepFake detection project with Vision
          Transformers, demonstrating my problem-solving skills. I’ve developed platforms like
          Jobs-Hunt (real-time job search) and Bike-Store (inventory management), showcasing my
          expertise in both frontend and backend development. <br />
          <br />
          As Deputy Project Manager at FIO, I honed my leadership and strategic planning skills,
          successfully driving community initiatives. Outside of coding, I volunteer with the Atiyar
          Para Young Star Club and stay updated on tech trends.
        </p>
      </Section>

      <Section id="experience">
        <h2 className="mb-6 text-4xl font-bold">Experience</h2>
        
      </Section>

      <Section id="projects">
        <h2 className="mb-6 text-4xl font-bold">Projects</h2>
       
      </Section>

      <Section id="contact">
        <h2 className="mb-6 text-4xl font-bold">Contact</h2>
        
      </Section> */}
      {/* <section id="about" className="min-h-screen pt-20">
        <div className="p-6">
          <h2 className="mb-4 text-3xl font-bold">About</h2>
          <p>Your about section content...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen pt-20">
        <div className="p-6">
          <h2 className="mb-4 text-3xl font-bold">Experience</h2>
          <p>Your experience content...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen pt-20">
        <div className="p-6">
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
          <p>Your projects content...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen pt-20">
        <div className="p-6">
          <h2 className="mb-4 text-3xl font-bold">Contact</h2>
          <p>Your contact content...</p>
        </div>
      </section> */}
    </>
    // <div className="">
    //   {/* Home page section */}
    //   <section className="flex flex-col md:flex-row">
    //     {/* Left part of the page (Fixed) */}
    //     <section className="w-full border md:top-0 md:min-h-dvh md:w-[40%]">
    //       <div className="flex flex-col items-center gap-y-8">
    //         <Image src={HK} alt="Humayun Kabir" className="object-cover" />
    //         <h1 className="mt-4 text-3xl font-bold"> I&apos;m Humayun Kabir</h1>
    //         <p className="mt-2 text-lg">Front End Engineer</p>
    //         <p className="mt-2 text-lg">
    //           I build accessible, pixel-perfect digital experiences for the web.
    //         </p>

    //         {/* resume viewer modal */}
    //         <div>
    //           <AnimatedModalDemo></AnimatedModalDemo>
    //         </div>

    //         {/* social media link */}
    //         <div>
    //           <SocialMediaLink></SocialMediaLink>
    //         </div>
    //       </div>
    //     </section>

    //     {/* Right part of the page (Scrollable) */}
    //     <section className="w-full overflow-y-auto border md:w-[60%]">
    //       <div className="p-4">
    //         <p className="mt-4 text-lg">
    //           I’m a passionate developer specializing in building responsive, high-performance web
    //           applications that blend creative design with solid technical execution. Currently, I’m
    //           focused on full-stack development using React, Node.js, and MongoDB.
    //           <br />
    //           <br />
    //           My academic background includes leading a DeepFake detection project with Vision
    //           Transformers, demonstrating my problem-solving skills. I’ve developed platforms like
    //           Jobs-Hunt (real-time job search) and Bike-Store (inventory management), showcasing my
    //           expertise in both frontend and backend development.
    //           <br />
    //           <br />
    //           As Deputy Project Manager at FIO, I honed my leadership and strategic planning skills,
    //           successfully driving community initiatives. Outside of coding, I volunteer with the
    //           Atiyar Para Young Star Club and stay updated on tech trends.
    //         </p>
    //       </div>
    //       {/* toggle button */}
    //       <div className="p-4">
    //         <TabsDemo></TabsDemo>
    //       </div>
    //     </section>
    //   </section>
    // </div>
  );
};

export default HomePage;
