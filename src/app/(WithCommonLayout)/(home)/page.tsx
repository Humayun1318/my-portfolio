import HK from "../../../assets/hk-removebg-preview.png";
import Image from "next/image";

import { CvViewerModal } from "@/components/home/cvViewerModal/CvViewerModal";
import SocialMediaLink from "@/components/home/socialMediaLink/SocialMediaLink";

const HomePage = () => {
  return (
    <div>
      {/* Home page section */}
      <section className="flex flex-col md:flex-row">
        {/* Left part of the page (Fixed) */}
        <section className="w-full border md:sticky md:top-0 md:h-screen md:w-[40%]">
          <div className="flex h-screen flex-col items-center justify-center space-y-4">
            <Image src={HK} alt="Humayun Kabir" className="object-cover" />
            <h1 className="mt-4 text-3xl font-bold"> I&apos;m Humayun Kabir</h1>
            <p className="mt-2 text-lg">Front End Engineer</p>
            <p className="mt-2 text-lg">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>

            {/* resume viewer modal */}
            <div>
              <CvViewerModal />
            </div>

            {/* social media link */}
            <div>
              <SocialMediaLink></SocialMediaLink>
            </div>
          </div>
        </section>

        {/* Right part of the page (Scrollable) */}
        <section className="w-full overflow-y-auto border md:w-[60%]">
          <div className="p-4">
            <p className="mt-4 text-lg">
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
              successfully driving community initiatives. Outside of coding, I volunteer with the
              Atiyar Para Young Star Club and stay updated on tech trends.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
