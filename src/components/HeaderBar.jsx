import { Mail } from 'lucide-react';

export default function HeaderBar() {
  const handleEmail = () => {
    window.location.href = 'mailto:maruf.muchlisin@example.com?subject=Hello%20Ma%27ruf&body=Hi%20Ma%27ruf%2C%20I%27d%20love%20to%20chat%20about%20a%20role.';
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
      <div className="mx-auto max-w-screen-md px-4 py-3 flex items-center justify-between">
        <div className="font-semibold tracking-tight text-neutral-900">Ma'ruf Muchlisin</div>
        <button
          onClick={handleEmail}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-2 text-sm font-medium active:scale-[0.98] transition"
          aria-label="Email Ma'ruf"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Contact</span>
        </button>
      </div>
    </header>
  );
}
