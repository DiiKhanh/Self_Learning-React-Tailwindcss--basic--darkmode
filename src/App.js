import { useState, useEffect } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    // handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 text-black dark:text-white md:px-20">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
