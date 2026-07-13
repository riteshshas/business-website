import type { ServiceDocument } from "@/types/services";
export default function RequiredDocuments({
  documents,
}: {
  documents: ServiceDocument[];
}) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Required Documents
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Keeping these documents ready can make the application process
            smoother.
          </p>
        </header>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((document) => (
            <li
              key={document.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{document.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {document.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
