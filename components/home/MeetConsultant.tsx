import Image from "next/image";

import { consultant } from "@/data/about";

export default function MeetConsultant() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Your Consultant
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Behind every successful application is clear guidance and personal
            attention. Here's the person committed to helping you through every
            step.
          </p>
        </header>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={consultant.image}
                alt={consultant.name}
                width={500}
                height={650}
                className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                priority={false}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  {consultant.name}
                </h3>

                <p className="mt-2 text-lg text-slate-600">
                  {consultant.title}
                </p>
              </div>

              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                {consultant.experience}
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <p className="leading-8 text-slate-600">
                {consultant.introduction}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  My Approach
                </h4>

                <p className="mt-3 leading-8 text-slate-600">
                  {consultant.mission}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">
                  What You Can Expect
                </h4>

                <ul className="mt-4 space-y-3">
                  {consultant.values.map((value) => (
                    <li key={value} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.26a1 1 0 0 1-1.42 0L3.29 9.164a1 1 0 1 1 1.414-1.414l4.096 4.096 6.49-6.55a1 1 0 0 1 1.414-.006Z"
                          />
                        </svg>
                      </span>

                      <span className="leading-7 text-slate-600">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}