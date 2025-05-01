import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import NavbarDemo from "@/components/navbar/navbar-menu-demo";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="">
        <NavbarDemo></NavbarDemo>
      </header>

      <main className=" min-h-screen w-full">{children}</main>
      {/* ModeToggle in a fixed position */}
      <div className="fixed right-4 bottom-4">
        <ModeToggle />
      </div>

      {/* <Footer /> */}
      <footer className="mx-auto w-11/12">
        <div className="border-t-2 border-gray-300 py-4 text-center">
          <p className="text-sm text-gray-500">© 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default CommonLayout;
