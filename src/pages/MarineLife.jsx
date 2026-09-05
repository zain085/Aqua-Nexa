import React, { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import animals from "../data/animal";
import Modal from "../components/Modal";

export default function MarineLife() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const filteredAnimals = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return animals;

    return animals.filter((animal) => {
      const searchableText = [
        animal.name,
        animal.scientificName,
        animal.category,
        animal.habitat,
        animal.description,
        animal.diet,
        animal.types,
        animal.conservationStatus,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <section className="section-container pt-10 sm:pt-16 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="section-eyebrow">
              Marine Life Archive
            </div>

            <h1 className="section-title mt-4">
              Life beneath
              <span className="block italic">the surface.</span>
            </h1>

            <p className="section-description mt-6 max-w-2xl">
              Explore the remarkable animals that inhabit our oceans,
              coastlines and waterways. Select an exhibit to discover the
              stories, adaptations and science behind each species.
            </p>
          </div>

          <div className="hidden lg:block lg:pb-1">
            <div className="text-right">
              <p className="data-value">
                {String(animals.length).padStart(2, "0")}
              </p>

              <p className="data-label mt-1">
                Species catalogued
              </p>
            </div>
          </div>
        </div>

        <div className="marine-line mt-10 sm:mt-12">
          <span className="marine-line-accent" />
        </div>

        {/* ===================================================
            SEARCH
        ==================================================== */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-xl">
            {/* Fixed search icon area */}
            <span
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                flex
                h-full
                w-12
                items-center
                justify-center
              "
            >
              <Search
                className="h-4 w-4 text-[var(--text-muted)]"
                strokeWidth={1.7}
              />
            </span>

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by species, habitat or diet"
              aria-label="Search marine life"
              className="
                form-input
                w-full
                pl-12
                pr-11
              "
            />

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="
                  absolute
                  right-2
                  top-1/2
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  text-[var(--text-muted)]
                  transition-colors
                  hover:bg-[var(--surface-soft)]
                  hover:text-[var(--text-main)]
                "
              >
                <X
                  className="h-4 w-4"
                  strokeWidth={1.7}
                />
              </button>
            )}
          </div>

          <p
            className="
              shrink-0
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[var(--text-muted)]
            "
          >
            {filteredAnimals.length}{" "}
            {filteredAnimals.length === 1 ? "Exhibit" : "Exhibits"}
          </p>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section className="section-container pb-20 pt-10 sm:pb-28 sm:pt-14">
        {filteredAnimals.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredAnimals.map((animal) => {
              return (
                <article
                  key={animal.name}
                  className="
                    group
                    overflow-hidden
                    rounded-[var(--radius-md)]
                    border
                    border-[var(--border-color)]
                    bg-[var(--surface)]
                    shadow-[0_5px_18px_var(--shadow-soft)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--border-accent)]
                    hover:shadow-[0_10px_26px_var(--shadow-medium)]
                  "
                >
                  <button
                    type="button"
                    onClick={() => setSelectedAnimal(animal)}
                    className="
                      block
                      w-full
                      text-left
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[var(--accent)]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[var(--bg-primary)]
                    "
                    aria-label={`View information about ${animal.name}`}
                  >
                    {/* =================================================
                        IMAGE
                    ================================================== */}
                    <div
                      className="
                        relative
                        aspect-[4/3]
                        w-full
                        overflow-hidden
                        bg-[var(--bg-tertiary)]
                      "
                    >
                      <img
                        src={animal.image}
                        alt={animal.name}
                        loading="lazy"
                        className="
                          image-cover
                          h-full
                          w-full
                        "
                      />

                      {/* Image readability overlay */}
                      <div
                        className="
                          image-overlay
                          absolute
                          inset-0
                        "
                      />

                      {/* Image Caption */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p
                          className="
                            mb-1.5
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-white/70
                          "
                        >
                          {animal.category}
                        </p>

                        <h2
                          className="
                            font-serif
                            text-2xl
                            leading-tight
                            text-white
                            sm:text-[1.65rem]
                          "
                        >
                          {animal.name}
                        </h2>
                      </div>
                    </div>

                    {/* =================================================
                        CARD INFORMATION
                    ================================================== */}
                    <div className="px-5 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <p className="data-label">
                            Habitat
                          </p>

                          <p
                            className="
                              mt-1
                              truncate
                              text-sm
                              font-medium
                              text-[var(--text-secondary)]
                            "
                          >
                            {animal.habitat || "Marine environment"}
                          </p>
                        </div>

                        <span
                          className="
                            shrink-0
                            rounded-full
                            border
                            border-[var(--border-color)]
                            bg-[var(--surface-soft)]
                            px-2.5
                            py-1
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[var(--accent-dark)]
                          "
                        >
                          Explore
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================== */
          <div
            className="
              exhibit-surface
              flex
              min-h-[340px]
              flex-col
              items-center
              justify-center
              rounded-[var(--radius-md)]
              px-6
              text-center
            "
          >
            <div
              className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border-color)]
                bg-[var(--surface)]
              "
            >
              <Search
                className="h-5 w-5 text-[var(--accent)]"
                strokeWidth={1.5}
              />
            </div>

            <p className="section-eyebrow justify-center">
              Archive Search
            </p>

            <h2
              className="
                mt-3
                font-serif
                text-3xl
                text-[var(--text-main)]
              "
            >
              No exhibits found
            </h2>

            <p
              className="
                mt-3
                max-w-md
                text-sm
                leading-6
                text-[var(--text-secondary)]
              "
            >
              Nothing in the marine archive matches{" "}
              <span className="font-semibold text-[var(--text-main)]">
                “{searchQuery}”
              </span>
              . Try searching for another species, habitat or category.
            </p>

            <button
              type="button"
              onClick={clearSearch}
              className="btn-secondary mt-6"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          CLOSING SECTION
      ====================================================== */}
      <section className="section-container pb-20 sm:pb-28">
        <div className="marine-line mb-10">
          <span className="marine-line-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">
              Look Closer
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-3xl
                leading-tight
                text-[var(--text-main)]
                sm:text-4xl
              "
            >
              Every creature carries a story shaped by the water.
            </h2>
          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-6
              text-[var(--text-secondary)]
            "
          >
            Open any exhibit to explore its habitat, physical characteristics,
            diet, conservation status and a little-known fact from the field.
          </p>
        </div>
      </section>

      {/* =====================================================
          ANIMAL MODAL
      ====================================================== */}
      <Modal
        open={Boolean(selectedAnimal)}
        onClose={() => setSelectedAnimal(null)}
        animal={selectedAnimal}
      />
    </>
  );
}