import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Fish,
  MapPin,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import animals from "../data/animal";

export default function Home({ setCurrentPage }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const galleryImages = [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85",
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=900&q=85",
    "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=900&q=85",
    "https://images.unsplash.com/photo-1508873696983-2df515122519?w=900&q=85",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&q=85",
    "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?w=900&q=85",
  ];

  const animalHighlights = animals.filter((animal) =>
    [
      "Whale Shark",
      "Leopard Shark",
      "Beluga Whale",
      "Bottlenose Dolphin",
    ].includes(animal.name),
  );

  const events = [
    {
      time: "12:00 PM",
      title: "Dolphin Show",
      description:
        "An engaging showcase of intelligence, agility, and synchronized movement.",
    },
    {
      time: "03:00 PM",
      title: "Orca Experience",
      description:
        "Discover the intelligence, communication, and remarkable social behavior of orcas.",
    },
    {
      time: "06:00 PM",
      title: "Seal Tricks Show",
      description:
        "A family-friendly evening presentation featuring playful seals and their trainers.",
    },
  ];

  return (
    <div>
      {/* Live information bar */}
      <div className="border-b border-[var(--border-color)] bg-[var(--surface-raised)]">
        <div className="section-container flex min-h-9 items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Aquarium Information
          </div>

          <time className="text-[10px] font-medium tracking-wide text-[var(--text-secondary)]">
            {time.toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}{" "}
            ·{" "}
            {time.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </time>
        </div>
      </div>

      {/* Hero */}
      <section className="section-container pt-12 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">Marine discovery center</p>

            <h1 className="mt-5 font-serif text-[clamp(3rem,7vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.04em] text-[var(--text-main)]">
              <span className="block text-[var(--accent)]">Aqua Nexa</span>
              Aquarium
            </h1>

            <div className="mt-7 max-w-xl border-l-2 border-[var(--accent)] pl-5">
              <p className="font-serif text-lg italic leading-8 text-[var(--text-secondary)] sm:text-xl">
                “Aquariums offer a glimpse into a world beyond our own, where
                creatures move with grace and beauty.”
              </p>
            </div>

            <p className="section-description mt-6">
              Step into an underwater world filled with remarkable marine life,
              living ecosystems, educational exhibits, and stories that inspire
              a deeper connection with our oceans.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage("booking")}
                className="btn-primary group flex items-center gap-2"
              >
                <Ticket className="h-4 w-4" strokeWidth={1.7} />
                Plan Your Visit
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                />
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage("marine-life")}
                className="btn-secondary flex items-center gap-2"
              >
                <Fish className="h-4 w-4" strokeWidth={1.7} />
                Explore Marine Life
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              <div>
                <span className="data-value block text-xl">50+</span>
                <span className="data-label">Species</span>
              </div>

              <div className="h-10 w-px bg-[var(--border-color)]" />

              <div>
                <span className="data-value block text-xl">3</span>
                <span className="data-label">Daily Events</span>
              </div>

              <div className="h-10 w-px bg-[var(--border-color)]" />

              <div>
                <span className="data-value block text-xl">365</span>
                <span className="data-label">Days of Discovery</span>
              </div>
            </div>
          </div>

          {/* Hero image composition */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-tertiary)]">
              <img
                src={galleryImages[0]}
                alt="Marine life exhibit"
                className="image-cover aspect-[4/5] w-full"
              />

              <div className="image-overlay absolute inset-0" />

              <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                <p className="mt-1 font-serif text-lg text-white sm:text-xl">
                  Life beneath the surface
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4">
              <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-tertiary)]">
                <img
                  src={galleryImages[1]}
                  alt="Underwater aquarium exhibit"
                  className="image-cover aspect-[4/3] w-full"
                />
              </div>

              <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-tertiary)]">
                <img
                  src={galleryImages[2]}
                  alt="Colorful marine life"
                  className="image-cover aspect-[4/3] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marine information */}
      <section className="mt-20 sm:mt-28">
        <div className="section-container py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Marine archive</p>

            <h2 className="section-title mt-3">Meet the Residents</h2>

            <p className="section-description mt-4">
              Get to know some of the remarkable animals featured in our
              marine-life collection.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {animalHighlights.map((animal) => (
              <article
                key={animal.name}
                className="group overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--surface)] shadow-[0_5px_18px_var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)] hover:shadow-[0_10px_26px_var(--shadow-medium)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-tertiary)]">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    loading="lazy"
                    className="image-cover h-full w-full"
                  />

                  <div className="image-overlay absolute inset-0" />

                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="font-serif text-xl text-white">
                      {animal.name}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <AnimalStat label="Lifespan" value={animal.lifespan} />

                  <AnimalStat label="Size" value={animal.size} />

                  <AnimalStat label="Weight" value={animal.weight} />

                  <AnimalStat label="Speed" value={animal.speed} />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setCurrentPage("marine-life")}
              className="btn-secondary flex items-center gap-2"
            >
              View Marine Life Archive
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </section>

      {/* Special events */}
      <section className="section-container pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="section-eyebrow">Today at Aqua Nexa</p>

            <h2 className="section-title mt-3">Special Events</h2>

            <p className="section-description mt-4">
              Make your visit more memorable with daily presentations designed
              to entertain, educate, and connect visitors with marine life.
            </p>

            <div className="mt-7 flex items-center gap-3 border-l-2 border-[var(--accent)] pl-4">
              <CalendarDays
                className="h-4 w-4 shrink-0 text-[var(--accent)]"
                strokeWidth={1.6}
              />

              <p className="text-sm text-[var(--text-secondary)]">
                Three scheduled experiences throughout the day.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[13px] top-8 hidden w-px bg-[var(--border-color)] sm:block" />

            <div className="space-y-4">
              {events.map((event) => (
                <article
                  key={event.time}
                  className="glass-card relative p-5 sm:p-6 sm:pl-9"
                >
                  <div className="absolute left-2 top-8 hidden h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] sm:block" />

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                        <Clock3 className="h-3.5 w-3.5" strokeWidth={1.7} />
                        {event.time}
                      </div>

                      <h3 className="font-serif text-xl text-[var(--text-main)]">
                        {event.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-muted)]">
                        {event.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrentPage("booking")}
                      className="btn-secondary flex shrink-0 items-center justify-center gap-2 text-xs"
                    >
                      Reserve
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-container pt-20 sm:pt-28">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
          <div className="deep-panel flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="section-eyebrow">Plan your route</p>

              <h2 className="section-title mt-3">Visit Us</h2>

              <p className="section-description mt-4">
                Find Aqua Nexa at Seattle's waterfront and begin your journey
                into the marine world.
              </p>
            </div>

            <div className="mt-8 border-t border-[var(--border-color)] pt-6">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                  strokeWidth={1.7}
                />

                <div>
                  <p className="data-label">Location</p>

                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    1483 Alaskan Way, Pier 59
                    <br />
                    Seattle, WA 98101
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                  strokeWidth={1.7}
                />

                <p className="text-xs leading-5 text-[var(--text-muted)]">
                  Educational exhibits, family experiences, and marine
                  conservation stories for every visitor.
                </p>
              </div>
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-color)] bg-[var(--bg-tertiary)] shadow-[0_8px_24px_var(--shadow-soft)] sm:min-h-[430px]">
            <iframe
              className="h-full min-h-[360px] w-full sm:min-h-[430px]"
              src="https://maps.google.com/maps?q=seattle%20aquarium&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Aqua Nexa location"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mt-20 sm:mt-28">
        <div className="section-container py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="section-eyebrow">Our story</p>

              <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--text-main)] sm:text-5xl">
                More than an aquarium.
              </h2>
            </div>

            <div className="max-w-3xl space-y-5">
              <p className="text-base leading-8 text-[var(--text-secondary)]">
                Aqua Nexa is a place where curiosity meets the underwater world.
                From colorful reef inhabitants to fascinating predators, our
                exhibits are designed to give visitors a closer look at the
                extraordinary life beneath the surface.
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                Alongside our animal exhibits, we create educational experiences
                that help visitors understand marine ecosystems, animal
                behavior, and the importance of protecting our oceans.
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                Every visit is an opportunity to discover something new, learn
                about the creatures that share our planet, and leave with a
                greater appreciation for the waters that connect us all.
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setCurrentPage("feedback")}
                  className="group flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-dark)]"
                >
                  Share your experience
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.7}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimalStat({ label, value }) {
  return (
    <div className="border-r border-t border-[var(--border-color)] p-3.5 last:border-r-0 sm:p-4">
      <span className="block text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
        {label}
      </span>

      <p className="mt-1.5 text-xs font-medium leading-5 text-[var(--text-main)]">
        {value || "—"}
      </p>
    </div>
  );
}