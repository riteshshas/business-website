import { processSteps } from "@/data/process";

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Happens Next?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            From your first enquiry to the final document or policy, we guide
            you through every step of the process.
          </p>
        </header>

        <ol className="mt-14 space-y-10" aria-label="Process timeline">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;

            return (
              <li
                key={step.title}
                className="relative flex items-start gap-6"
              >
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-sm font-semibold text-slate-900">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="mt-2 h-full min-h-16 w-px bg-slate-300"
                    />
                  )}
                </div>

                <div className="flex-1 pb-2">
                  <span className="text-sm font-medium uppercase tracking-wider text-slate-500">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-1 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}