"use client";
import Image from "next/image";
import Link from "next/link";
import hk from "../../assets/profile.png";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer>
      <section className="mx-auto w-11/12 max-w-6xl rounded-[3rem] bg-gradient-to-br to-blue-600/60 px-6 py-10 shadow-md">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left Section with Image and Intro */}
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Image
              src={hk}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">I&rsquo;m Humayun Kabir</h3>
              <p className="text-sm">Frontend Developer based in Chattogram, Bangladesh.</p>
            </div>
          </div>

          {/* Center Navigation Links */}
          <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm md:grid-cols-3">
            <li>
              <Link href="/#projects" className="transition hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#about" className="transition hover:text-white">
                About me
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="transition hover:text-white">
                Experience
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div>
            <Link href="/#contact">
              <Button className="rounded-full px-6 py-2 text-sm font-medium transition hover:bg-gray-200">
                Talk with me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="mx-auto w-11/12 max-w-6xl pt-24">
        <hr className="border-gray-300 dark:border-gray-700" />
        <div className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Humayun Kabir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
