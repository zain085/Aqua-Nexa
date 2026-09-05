import React from 'react';
import { Mail } from 'lucide-react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa6';

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: '#',
    icon: FaFacebookF,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)]">
      <div className="section-container py-5 sm:py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <img
              src="/aqua-nexa-logo.svg"
              alt="Aqua Nexa"
              className="h-9 w-auto object-contain sm:h-10"
            />
          </div>

          {/* Contact + Socials */}
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="mailto:aqua.nexa0333@gmail.com"
              className="group flex items-center gap-2 text-[11px] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-dark)]"
              aria-label="Email Aqua Nexa"
            >
              <Mail
                className="h-3.5 w-3.5 text-[var(--accent)] transition-colors duration-200 group-hover:text-[var(--accent-dark)]"
                strokeWidth={1.6}
              />

              <span className="hidden sm:inline">
                aqua.nexa0333@gmail.com
              </span>

              <span className="sm:hidden">
                Email
              </span>
            </a>

            <div className="flex items-center gap-1.5">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--border-accent)] hover:bg-[var(--glow-accent)] hover:text-[var(--accent)]"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 flex flex-col gap-1 text-[9px] text-[var(--text-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Aqua Nexa. All rights reserved.
          </p>

          <p className="uppercase tracking-[0.16em]">
            Discover · Learn · Protect
          </p>
        </div>
      </div>
    </footer>
  );
}