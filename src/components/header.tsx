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
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-6 border-b border-b-teal-light bg-transparent backdrop-blur-xl">
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
        <span className="sr-only">Menu</span>
        <HamburgerMenu />
      </button>
      <dialog
        ref={dialogRef}
        className="min-w-full h-full min-h-full m-0 text-white bg-jetblack backdrop:pointer-events-none backdrop:z-40"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 py-6 border-b border-b-teal-light">
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
          <nav className="px-7 py-12">
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
    </header>
  );
}
