import { DesktopNav } from "@/components/desktop-nav";
import { CvViewerModal } from "@/components/home/leftPart/cvViewerModal/CvViewerModal";
import SocialMediaLink from "@/components/home/leftPart/socialMediaLink/SocialMediaLink";
import { MobileNav } from "@/components/mobile-nav";
import { ActiveSectionProvider } from "@/context/active-section";
import Image from "next/image";
import profile from "../../../assets/profile.png";
import { HashTitleHandler } from "@/components/hash-title-handler";
import { Suspense } from "react";

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ActiveSectionProvider>
          <HashTitleHandler />
          <div className="relative">
            {/* mobile nav */}
            <header className="md:hidden">
              <div className="flex h-full flex-col gap-8 space-y-4">
                <div className="flex h-[50%] flex-col items-center justify-between px-4">
                  <Image
                    src={profile}
                    width={200}
                    height={200}
                    priority
                    className="mt-4 rounded-full object-cover md:mt-auto"
                    alt="Humayun Kabir"
                    style={{ background: "transparent" }}
                  />
                  <h1 className="mt-4 text-lg font-bold"> I&apos;m Humayun Kabir</h1>
                  <p className="text-md mt-2">Front End Engineer</p>
                  <p className="mt-2 text-center text-sm">
                    I build accessible, pixel-perfect digital experiences for the web.
                  </p>
                  {/* resume viewer modal */}
                  <div className="mt-4">
                    <CvViewerModal></CvViewerModal>
                  </div>
                </div>
                <div className="flex h-[50%] flex-col justify-around">
                  <MobileNav />
                  {/* social media link */}
                  <div className="flex items-center justify-center">
                    <SocialMediaLink></SocialMediaLink>
                  </div>
                </div>
              </div>
            </header>
            {/* Desktop Navigation */}
            <aside className="fixed hidden h-screen w-[40%] p-8 md:block">
              <div className="flex h-full flex-col gap-8 space-y-4">
                {/* <BackgroundLines className=""> */}
                <div className="flex h-[50%] flex-col justify-between">
                  <Image
                    src={profile}
                    width={200}
                    height={200}
                    priority
                    className="w-[30%] rounded-full object-cover"
                    alt="Humayun Kabir"
                    style={{ background: "transparent" }}
                  />
                  <h1 className="mt-4 text-3xl font-bold"> I&apos;m Humayun Kabir</h1>
                  <p className="mt-2 text-lg">Front End Engineer</p>
                  <p className="mt-2 text-lg">
                    I build accessible, pixel-perfect digital experiences for the web.
                  </p>
                  {/* resume viewer modal */}
                  <div className="mt-4">
                    <CvViewerModal></CvViewerModal>
                  </div>
                </div>
                <div className="flex h-[50%] flex-col justify-around">
                  <DesktopNav />
                  {/* social media link */}
                  <div className="flex items-center justify-center">
                    <SocialMediaLink></SocialMediaLink>
                  </div>
                </div>
                {/* </BackgroundLines> */}
              </div>
            </aside>
            {/* Main Content */}
            {/* <BackgroundBeamsWithCollision> */}
            <main className="w-full md:ml-[40%] md:w-[60%]">
              <div className="space-y-8 py-2 md:py-6">{children}</div>
            </main>
            {/* </BackgroundBeamsWithCollision> */}
          </div>
        </ActiveSectionProvider>
      </Suspense>
    </>
  );
};

export default HomePageLayout;
