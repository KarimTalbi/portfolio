import { useEffect, useRef } from "react";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const touchStart = useRef(0); // Tracks initial touch Y position

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollToSection = (direction: "down" | "up") => {
      if (isScrolling.current) return;

      const containerHeight = container.clientHeight;
      const currentScroll = container.scrollTop;
      let targetScroll: number;

      if (direction === "down") {
        targetScroll = Math.ceil((currentScroll + 1) / containerHeight) * containerHeight;
      } else {
        targetScroll = Math.floor((currentScroll - 1) / containerHeight) * containerHeight;
      }

      if (targetScroll >= 0 && targetScroll < container.scrollHeight) {
        isScrolling.current = true;
        container.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });

        setTimeout(() => {
          isScrolling.current = false;
        }, 700); // Cooldown to prevent multi-triggering
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollToSection(e.deltaY > 0 ? "down" : "up");
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const touchEnd = e.touches[0].clientY;
      const deltaY = touchStart.current - touchEnd;
      const swipeThreshold = 30;

      if (Math.abs(deltaY) > swipeThreshold) {
        e.preventDefault();
        scrollToSection(deltaY > 0 ? "down" : "up");
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-page-accent"
    >
      <Navbar />

      {/* Section 1: Hero */}
      <div className="w-full h-screen shrink-0">
        <Hero />
      </div>

      {/* Section 2: Projects */}
      <div className="w-full h-screen shrink-0 flex items-center justify-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter font-stretch-75% text-heading">
          Projects Section
        </h2>
      </div>

      {/* Section 3: Stack */}
      <div className="w-full h-screen shrink-0 flex items-center justify-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter font-stretch-75% text-heading">
          Stack Section
        </h2>
      </div>
    </div>
  );
}

export default App;