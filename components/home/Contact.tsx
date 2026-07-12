"use client";

import { contact } from "@/data/contact";

const cardIcons: Record<string, React.ReactNode> = {
  phone: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72l.38 2.49a2 2 0 0 1-.57 1.72l-1.27 1.27a16 16 0 0 0 6.5 6.5l1.27-1.27a2 2 0 0 1 1.72-.57l2.49.38A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),

  whatsapp: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5A9.5 9.5 0 1 1 5.3 18.7L3 21l2.3-2.3A9.5 9.5 0 0 1 21 11.5Z" />
      <path d="M9.5 8.8c.2-.5.4-.5.7-.5h.6c.2 0 .5 0 .7.6l.5 1.2c.1.3.1.5-.1.7l-.4.6c-.1.2-.2.4 0 .7.4.8 1.2 1.6 2 2 .3.2.5.1.7 0l.6-.4c.2-.2.5-.2.7-.1l1.2.5c.6.2.6.5.6.7v.6c0 .3 0 .5-.5.7-.5.2-1.2.3-2 0-1.4-.5-2.8-1.5-4-2.8s-2.2-2.6-2.8-4c-.3-.8-.2-1.5 0-2Z" />
    </svg>
  ),

  location: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),

  clock: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
};

const cardBase =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const contactCards = [
  {
    key: "phone",
    title: "Call Us",
    icon: cardIcons.phone,
    content: (
      <>
        <p className="text-sm text-neutral-600">Speak directly with us.</p>
        <p className="mt-2 font-semibold text-neutral-900">
          {contact.phone.number}
        </p>
      </>
    ),
    button: (
      <a
        href={contact.phone.href}
        aria-label="Call our office"
        className={`${cardBase} border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-900`}
      >
        {contact.phone.button}
      </a>
    ),
  },

  {
    key: "whatsapp",
    title: "WhatsApp",
    icon: cardIcons.whatsapp,
    content: (
      <>
        <p className="text-sm text-neutral-600">
          Chat with us for quick assistance.
        </p>
        <p className="mt-2 font-semibold text-neutral-900">
          {contact.whatsapp.number}
        </p>
      </>
    ),
    button: (
      <a
        href={contact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`${cardBase} bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600`}
      >
        {contact.whatsapp.button}
      </a>
    ),
  },

  {
    key: "office",
    title: "Visit Our Office",
    icon: cardIcons.location,
    content: (
      <>
        <p className="font-medium text-neutral-900">
          MS Documentation &amp; Insurance
        </p>

        <address className="mt-2 space-y-1 text-sm not-italic text-neutral-700">
          {contact.office.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </address>
      </>
    ),
    button: (
      <a
        href={contact.office.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open office location in Google Maps"
        className={`${cardBase} border border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-900`}
      >
        {contact.office.button}
      </a>
    ),
  },

  {
    key: "hours",
    title: "Working Hours",
    icon: cardIcons.clock,
    content: (
      <>
        <p className="font-medium text-neutral-900">{contact.hours.days}</p>
        <p className="mt-1 text-sm text-neutral-600">
          {contact.hours.time}
        </p>
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-white py-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
        <div className="w-full lg:w-5/12">
          <div className="max-w-lg">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
            >
              {contact.heading}
            </h2>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              {contact.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {contactCards.map((card) => (
              <article
                key={card.key}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">
                  {card.icon}
                </div>

                <h3 className="text-lg font-semibold text-neutral-900">
                  {card.title}
                </h3>

                <div className="mt-3 flex-1">{card.content}</div>

                {card.button && <div className="mt-6">{card.button}</div>}
              </article>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-7/12">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-neutral-900">
              {contact.enquiry.heading}
            </h3>

            <p className="mt-3 text-neutral-600">
              {contact.enquiry.description}
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  What can we help you with?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {contact.services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-neutral-900"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help you"
                  className="w-full resize-y rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
                />
              </div>

              <button
                type="submit"
                aria-label={contact.enquiry.button}
                className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 sm:w-auto"
              >
                {contact.enquiry.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}