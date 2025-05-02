import { DesktopNav } from "@/components/desktop-nav";
import Footer from "@/components/footer/Footer";
import { AnimatedModalDemo } from "@/components/home/leftPart/cvViewerModal/CvViewerModal";
import SocialMediaLink from "@/components/home/leftPart/socialMediaLink/SocialMediaLink";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { ScrollUnlocker } from "@/components/modeToggle/ToggleButtonIssue";
import NavbarDemo from "@/components/navbar/navbar-menu-demo";
import { ActiveSectionProvider } from "@/context/active-section";
import Image from "next/image";
import HK from "../../assets/hk-removebg-preview.png";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* ModeToggle in a fixed position */}
      <div className="fixed right-4 bottom-4 z-50">
        <ScrollUnlocker></ScrollUnlocker>
        <ModeToggle />
      </div>

      {/* navigation for projects */}
      <header className="">
        <NavbarDemo></NavbarDemo>
      </header>

      <ActiveSectionProvider>
        <div className="relative">
          <header className="md:hidden">
            <div className="flex h-full flex-col gap-8 space-y-4">
              <div className="flex h-[50%] flex-col items-center justify-between px-4">
                <Image
                  src={HK}
                  width={200}
                  height={200}
                  className="rounded-full"
                  alt="Humayun Kabir"
                />
                <h1 className="mt-4 text-lg font-bold"> I&apos;m Humayun Kabir</h1>
                <p className="text-md mt-2">Front End Engineer</p>
                <p className="mt-2 text-center text-sm">
                  I build accessible, pixel-perfect digital experiences for the web.
                </p>
                {/* resume viewer modal */}
                <div className="mt-4">
                  <AnimatedModalDemo></AnimatedModalDemo>
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
          <aside className="bg-muted/40 fixed top-0 left-0 hidden h-screen w-[40vw] border-r p-8 md:block">
            <div className="flex h-full flex-col gap-8 space-y-4">
              <div className="flex h-[50%] flex-col justify-between">
                <Image
                  src={HK}
                  width={200}
                  height={200}
                  className="rounded-full md:w-[30%]"
                  alt="Humayun Kabir"
                />
                <h1 className="mt-4 text-3xl font-bold"> I&apos;m Humayun Kabir</h1>
                <p className="mt-2 text-lg">Front End Engineer</p>
                <p className="mt-2 text-lg">
                  I build accessible, pixel-perfect digital experiences for the web.
                </p>
                {/* resume viewer modal */}
                <div className="mt-4">
                  <AnimatedModalDemo></AnimatedModalDemo>
                </div>
              </div>
              <div className="flex h-[50%] flex-col justify-around">
                <DesktopNav />
                {/* social media link */}
                <div className="flex items-center justify-center">
                  <SocialMediaLink></SocialMediaLink>
                </div>
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <main className="w-full md:ml-[40vw] md:w-[60vw]">
            <div className="space-y-24 p-8 md:space-y-32">{children}</div>
          </main>
        </div>
      </ActiveSectionProvider>

      {/* <div className="md:flex">
        
        <aside className="bg-muted/40 fixed hidden h-screen w-64 border-r p-6 md:block">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Your Name</h1>
            <nav className="space-y-2">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground block transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-foreground block transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground block transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground block transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </aside>

        
        <main className="flex-1 md:ml-64">
          <div className="space-y-20 p-6 md:space-y-32">{children}</div>
        </main>
      </div> */}

      {/* <main className="">{children}</main> */}

      {/* <Footer /> */}
      {/* <footer className="">
        <div className="w-full">
          <Footer></Footer>
          <p className="my-4 text-center text-sm text-gray-500">
            © 2023 Your Name. All rights reserved.
          </p>
        </div>
      </footer> */}
    </>
  );
};

export default CommonLayout;
