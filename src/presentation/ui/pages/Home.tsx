import { useState } from "react";
import { FloatingPromotion } from "../components/FloatingPromotion";
import { HeaderPromotion } from "../components/HeaderPromotion";

const Home = () => {
  const [floatingActive, setFloatingActive] = useState(false);

  const handleCloseFloating = () => {
    setFloatingActive(false);
  }

  return (
    <main>
      <HeaderPromotion />
      {
        floatingActive && <FloatingPromotion onClose={handleCloseFloating} />
      }
    </main>
  )
}

export { Home };
