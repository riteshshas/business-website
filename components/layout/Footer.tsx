import Link from "next/link";

import { businessInfo } from "@/data/business";
import { contact } from "@/data/contact";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <section aria-labelledby="footer-business">
            <h3
              id="footer-business"
              className="text-2xl font-semibold text-white"
            >
              {businessInfo.name}
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              {businessInfo.footerDescription}
            </p>
          </section>

          <nav aria-labelledby="footer-navigation">
            <h2
              id="footer-navigation"
              className="text-lg font-semibold text-white"
            >
              Quick Links
            </h2>

            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="text-lg font-semibold text-white"
            >
              Contact
            </h2>

            <div className="mt-4 space-y-5">
              <div>
                <p className="text-sm font-medium text-slate-400">Phone</p>
                <a
                  href={contact.phone.href}
                  className="mt-1 inline-block transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  {contact.phone.number}
                </a>
              </div>

              <address className="not-italic">
                <p className="text-sm font-medium text-slate-400">Address</p>

                <div className="mt-1 space-y-1">
                  {contact.office.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </address>

              <div>
                <p className="text-sm font-medium text-slate-400">
                  Working Hours
                </p>

                <p className="mt-1">{contact.hours.days}</p>
                <p>{contact.hours.time}</p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}