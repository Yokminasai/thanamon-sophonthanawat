import { KEYWORD } from "@/lib/site-config";
import { experienceItems } from "@/content/shared";

export function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20" id="experience">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          ประสบการณ์และผลงาน — {KEYWORD}
        </h2>
        <h3 className="mb-10 text-xl font-medium text-neutral-600">
          เส้นทางอาชีพ ทักษะ และความสำเร็จ
        </h3>
        <div className="space-y-8">
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8"
            >
              <p className="mb-1 text-sm font-semibold text-blue-700">
                {item.period}
              </p>
              <h3 className="mb-1 text-xl font-bold text-neutral-900">
                {item.role}
              </h3>
              <p className="mb-4 text-neutral-600">{item.company}</p>
              <ul className="list-inside list-disc space-y-2 text-neutral-700">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
