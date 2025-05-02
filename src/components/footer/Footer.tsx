"use client";
import Image from "next/image";
import Link from "next/link";
import hk from "../../assets/hk-removebg-preview.png"; // replace with your profile image in public/
export default function Footer() {
  return (
    <footer className="mt-16 w-full rounded-[3rem] bg-[#0d0d0d] px-6 py-10 text-white shadow-xl">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left Section with Image and Intro */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Image
            src={hk} // replace with your profile image in public/
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">I’m Humayun Kabir</h3>
            <p className="text-sm text-gray-300">
              Frontend Developer based in Chattogram, Bangladesh.
            </p>
          </div>
        </div>

        {/* Center Navigation Links */}
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-gray-300 md:grid-cols-3">
          <li>
            <Link href="/#services" className="transition hover:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#about" className="transition hover:text-white">
              About me
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="transition hover:text-white">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link href="/#contact">
            <button className="rounded-full bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-gray-200">
              Talk with me
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
