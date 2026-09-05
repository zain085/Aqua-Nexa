import React, { useEffect } from "react";
import { X, MapPin, Clock3, Ruler, Weight, Gauge, ShieldCheck } from "lucide-react";

export default function Modal({ open, onClose, animal }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !animal) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        p-3
        sm:p-5
        lg:p-8
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="marine-life-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* =====================================================
          BACKDROP
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          bg-[var(--surface-deep)]/85
          backdrop-blur-md
        "
        aria-hidden="true"
      />

      {/* =====================================================
          MODAL
      ====================================================== */}
      <div
        className="
          relative
          flex
          max-h-[94vh]
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[var(--radius-xl)]
          border
          border-[var(--border-strong)]
          bg-[var(--surface)]
          shadow-[0_30px_80px_rgba(13,56,51,0.32)]
        "
      >
        {/* ===================================================
            CLOSE BUTTON
        ==================================================== */}
        <button
          type="button"
          onClick={onClose}
          aria-label={`Close ${animal.name} information`}
          className="
            absolute
            right-4
            top-4
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/25
            bg-[var(--surface-dark)]/75
            text-white
            backdrop-blur-md
            transition-colors
            duration-200
            hover:bg-[var(--surface-dark)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
          "
        >
          <X
            className="h-5 w-5"
            strokeWidth={1.6}
          />
        </button>

        {/* ===================================================
            CONTENT
        ==================================================== */}
        <div className="grid w-full overflow-y-auto lg:grid-cols-[0.92fr_1.08fr]">
          {/* =================================================
              IMAGE PANEL
          ================================================== */}
          <div
            className="
              relative
              min-h-[340px]
              bg-[var(--surface-dark)]
              lg:min-h-[720px]
            "
          >
            <img
              src={animal.image}
              alt={animal.name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Image overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[var(--surface-deep)]/90
                via-[var(--surface-deep)]/15
                to-transparent
              "
            />

            {/* Image content */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-6
                sm:p-8
                lg:p-10
              "
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="
                    h-px
                    w-8
                    bg-[var(--aqua-light)]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white/70
                  "
                >
                  Marine Life Exhibit
                </span>
              </div>

              <h2
                id="marine-life-modal-title"
                className="
                  max-w-xl
                  font-serif
                  text-4xl
                  leading-[0.95]
                  tracking-[-0.03em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {animal.name}
              </h2>

              {animal.scientificName && (
                <p
                  className="
                    mt-4
                    font-serif
                    text-base
                    italic
                    text-white/65
                    sm:text-lg
                  "
                >
                  {animal.scientificName}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {animal.category && (
                  <span
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/80
                      backdrop-blur-sm
                    "
                  >
                    {animal.category}
                  </span>
                )}

                {animal.conservationStatus && (
                  <span
                    className="
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/80
                      backdrop-blur-sm
                    "
                  >
                    {animal.conservationStatus}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              INFORMATION PANEL
          ================================================== */}
          <div
            className="
              bg-[var(--surface)]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            {/* =================================================
                INTRODUCTION
            ================================================== */}
            <div
              className="
                border-b
                border-[var(--border-color)]
                pb-7
              "
            >
              <p className="section-eyebrow">
                Field Notes
              </p>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[var(--text-secondary)]
                  sm:text-base
                "
              >
                {animal.description}
              </p>
            </div>

            {/* =================================================
                SPECIES DATA
            ================================================== */}
            <div className="mt-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="data-label">
                  Species profile
                </p>

                <span
                  className="
                    h-px
                    w-12
                    bg-[var(--border-accent)]
                  "
                />
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  overflow-hidden
                  rounded-[var(--radius-md)]
                  border
                  border-[var(--border-color)]
                  sm:grid-cols-3
                "
              >
                <InfoItem
                  icon={MapPin}
                  label="Habitat"
                  value={animal.habitat}
                />

                <InfoItem
                  icon={Clock3}
                  label="Lifespan"
                  value={animal.lifespan}
                />

                <InfoItem
                  icon={Ruler}
                  label="Size"
                  value={animal.size}
                />

                <InfoItem
                  icon={Weight}
                  label="Weight"
                  value={animal.weight}
                />

                <InfoItem
                  icon={Gauge}
                  label="Speed"
                  value={animal.speed}
                />

                <InfoItem
                  icon={ShieldCheck}
                  label="Conservation"
                  value={animal.conservationStatus}
                  accent
                />
              </div>
            </div>

            {/* =================================================
                DETAILS
            ================================================== */}
            <div className="mt-8 space-y-7">
              <InfoSection title="Diet">
                {animal.diet}
              </InfoSection>

              <InfoSection title="Species & Types">
                {animal.types}
              </InfoSection>
            </div>

            {/* =================================================
                DID YOU KNOW
            ================================================== */}
            {animal.interestingFact && (
              <div
                className="
                  mt-8
                  overflow-hidden
                  rounded-[var(--radius-md)]
                  border
                  border-[var(--border-color)]
                  bg-[var(--surface-soft)]
                "
              >
                <div
                  className="
                    border-l-[3px]
                    border-[var(--accent)]
                    px-5
                    py-5
                    sm:px-6
                    sm:py-6
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[var(--accent)]
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                      "
                    >
                      Did you know?
                    </span>

                    <span className="h-px w-8 bg-[var(--border-accent)]" />
                  </div>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[var(--text-secondary)]
                    "
                  >
                    {animal.interestingFact}
                  </p>
                </div>
              </div>
            )}            
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon: Icon,
  label,
  value,
  accent = false,
}) {
  return (
    <div
      className="
        border-b
        border-r
        border-[var(--border-color)]
        bg-[var(--surface)]
        p-4
        sm:p-5
      "
    >
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            className={`
              h-3.5
              w-3.5
              ${
                accent
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-muted)]"
              }
            `}
            strokeWidth={1.5}
          />
        )}

        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[var(--text-muted)]
          "
        >
          {label}
        </span>
      </div>

      <p
        className={`
          mt-2
          text-sm
          leading-5
          ${
            accent
              ? "font-semibold text-[var(--accent-dark)]"
              : "text-[var(--text-main)]"
          }
        `}
      >
        {value || "Not recorded"}
      </p>
    </div>
  );
}

/* =========================================================
   INFO SECTION
========================================================= */

function InfoSection({ title, children }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          {title}
        </span>

        <span
          className="
            h-px
            w-8
            bg-[var(--border-color)]
          "
        />
      </div>

      <p
        className="
          mt-2.5
          text-sm
          leading-6
          text-[var(--text-secondary)]
        "
      >
        {children || "Not recorded"}
      </p>
    </div>
  );
}

