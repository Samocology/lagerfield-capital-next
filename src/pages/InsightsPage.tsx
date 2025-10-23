import { Navigation } from "@/components/Navigation";
import { Insights } from "@/components/Insights";
import { Footer } from "@/components/Footer";

const InsightsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default InsightsPage;
