// "use client";

// import { useState } from "react";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useActiveSection } from "@/context/active-section";
// import Link from "next/link";
// import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
// import { NAV_ITEMS } from "@/constants";
// import SocialMediaLink from "./home/leftPart/socialMediaLink/SocialMediaLink";
// import { AnimatedModalDemo } from "./home/leftPart/cvViewerModal/CvViewerModal";

// export function MobileNav() {
//   const [open, setOpen] = useState(false);
//   const { activeSection } = useActiveSection();

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger className="fixed top-5 left-5 z-50 md:hidden">
//         <Menu className="text-foreground h-8 w-8" />
//         <span className="sr-only">Open navigation menu</span>
//       </SheetTrigger>

//       <SheetContent side="left" className="w-[75vw] max-w-[300px]">
//         {/* Add Visually Hidden Dialog Title */}
//         <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
//         <DialogDescription className="sr-only">Website navigation menu</DialogDescription>

//         <div className="flex h-full flex-col space-y-4 px-4 pt-16">
//           <h1 className="text-2xl font-bold">Humayun Kabir</h1>
//           <p className="text-md">Front End Engineer</p>
//           {/* resume viewer modal */}
//           <div className="">
//             <AnimatedModalDemo></AnimatedModalDemo>
//           </div>

//           <nav className="space-y-4">
//             {NAV_ITEMS.map((item) => (
//               <Link
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={() => setOpen(false)}
//                 className={cn(
//                   "block text-lg transition-colors",
//                   activeSection === item.id
//                     ? "text-foreground font-medium"
//                     : "text-muted-foreground hover:text-foreground"
//                 )}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
//           <div className="mt-[30%] flex items-center justify-center">
//             <SocialMediaLink></SocialMediaLink>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }

"use client";

import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/context/active-section";
import Link from "next/link";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { NAV_ITEMS } from "@/constants";
import SocialMediaLink from "./home/leftPart/socialMediaLink/SocialMediaLink";
import { CvViewerModal } from "./home/leftPart/cvViewerModal/CvViewerModal";
import { motion } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { activeSection } = useActiveSection();
  if (!activeSection) {
    throw new Error("activeSection is not defined");
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="fixed top-5 left-5 z-50 md:hidden">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Menu className="text-foreground h-8 w-8" />
          <VisuallyHidden>Open navigation menu</VisuallyHidden>
        </motion.div>
      </SheetTrigger>

      <SheetContent side="left" className="w-[75vw] max-w-[300px]">
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        <DialogDescription className="sr-only">Website navigation menu</DialogDescription>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex h-full flex-col space-y-4 px-4 pt-16"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-2xl font-bold">Humayun Kabir</h1>
            <motion.p
              className="text-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Web Developer
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-hidden">
            {/* <AnimatedModalDemo /> */}
            <CvViewerModal />
          </motion.div>

          <motion.nav className="space-y-4" variants={containerVariants}>
            {NAV_ITEMS.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="overflow-hidden">
                <Link
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative block text-lg transition-colors",
                    activeSection === item.id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="mobile-active"
                      className="bg-primary absolute top-1/2 left-0 h-[80%] w-1 -translate-y-1/2 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="block pl-4">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            className="mt-[30%] flex items-center justify-center"
            variants={itemVariants}
            transition={{ delay: 0.6 }}
          >
            <SocialMediaLink />
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
