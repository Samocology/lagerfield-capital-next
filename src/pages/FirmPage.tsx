import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Team } from "@/components/Team";

const FirmPage = () => {
  const { section } = useParams<{ section: string }>();

  const renderSection = () => {
    switch (section) {
      case "mission-&-vision":
      case "core-values":
        return <About />;
      case "leadership-team":
        return <Team />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default FirmPage;
