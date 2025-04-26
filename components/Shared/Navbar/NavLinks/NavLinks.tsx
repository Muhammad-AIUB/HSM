"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import {
  BookOpen,
  Bookmark,
  Newspaper,
  Mail,
  PenSquare,
  Mic,
  Info,
  Eye,
  Activity,
  HelpCircle,
  Handshake,
  MenuIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { MdPeople } from "react-icons/md";

export default function AppNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => pathname === href;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className={`w-full flex items-center justify-center bg-[#2D8CBB]`}>
      <div
        className={cn(
          "inset-x-0 mx-auto w-full border-t-2 border-[#FFCE00] md:pl-14 lg:px-28",
          className
        )}
      >
        <Menu setActive={setActive} className="flex-col md:flex-row">
          <div className="md:hidden flex justify-end w-full">
            <MenuIcon onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
          <div
            className={cn(
              "relative text-white dark:bg-black dark:border-white/[0.2] justify-center items-center space-x-8 px-8 hidden md:flex flex-row"
            )}
          >
            <Link
              href="/"
              className={cn(
                "px-3 py-2",
                className,
                isActiveLink("/") && "border-b-2 border-yellow-400"
              )}
            >
              <AiFillHome className="text-base" />
            </Link>

            <MenuItem
              setActive={setActive}
              active={active}
              item="ABOUT"
              href="/about"
              className={cn(
                className,
                pathname.startsWith("/about") && "border-b-2 border-yellow-400"
              )}
            >
              <div className="flex flex-col space-y-4 text-sm z-[500]">
                <HoveredLink
                  href="/about/about-hsm"
                  active={isActiveLink("/about/about-hsm")}
                >
                  <Info className="w-4 h-4" /> About HSM
                </HoveredLink>
                <HoveredLink
                  href="/about/vision-and-mission"
                  active={isActiveLink("/about/vision-and-mission")}
                >
                  <Eye className="w-4 h-4" /> Vision & Mission
                </HoveredLink>
                <HoveredLink
                  href="/about/activities-and-approach"
                  active={isActiveLink("/about/activities-and-approach")}
                >
                  <Activity className="w-4 h-4" /> Activities & Approach
                </HoveredLink>
                <HoveredLink
                  href="/about/why-health-systems-matter"
                  active={isActiveLink("/about/why-health-systems-matter")}
                >
                  <HelpCircle className="w-4 h-4" /> Why HSM
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="RESOURCE & BOOKMARK"
              href="/resources-and-bookmarks"
              className={cn(
                "min-w-[90px]",
                className,
                pathname.startsWith("/resources") ||
                  pathname.startsWith("/bookmarks")
                  ? "border-b-2 border-yellow-400"
                  : ""
              )}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink
                  href="/resources"
                  active={isActiveLink("/resources")}
                >
                  <BookOpen className="w-4 h-4" /> RESOURCE
                </HoveredLink>
                <HoveredLink
                  href="/bookmarks"
                  active={isActiveLink("/bookmarks")}
                >
                  <Bookmark className="w-4 h-4" /> BOOKMARK
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="NEWS & NEWSLETTER"
              href="/news-and-newsletter"
              className={cn(
                className,
                (pathname.startsWith("/news") ||
                  pathname.startsWith("/newsletter")) &&
                  "border-b-2 border-yellow-400"
              )}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/news" active={isActiveLink("/news")}>
                  <Newspaper className="w-4 h-4" /> NEWS
                </HoveredLink>
                <HoveredLink
                  href="/newsletter"
                  active={isActiveLink("/newsletter")}
                >
                  <Mail className="w-4 h-4" /> NEWSLETTER
                </HoveredLink>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              href="/blog-and-interview"
              item="INTERVIEW & BLOG"
              className={cn(
                className,
                (pathname.startsWith("/blog") ||
                  pathname.startsWith("/interview")) &&
                  "border-b-2 border-yellow-400"
              )}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink
                  href="/interview"
                  active={isActiveLink("/interview")}
                >
                  <Mic className="w-4 h-4" /> INTERVIEW
                </HoveredLink>
                <HoveredLink href="/blog" active={isActiveLink("/blog")}>
                  <PenSquare className="w-4 h-4" /> BLOG
                </HoveredLink>
              </div>
            </MenuItem>

            <Link
              href="/youtube"
              className={cn(
                "px-3 py-2 text-sm font-bold",
                className,
                isActiveLink("/youtube") && "border-b-2 border-yellow-400"
              )}
            >
              YOUTUBE
            </Link>

            <MenuItem
              setActive={setActive}
              active={active}
              href="/contact"
              item="CONTACT"
              className={cn(
                className,
                pathname.startsWith("/contact") &&
                  "border-b-2 border-yellow-400"
              )}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink
                  href="/contact/stay-connected"
                  active={isActiveLink("/")}
                >
                  <Handshake className="w-4 h-4" /> STAY CONNECTED
                </HoveredLink>
                <HoveredLink href="/support-hsm" active={isActiveLink("/")}>
                  <MdPeople className="w-4 h-4" /> SUPPORT AND COLLABORATE
                </HoveredLink>
              </div>
            </MenuItem>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 text-white px-4 pb-4 items-center">
              <Link
                href="/"
                className={cn(
                  isActiveLink("/") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                <AiFillHome className="text-base" />
              </Link>
              <Link
                href="/about"
                className={cn(
                  pathname.startsWith("/about") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                About
              </Link>
              <Link
                href="/resources-and-bookmarks"
                className={cn(
                  pathname.startsWith("/resources") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                Resource & Bookmark
              </Link>
              <Link
                href="/news-and-newsletter"
                className={cn(
                  pathname.startsWith("/news") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                News & Newsletter
              </Link>
              <Link
                href="/blog-and-interview"
                className={cn(
                  pathname.startsWith("/blog") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                Interview & Blog
              </Link>
              <Link
                href="/youtube"
                className={cn(
                  isActiveLink("/youtube") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                YouTube
              </Link>
              <Link
                href="/contact"
                className={cn(
                  pathname.startsWith("/contact") &&
                    "font-bold text-yellow-400 border-b-2 border-b-yellow-400"
                )}
              >
                Contact
              </Link>
              <Link
                href="/support-hsm"
                className={cn(
                  "py-2 bg-[#FFCE00] w-[100px] font-bold hover:bg-[#e6b00e] text-black/75 px-2 rounded-lg text-sm",
                  pathname.startsWith("/contact") && "font-bold text-yellow-400"
                )}
              >
                Support HSM
              </Link>
              <Link
                href="/subscribe"
                className={cn(
                  "py-2 bg-destructive w-[100px] font-bold  text-black/75 px-5 rounded-lg text-sm",
                  pathname.startsWith("/contact") && "font-bold"
                )}
              >
                Subscribe
              </Link>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
}
