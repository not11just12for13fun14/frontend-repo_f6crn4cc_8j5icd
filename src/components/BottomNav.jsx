import { Home, BookOpen, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 border-t border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <ul className="mx-auto max-w-screen-md grid grid-cols-3">
        <li>
          <a href="#top" className="flex flex-col items-center py-3 gap-1 text-neutral-700 active:scale-95">
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </a>
        </li>
        <li>
          <a href="#work" className="flex flex-col items-center py-3 gap-1 text-neutral-700 active:scale-95">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-medium">Work</span>
          </a>
        </li>
        <li>
          <a href="#about" className="flex flex-col items-center py-3 gap-1 text-neutral-700 active:scale-95">
            <User className="h-5 w-5" />
            <span className="text-xs font-medium">About</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
