import HeaderBar from './components/HeaderBar.jsx';
import ProfileIntro from './components/ProfileIntro.jsx';
import CaseStudyList from './components/CaseStudyList.jsx';
import WireframeNotes from './components/WireframeNotes.jsx';
import BottomNav from './components/BottomNav.jsx';

function App() {
  return (
    <div id="top" className="min-h-screen bg-neutral-50 text-neutral-900 font-inter">
      <HeaderBar />

      <main className="pb-24" role="main">
        <ProfileIntro />

        <section id="work" aria-labelledby="work-heading" className="mt-2">
          <h2 id="work-heading" className="sr-only">Selected Case Studies</h2>
          <CaseStudyList />
        </section>

        <WireframeNotes />
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
