"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/language-context";

type NavKey =
  | "home"
  | "interactiveMap"
  | "riskAlert"
  | "projects"
  | "findings"
  | "news"
  | "contact";
const NAV_ITEMS: { key: NavKey; href: string }[] = [
  { key: "home", href: "/" },
  { key: "interactiveMap", href: "/map" },
  { key: "riskAlert", href: "/report" },
  { key: "projects", href: "/projects" },
  { key: "findings", href: "/findings" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
];

const LANG_OPTIONS = [
  {
    code: "en" as const,
    label: "English",
    icon: <img src="/en.png" alt="English" className="w-6 h-4 rounded-sm" />,
  },
  {
    code: "ka" as const,
    label: "ქართული",
    icon: <img src="/ka.png" alt="ქართული" className="w-6 h-4 rounded-sm" />,
  },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to true to see logged-in state
  const { language, setLanguage, t } = useLanguage();
  const currentLang =
    LANG_OPTIONS.find((l) => l.code === language) ?? LANG_OPTIONS[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-primary-foreground"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-semibold text-lg">CPC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                prefetch={item.href === "/map" ? false : true}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {t.nav[item.key][language]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Switcher (Desktop) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2"
                  aria-label={currentLang.label}
                  title={currentLang.label}
                >
                  <span className="leading-none">{currentLang.icon}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[160px] z-[60]">
                {LANG_OPTIONS.map((opt) => (
                  <DropdownMenuItem
                    key={opt.code}
                    onClick={() => setLanguage(opt.code)}
                    aria-label={opt.label}
                    title={opt.label}
                    className="flex items-center gap-2"
                  >
                    <span className="leading-none">{opt.icon}</span>
                    <span className="text-sm whitespace-nowrap">
                      {opt.label}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-9 w-9 rounded-full"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src="/abstract-geometric-shapes.png"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        John Doe
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        john.doe@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">{t.auth.profile[language]}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile/settings">{t.auth.settings[language]}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/report">{t.auth.submitReport[language]}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    {t.auth.logout[language]}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <Link href="/login">
                  <Button variant="ghost">{t.auth.login[language]}</Button>
                </Link>
                <Link href="/signup">
                  <Button>{t.auth.signup[language]}</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {/* Language Switcher (Mobile) */}
            <div className="flex items-center gap-2 mb-2">
              {LANG_OPTIONS.map((opt) => (
                <Button
                  key={opt.code}
                  variant={language === opt.code ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLanguage(opt.code)}
                  aria-label={opt.label}
                  title={opt.label}
                  className="flex items-center gap-2"
                >
                  <span className="leading-none">{opt.icon}</span>
                  <span className="text-sm">{opt.label}</span>
                </Button>
              ))}
            </div>

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav[item.key][language]}
              </Link>
            ))}

            {!isLoggedIn && (
              <>
                <div className="border-t border-border my-2" />
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.auth.login[language]}
                </Link>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-base font-medium text-primary hover:text-primary/90 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.auth.signup[language]}
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <div className="border-t border-border my-2" />
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.auth.profile[language]}
                </Link>
                <Link
                  href="/profile/settings"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.auth.settings[language]}
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  {t.auth.logout[language]}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
