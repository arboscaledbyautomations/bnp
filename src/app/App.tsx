import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useState, useEffect } from "react";
import { Loading } from "./components/Loading";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time to show the animation
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loading key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {!isLoading && <RouterProvider router={router} />}
    </>
  );
}