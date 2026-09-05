import React, { useState } from "react";
import { Check, Send } from "lucide-react";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() && form.email.trim() && form.feedback.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);

    setForm({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <main className="section-container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        {/* =====================================================
            PAGE HEADER
            ===================================================== */}

        <header className="mb-12 text-center md:mb-14">
          <div className="section-eyebrow justify-center">
            Visitor Experience
          </div>

          <h1 className="section-title heading-underline inline-block">
            Visitor Feedback
          </h1>

          <p className="section-description mx-auto max-w-2xl">
            Share your thoughts, observations, or questions with us. Your
            feedback helps us continue improving the aquarium experience.
          </p>
        </header>

        {/* =====================================================
            SUCCESS STATE
            ===================================================== */}

        {submitted ? (
          <section
            className="
              glass-card
              px-6
              py-12
              text-center
              sm:px-10
              sm:py-14
              md:px-14
              md:py-16
            "
            aria-live="polite"
          >
            {/* Success Icon */}

            <div
              className="
                mx-auto
                mb-7
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border-accent)]
                bg-[var(--surface-soft)]
                shadow-[0_0_0_6px_var(--glow-accent)]
              "
            >
              <Check
                className="h-7 w-7 text-[var(--accent)]"
                strokeWidth={2}
              />
            </div>

            {/* Success Content */}

            <div className="space-y-3">
              <p className="exhibit-number">
                FEEDBACK RECEIVED
              </p>

              <h2
                className="
                  font-serif
                  text-2xl
                  font-medium
                  tracking-tight
                  text-[var(--text-main)]
                  md:text-3xl
                "
              >
                Thank You
              </h2>

              <p
                className="
                  mx-auto
                  max-w-md
                  text-sm
                  leading-7
                  text-[var(--text-muted)]
                "
              >
                Your feedback has been received. We appreciate you taking the
                time to share your experience with us.
              </p>
            </div>

            {/* Success Divider */}

            <div className="mx-auto my-8 flex max-w-xs items-center justify-center gap-3">
              <span className="h-px flex-1 bg-[var(--border-color)]" />

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

              <span className="h-px flex-1 bg-[var(--border-color)]" />
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
            >
              Send Another Response
            </button>
          </section>
        ) : (
          /* =====================================================
             FEEDBACK FORM
             ===================================================== */

          <form
            onSubmit={handleSubmit}
            className="
              glass-card
              p-6
              sm:p-8
              md:p-10
              lg:p-12
            "
          >
            {/* -------------------------------------------------
                FORM INTRODUCTION
                ------------------------------------------------- */}

            <div
              className="
                mb-9
                border-b
                border-[var(--border-color)]
                pb-7
              "
            >
              <p className="exhibit-number mb-2">
                SHARE YOUR EXPERIENCE
              </p>

              <h2
                className="
                  font-serif
                  text-2xl
                  font-medium
                  tracking-tight
                  text-[var(--text-main)]
                  sm:text-3xl
                "
              >
                Tell us what you think
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-7
                  text-[var(--text-muted)]
                "
              >
                Whether you enjoyed your visit, noticed something we could
                improve, or simply want to share an observation, we would love
                to hear from you.
              </p>
            </div>

            {/* -------------------------------------------------
                FORM FIELDS
                ------------------------------------------------- */}

            <div className="space-y-7">
              {/* Name */}

              <div className="space-y-2">
                <label
                  htmlFor="feedback-name"
                  className="
                    block
                    text-[0.72rem]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--text-secondary)]
                  "
                >
                  Name
                </label>

                <input
                  id="feedback-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((previous) => ({
                      ...previous,
                      name: e.target.value,
                    }))
                  }
                  className="form-input"
                />
              </div>

              {/* Email */}

              <div className="space-y-2">
                <label
                  htmlFor="feedback-email"
                  className="
                    block
                    text-[0.72rem]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--text-secondary)]
                  "
                >
                  Email
                </label>

                <input
                  id="feedback-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((previous) => ({
                      ...previous,
                      email: e.target.value,
                    }))
                  }
                  className="form-input"
                />
              </div>

              {/* Message */}

              <div className="space-y-2">
                <label
                  htmlFor="feedback-message"
                  className="
                    block
                    text-[0.72rem]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--text-secondary)]
                  "
                >
                  Your Message
                </label>

                <textarea
                  id="feedback-message"
                  name="feedback"
                  required
                  rows={7}
                  placeholder="Tell us about your experience..."
                  value={form.feedback}
                  onChange={(e) =>
                    setForm((previous) => ({
                      ...previous,
                      feedback: e.target.value,
                    }))
                  }
                  className="form-input min-h-44 resize-none"
                />
              </div>

              {/* -------------------------------------------------
                  SUBMIT
                  ------------------------------------------------- */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-[var(--border-color)]
                  pt-7
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-sm
                    text-xs
                    leading-5
                    text-[var(--text-faint)]
                  "
                >
                  Your response helps us create a better experience for every
                  visitor.
                </p>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Send Feedback</span>

                  <Send
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                </button>
              </div>
            </div>
          </form>
        )}

        {/* =====================================================
            FOOTNOTE
            ===================================================== */}

        {!submitted && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--border-color)]" />

            <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--text-faint)]">
              Your voice matters
            </span>

            <span className="h-px w-8 bg-[var(--border-color)]" />
          </div>
        )}
      </div>
    </main>
  );
}