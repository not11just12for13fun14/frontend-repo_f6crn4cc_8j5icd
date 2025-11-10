export default function WireframeNotes() {
  return (
    <aside className="mx-auto max-w-screen-md px-4 pb-24 sm:pb-28">
      <h2 id="about" className="text-lg font-semibold text-neutral-900">Design Concept & Wireframe Notes</h2>
      <ul className="mt-2 space-y-2 text-neutral-700 text-sm leading-relaxed list-disc pl-5">
        <li>Mobile-first layout prioritizes readable typography (16–18px base, 1.6 line-height).</li>
        <li>One-handed navigation via fixed bottom bar with three primary sections.</li>
        <li>Card-based case studies: each card is thumb-reachable with large tap targets.</li>
        <li>Minimal color: neutral grays, single accent for interactions; strong contrast for accessibility.</li>
        <li>Content-first: short, metrics-led summaries to help hiring managers scan quickly.</li>
        <li>Sticky header with quick contact action for recruiter outreach.</li>
        <li>Responsive grid scales from single column on mobile to compact spacing on desktop.</li>
      </ul>
    </aside>
  );
}
