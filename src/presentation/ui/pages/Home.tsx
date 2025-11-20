import { useState } from "react";
import { FloatingPromotion } from "../components/FloatingPromotion";

const Home = () => {
  const [floatingActive, setFloatingActive] = useState(true);

  const handleCloseFloating = () => {
    setFloatingActive(false);
  }

  return (
    <main>
      jjjj
      {
        floatingActive && <FloatingPromotion onClose={handleCloseFloating} />
      }
    </main>
  )
}

export { Home };
