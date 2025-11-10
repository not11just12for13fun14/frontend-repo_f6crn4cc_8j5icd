import { ArrowRight } from 'lucide-react';

const studies = [
  {
    id: 'cs1',
    title: 'Onboarding Redesign — +18% Activation',
    role: 'Lead UX, Research, Prototyping',
    summary:
      'Reduced time-to-value with progressive disclosure and adaptive tips for first-time users.',
  },
  {
    id: 'cs2',
    title: 'Design System — 40% Faster Delivery',
    role: 'System Architecture, Tokens, QA',
    summary:
      'Built an accessible token-based system with guidelines that scaled to 12 product teams.',
  },
  {
    id: 'cs3',
    title: 'Checkout Optimization — +12% Conversion',
    role: 'Experimentation, UX Writing',
    summary:
      'Introduced one-handed flows, address autocomplete, and clear error states on mobile.',
  },
  {
    id: 'cs4',
    title: 'Data Viz for Ops — -35% Time-to-Insight',
    role: 'IA, Visualization, Handoff',
    summary:
      'Refactored information hierarchy and added comparative views for daily operations.',
  },
  {
    id: 'cs5',
    title: 'Support Portal — -22% Tickets via Self-Serve',
    role: 'Content Strategy, IA',
    summary:
      'Mapped top intents and built guided paths, improving deflection without hurting CSAT.',
  },
];

export default function CaseStudyList() {
  return (
    <section className="mx-auto max-w-screen-md px-2 sm:px-4 py-4">
      <ol className="grid gap-3">
        {studies.map((s, i) => (
          <li key={s.id} className="group">
            <a
              href={`#${s.id}`}
              className="block rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-sm active:scale-[0.99] transition focus:outline-none focus:ring-2 focus:ring-neutral-900"
              aria-label={`${s.title} — ${s.role}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-neutral-900">
                    {String(i + 1).padStart(2, '0')} · {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.role}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:translate-x-0.5 transition" />
              </div>
              <p className="mt-3 text-neutral-700 leading-relaxed text-sm sm:text-base">
                {s.summary}
              </p>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
