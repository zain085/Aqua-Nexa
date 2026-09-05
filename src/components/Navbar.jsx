import React, { useState } from 'react';
import {
  Home,
  Ticket,
  Image,
  MessageSquare,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

export default function Navbar({
  currentPage,
  setCurrentPage,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'booking', label: 'Visit', icon: Ticket },
    { id: 'marine-life', label: 'Marine Life', icon: Image },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
  ];

  const navigate = (page) => {
    setCurrentPage(page);
    setIsOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--surface)]/95 backdrop-blur-md">
      <nav className="section-container flex h-[68px] items-center justify-between">
        {/* Brand */}
        <button
          type="button"
          onClick={() => navigate('home')}
          className="group flex items-center text-left"
          aria-label="Aqua Nexa home"
        >
          <img
            src="/aqua-nexa-logo.svg"
            alt="Aqua Nexa"
            className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 sm:h-11"
          />
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={`group relative flex items-center gap-2 px-4 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--accent-dark)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 transition-colors ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-faint)] group-hover:text-[var(--accent)]'
                  }`}
                  strokeWidth={1.7}
                />

                <span>{item.label}</span>

                {isActive && (
                  <span className="absolute bottom-[-18px] left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop action */}
        <div className="hidden md:flex">
          <button
            type="button"
            onClick={() => navigate('booking')}
            className="group flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent)] px-4 py-2 text-[12px] font-semibold text-white shadow-[0_4px_12px_var(--glow-accent)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
          >
            <span>Plan Your Visit</span>

            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-soft)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--accent)] md:hidden"
          aria-label={
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-5 w-5" strokeWidth={1.6} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.6} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[var(--border-color)] bg-[var(--surface-raised)] transition-all duration-300 md:hidden ${
          isOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="section-container py-3">
          <div className="divide-y divide-[var(--border-color)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate(item.id)}
                  className={`flex w-full items-center justify-between py-3.5 text-sm transition-colors ${
                    isActive
                      ? 'text-[var(--accent-dark)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      className={`h-4 w-4 ${
                        isActive
                          ? 'text-[var(--accent)]'
                          : 'text-[var(--text-muted)]'
                      }`}
                      strokeWidth={1.6}
                    />

                    {item.label}
                  </span>

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive
                        ? 'bg-[var(--accent)]'
                        : 'bg-[var(--border-strong)]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => navigate('booking')}
            className="btn-primary mt-4 flex w-full items-center justify-center gap-2"
          >
            <Ticket
              className="h-4 w-4"
              strokeWidth={1.8}
            />
            Plan Your Visit
          </button>
        </div>
      </div>
    </header>
  );
}