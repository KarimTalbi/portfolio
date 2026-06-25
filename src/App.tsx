import { useEffect, useRef } from 'react';
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Prevent normal scrolling physics
      e.preventDefault();

      // If an animation is already running, ignore incoming scroll ticks
      if (isScrolling.current) return;

      const delta = e.deltaY;
      const containerHeight = container.clientHeight;
      const currentScroll = container.scrollTop;

      // Calculate target scroll destination based on direction
      let targetScroll = currentScroll;
      if (delta > 0) {
        // Scrolling down -> Go to next section
        targetScroll = Math.ceil((currentScroll + 1) / containerHeight) * containerHeight;
      } else {
        // Scrolling up -> Go to previous section
        targetScroll = Math.floor((currentScroll - 1) / containerHeight) * containerHeight;
      }

      // Check boundaries
      if (targetScroll >= 0 && targetScroll < container.scrollHeight) {
        isScrolling.current = true;

        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });

        // Timeout coordinates with the duration of browser's 'smooth' scroll animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 700);
      }
    };

    // Add passive: false so we are allowed to intercept e.preventDefault()
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll scroll-smooth bg-bg"
    >
      <Navbar />


      {/* Section 1: Hero */}
      <div className="w-full h-screen">
        <Hero />
      </div>

      {/* Section 2: Projects */}
      <div id="projects" className="w-full h-screen shrink-0 bg-slate-50 flex items-center justify-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter font-stretch-75% text-heading">
          Projects Section
        </h2>
      </div>

      {/* Section 3: Stack */}
      <div id="stack" className="w-full h-screen shrink-0 bg-white flex items-center justify-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter font-stretch-75% text-heading">
          Stack Section
        </h2>
      </div>

    </div>
  )
}

export default App
