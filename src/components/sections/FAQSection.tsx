import { KEYWORD } from "@/lib/site-config";
import { faqItems } from "@/content/faq";

export function FAQSection() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">
          คำถามที่พบบ่อย — {KEYWORD}
        </h2>
        <h3 className="mb-10 text-xl font-medium text-neutral-600">
          FAQ เกี่ยวกับประวัติ ความเชี่ยวชาญ และการติดต่อ
        </h3>
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-neutral-200 bg-white"
            >
              <summary className="cursor-pointer px-6 py-4 font-semibold text-neutral-900 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-neutral-100 px-6 py-4 text-neutral-700">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
