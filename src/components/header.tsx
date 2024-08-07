"use client";

import { CloseMenu } from "@/icons/close-menu";
import { Facebook } from "@/icons/facebook";
import { HamburgerMenu } from "@/icons/hamburger-menu";
import { LinkedIn } from "@/icons/linked-in";
import { Twitter } from "@/icons/twitter";
import { Youtube } from "@/icons/youtube";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Arrow } from "@/icons/arrow";

const navOptions = [
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#support",
    label: "Support",
  },
];

const socialLinks = [
  {
    href: "/",
    icon: Facebook,
  },
  {
    href: "/",
    icon: LinkedIn,
  },
  {
    href: "/",
    icon: Twitter,
  },
  {
    href: "/",
    icon: Youtube,
  },
];

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (dialog.open) {
      dialog.close();
    } else {
      dialog.showModal();
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-b-teal-light">
      <div className="flex items-center justify-between w-[min(100svw-2.5rem,1248px)] sm:w-[min(100svw-5rem,1248px)] mx-auto py-6 text-accent bg-transparent backdrop-blur-xl">
        <Link href={"/"}>
          <Image
            src="/smart-notes.png"
            alt="SmartNotes logo"
            width={137}
            height={28}
            className="w-[137px] h-[28px]"
          />
        </Link>
        <button onClick={handleMenu} className="lg:hidden">
          <span className="sr-only">Menu</span>
          <HamburgerMenu />
        </button>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-x-14">
            {navOptions.map((o) => (
              <li key={o.label}>
                <Link href={o.href}>{o.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={"/"}
          className="hidden lg:inline-flex items-center justify-center gap-x-2 w-fit px-6 py-4 whitespace-nowrap rounded-lg font-bold sm:font-normal text-jetblack bg-gradient-to-bl from-teal-lighter to-teal-dark"
        >
          Get started
          <Arrow />
        </Link>

        <dialog
          ref={dialogRef}
          className="lg:hidden min-w-full h-full min-h-full m-0 text-white bg-jetblack backdrop:pointer-events-none backdrop:z-40"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-5 sm:px-10 py-6 border-b border-b-teal-light">
              <Link href={"/"}>
                <Image
                  src="/smart-notes.png"
                  alt="SmartNotes logo"
                  width={137}
                  height={28}
                  className="w-[137px] h-[28px]"
                />
              </Link>

              <button onClick={handleMenu}>
                <CloseMenu />
              </button>
            </div>
            <nav className="px-7 sm:px-12 py-12">
              <ul className="grid divide-solid divide-y-[1px] divide-accent">
                {navOptions.map((o) => (
                  <li key={o.label}>
                    <Link
                      href={o.href}
                      onClick={handleMenu}
                      className="block py-2 my-2 text-xl"
                    >
                      {o.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-1 items-end gap-[18px] px-7 pb-[58px]">
              {socialLinks.map((l) => (
                <a
                  key={l.icon.name}
                  href={l.href}
                  className="grid place-items-center min-w-10 min-h-10 rounded-full bg-teal-light"
                >
                  <l.icon />
                </a>
              ))}
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
}
