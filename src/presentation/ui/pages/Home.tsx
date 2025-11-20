import { useState } from "react";
import { FloatingPromotion } from "../components/FloatingPromotion";
import { HeaderPromotion } from "../components/HeaderPromotion";
import { Arrangement } from "../components/Arrangement";
import { Information } from "../containers/Information";
import { JoinArrangement } from "../containers/JoinArrangement";
import { Footer } from "../containers/Footer";

const Home = () => {
  const [floatingActive, setFloatingActive] = useState(false);

  const handleCloseFloating = () => {
    setFloatingActive(false);
  }

  return (
    <main>
      <HeaderPromotion />
      <Arrangement />
      <Information />
      <JoinArrangement />
      <Footer />
      {
        floatingActive && <FloatingPromotion onClose={handleCloseFloating} />
      }
    </main>
  )
}

export { Home };
