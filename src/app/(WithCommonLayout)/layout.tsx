import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { ScrollUnlocker } from "@/components/modeToggle/ToggleButtonIssue";
import Navbar from "@/components/navbar/navbar-menu-demo";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
      {/* ModeToggle in a fixed position */}
      <div className="fixed right-4 bottom-4 z-50">
        <ScrollUnlocker></ScrollUnlocker>
        <ModeToggle />
      </div>

      {/* navigation for projects */}
      <header className="relative">
        <Navbar className="top-2" />
      </header>
    </>
  );
};

export default CommonLayout;
