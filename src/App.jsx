import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="bg-stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            "--size": `${Math.random() * 2 + 1}px`,
            "--delay": `${Math.random() * 5}s`,
            "--dur": `${Math.random() * 3 + 2}s`,
          }} />
        ))}
      </div>

      <div className="container">
        <Hero />
        <Timeline />
      </div>
    </div>
  );
}
