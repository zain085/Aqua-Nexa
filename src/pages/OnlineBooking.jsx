import React, { useState } from "react";
import { CreditCard, Wallet, CheckCircle } from "lucide-react";

export default function OnlineBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: "1",
    date: "",
    paymentMethod: "card",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      tickets: "1",
      date: "",
      paymentMethod: "card",
    });
  };

  return (
    <main className="section-container py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl">
        {/* PAGE HEADER */}
        <header className="mb-12 text-center md:mb-14">
          <div className="section-eyebrow justify-center">
            Visitor Access
          </div>

          <h1 className="section-title heading-underline inline-block">
            Online Ticket Booking
          </h1>

          <p className="section-description mx-auto max-w-2xl">
            Reserve your access to our exhibits and interactive shows with a
            simple online booking.
          </p>
        </header>

        {/* SUCCESS STATE */}
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
              <CheckCircle
                className="h-7 w-7 text-[var(--accent)]"
                strokeWidth={2}
              />
            </div>

            <div className="space-y-3">
              <p className="exhibit-number">
                BOOKING CONFIRMED
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
                Your Visit Is Reserved
              </h2>

              <p
                className="
                  mx-auto
                  max-w-lg
                  text-sm
                  leading-7
                  text-[var(--text-muted)]
                "
              >
                Thank you,{" "}
                <span className="font-semibold text-[var(--accent)]">
                  {formData.name}
                </span>
                . Your confirmation email has been sent to{" "}
                <span className="font-medium text-[var(--text-secondary)]">
                  {formData.email}
                </span>
                .
              </p>
            </div>

            {/* Confirmation Details */}
            <div
              className="
                mx-auto
                my-8
                max-w-md
                border-y
                border-[var(--border-color)]
                py-5
              "
            >
              <div className="grid grid-cols-2 gap-5 text-left">
                <div>
                  <p className="data-label">Visit Date</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-main)]">
                    {formData.date || "Not specified"}
                  </p>
                </div>

                <div>
                  <p className="data-label">Tickets</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-main)]">
                    {formData.tickets}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
            >
              Book Another Ticket
            </button>
          </section>
        ) : (
          /* BOOKING FORM */
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
            {/* Form Introduction */}
            <div
              className="
                mb-9
                border-b
                border-[var(--border-color)]
                pb-7
              "
            >
              <p className="exhibit-number mb-2">
                RESERVE YOUR VISIT
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
                Plan your aquarium visit
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
                Enter your details below to reserve tickets for your preferred
                visit date and payment method.
              </p>
            </div>

            <div className="space-y-7">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="booking-name"
                  className="
                    block
                    text-[0.72rem]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--text-secondary)]
                  "
                >
                  Full Name
                </label>

                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((previous) => ({
                      ...previous,
                      name: e.target.value,
                    }))
                  }
                  className="form-input"
                />
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="booking-email"
                    className="
                      block
                      text-[0.72rem]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[var(--text-secondary)]
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        email: e.target.value,
                      }))
                    }
                    className="form-input"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="booking-phone"
                    className="
                      block
                      text-[0.72rem]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[var(--text-secondary)]
                    "
                  >
                    Phone Number
                  </label>

                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        phone: e.target.value,
                      }))
                    }
                    className="form-input"
                  />
                </div>
              </div>

              {/* Visit Details */}
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="booking-tickets"
                    className="
                      block
                      text-[0.72rem]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[var(--text-secondary)]
                    "
                  >
                    Number of Tickets
                  </label>

                  <select
                    id="booking-tickets"
                    name="tickets"
                    value={formData.tickets}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        tickets: e.target.value,
                      }))
                    }
                    className="form-input"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n}>
                        {n} Ticket{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="booking-date"
                    className="
                      block
                      text-[0.72rem]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[var(--text-secondary)]
                    "
                  >
                    Visit Date
                  </label>

                  <input
                    id="booking-date"
                    name="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData((previous) => ({
                        ...previous,
                        date: e.target.value,
                      }))
                    }
                    className="form-input"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div
                className="
                  space-y-4
                  border-t
                  border-[var(--border-color)]
                  pt-7
                "
              >
                <div>
                  <p
                    className="
                      block
                      text-[0.72rem]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[var(--text-secondary)]
                    "
                  >
                    Payment Method
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[var(--text-faint)]">
                    Select your preferred payment option.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Card */}
                  <label
                    className={`
                      group
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-[var(--radius-md)]
                      border
                      p-4
                      transition-all
                      duration-200
                      ${
                        formData.paymentMethod === "card"
                          ? "border-[var(--border-accent)] bg-[var(--surface-soft)] shadow-[0_0_0_3px_var(--glow-accent)]"
                          : "border-[var(--border-color)] bg-[var(--surface-raised)] hover:border-[var(--border-accent)]"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={() =>
                        setFormData((previous) => ({
                          ...previous,
                          paymentMethod: "card",
                        }))
                      }
                      className="sr-only"
                    />

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${
                          formData.paymentMethod === "card"
                            ? "border-[var(--border-accent)] bg-[var(--surface)]"
                            : "border-[var(--border-color)] bg-[var(--surface)]"
                        }
                      `}
                    >
                      <CreditCard
                        className="h-5 w-5 text-[var(--accent)]"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-semibold text-[var(--text-main)]">
                        Card
                      </span>

                      <span className="mt-0.5 block text-xs text-[var(--text-faint)]">
                        Credit or debit card
                      </span>
                    </div>
                  </label>

                  {/* PayPal */}
                  <label
                    className={`
                      group
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      rounded-[var(--radius-md)]
                      border
                      p-4
                      transition-all
                      duration-200
                      ${
                        formData.paymentMethod === "paypal"
                          ? "border-[var(--border-accent)] bg-[var(--surface-soft)] shadow-[0_0_0_3px_var(--glow-accent)]"
                          : "border-[var(--border-color)] bg-[var(--surface-raised)] hover:border-[var(--border-accent)]"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={formData.paymentMethod === "paypal"}
                      onChange={() =>
                        setFormData((previous) => ({
                          ...previous,
                          paymentMethod: "paypal",
                        }))
                      }
                      className="sr-only"
                    />

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        ${
                          formData.paymentMethod === "paypal"
                            ? "border-[var(--border-accent)] bg-[var(--surface)]"
                            : "border-[var(--border-color)] bg-[var(--surface)]"
                        }
                      `}
                    >
                      <Wallet
                        className="h-5 w-5 text-[var(--accent)]"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-semibold text-[var(--text-main)]">
                        PayPal
                      </span>

                      <span className="mt-0.5 block text-xs text-[var(--text-faint)]">
                        Pay securely online
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div
                className="
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-[var(--border-color)]
                  pt-7
                "
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-5 text-[var(--text-faint)]">
                    Review your visit details before completing your booking.
                  </p>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* FOOTNOTE */}
        {!submitted && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[var(--border-color)]" />

            <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--text-faint)]">
              Your visit starts here
            </span>

            <span className="h-px w-8 bg-[var(--border-color)]" />
          </div>
        )}
      </div>
    </main>
  );
}