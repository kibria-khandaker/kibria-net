"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import siteInfo from "@/data/siteInfo";
import { navigation } from "@/data/navigation";


export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);


  function isActiveLink(href) {
    if (!href) {
      return false;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }


  function closeMenu() {
    setIsMenuOpen(false);
  }


  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-ivory">

      <Container>

        <div className="flex min-h-20 items-center justify-between gap-4">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label={`${siteInfo.siteName} homepage`}
          >

            <Image
              src={siteInfo.logo}
              alt="Kibria.net logo"
              width={48}
              height={48}
              priority
            />

            <span className="text-lg font-semibold text-brand-navy">
              {siteInfo.siteName}
            </span>

          </Link>


          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main navigation"
          >

            {navigation.map((item) => {

              if (item.children) {

                const childActive =
                  item.children.some((child) =>
                    isActiveLink(child.href)
                  );


                return (
                  <details
                    key={item.label}
                    className="group relative"
                  >

                    <summary
                      className={`cursor-pointer list-none text-sm font-medium ${
                        childActive
                          ? "text-brand-teal"
                          : "text-brand-slate hover:text-brand-teal"
                      }`}
                    >
                      {item.label} ↓
                    </summary>


                    <div className="absolute right-0 top-full mt-3 w-48 rounded-xl border border-brand-border bg-white p-2 shadow-lg">

                      {item.children.map((child) => {

                        const active =
                          isActiveLink(child.href);


                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            aria-current={
                              active
                                ? "page"
                                : undefined
                            }
                            className={`block rounded-lg px-4 py-3 text-sm ${
                              active
                                ? "bg-brand-ivory font-semibold text-brand-teal"
                                : "text-brand-slate hover:bg-brand-ivory hover:text-brand-teal"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}

                    </div>

                  </details>
                );
              }


              const active =
                isActiveLink(item.href);


              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  className={
                    active
                      ? "text-sm font-semibold text-brand-teal"
                      : "text-sm font-medium text-brand-slate hover:text-brand-teal"
                  }
                >
                  {item.label}
                </Link>
              );
            })}

          </nav>


          {/* Mobile Button */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex min-h-11 min-w-20 items-center justify-center rounded-lg border border-brand-border bg-white px-4 text-sm font-semibold text-brand-navy md:hidden"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>

        </div>


        {/* Mobile Navigation */}
        {isMenuOpen && (

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-brand-border pb-5 pt-3 md:hidden"
          >

            <div className="flex flex-col gap-1">

              {navigation.map((item) => {

                if (item.children) {

                  return (
                    <div
                      key={item.label}
                      className="mt-2 border-t border-brand-border pt-3"
                    >

                      <p className="px-4 pb-2 text-xs font-bold uppercase tracking-wider text-brand-teal">
                        {item.label}
                      </p>


                      {item.children.map((child) => {

                        const active =
                          isActiveLink(child.href);


                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={
                              active
                                ? "page"
                                : undefined
                            }
                            className={`block rounded-lg px-4 py-3 text-base ${
                              active
                                ? "bg-white font-semibold text-brand-teal"
                                : "text-brand-slate"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}

                    </div>
                  );
                }


                const active =
                  isActiveLink(item.href);


                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`rounded-lg px-4 py-3 text-base ${
                      active
                        ? "bg-white font-semibold text-brand-teal"
                        : "font-medium text-brand-slate"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

            </div>

          </nav>
        )}

      </Container>

    </header>
  );
}