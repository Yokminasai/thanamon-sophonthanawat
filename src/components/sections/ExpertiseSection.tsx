import { KEYWORD } from "@/lib/site-config";
import { expertiseDetails } from "@/content/shared";

export function ExpertiseSection() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20" id="expertise">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          ความรู้และความเชี่ยวชาญ — {KEYWORD}
        </h2>
        <h3 className="mb-10 text-xl font-medium text-neutral-600">
          SEO · Digital Marketing · ORM · Entity SEO
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseDetails.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-white p-6"
            >
              <h3 className="mb-3 text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
