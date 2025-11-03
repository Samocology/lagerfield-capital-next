import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Download,
  Calendar,
  TrendingUp,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  content: string;
}

// Mock data for insights
const insights: Insight[] = [
  {
    id: "2024-q4-market-outlook",
    title: "2024 Q4 Market Outlook: Navigating Economic Headwinds",
    category: "Market Analysis",
    date: "October 15, 2024",
    readTime: "5 min read",
    author: {
      name: "John Doe",
      avatar: "/src/assets/team-member-1.jpg",
    },
    image: "/src/assets/hero-financial.jpg",
    content: `
      <p class="lead">Our comprehensive analysis of market conditions and investment strategies for the final quarter of 2024. We delve into the macroeconomic trends shaping the global economy and their implications for investors.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Key Takeaways:</h3>
      <ul class="list-disc list-inside space-y-3 pl-4">
        <li>Global growth is expected to slow down, with developed markets facing recessionary pressures.</li>
        <li>Inflation remains a key concern, although we expect it to moderate in the coming months.</li>
        <li>Central banks are likely to maintain a hawkish stance, with further interest rate hikes possible.</li>
      </ul>
      <blockquote class="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5">
        <p class="text-lg font-medium">"The current market environment requires a disciplined and selective approach to investing. Focus on quality and value will be paramount."</p>
      </blockquote>
      <h3 class="text-2xl font-bold mt-8 mb-4">Investment Recommendations:</h3>
      <p>We recommend a defensive portfolio allocation, with a focus on high-quality assets and value stocks. Diversification across geographies and asset classes is crucial to mitigate risks.</p>
    `,
  },
  {
    id: "future-of-fixed-income-nigeria",
    title: "The Future of Fixed Income Investing in Nigeria",
    category: "Investment Strategy",
    date: "October 8, 2024",
    readTime: "7 min read",
    author: {
      name: "Jane Smith",
      avatar: "/src/assets/team-member-2.jpg",
    },
    image: "/src/assets/services-bg.jpg",
    content: `
      <p class="lead">Exploring opportunities and challenges in Nigeria's fixed income market amid changing monetary policy. The Nigerian fixed income market has witnessed significant volatility in recent years.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Market Dynamics:</h3>
      <p>The Central Bank of Nigeria's (CBN) monetary policy decisions have a profound impact on the fixed income market. We analyze the potential implications of the CBN's recent actions.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">Opportunities for Investors:</h3>
      <ul class="list-disc list-inside space-y-3 pl-4">
        <li>Higher yields on government bonds present attractive opportunities for income-seeking investors.</li>
        <li>Corporate bonds from financially sound companies can offer a yield pick-up over government bonds.</li>
      </ul>
    `,
  },
  {
    id: "esg-investing-trends-africa",
    title: "ESG Investing: Growing Trends in African Markets",
    category: "Sustainable Finance",
    date: "September 30, 2024",
    readTime: "6 min read",
    author: {
      name: "Samuel Chen",
      avatar: "/src/assets/team-member-3.jpg",
    },
    image: "/src/assets/values-bg.jpg",
    content: `
      <p class="lead">How Environmental, Social, and Governance (ESG) factors are reshaping investment decisions across the continent. ESG investing is gaining traction in Africa as investors recognize the importance of sustainability.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">The Rise of ESG:</h3>
      <p>We explore the drivers behind the growth of ESG investing in Africa, including increasing investor awareness and regulatory support.</p>
      <h3 class="text-2xl font-bold mt-8 mb-4">ESG Integration in Practice:</h3>
      <p>We provide practical guidance on how to integrate ESG factors into the investment process, from screening and due diligence, to engagement and reporting.</p>
    `,
  },
];

const InsightDetailPage = () => {
  const { id } = useParams();
  const insight = insights.find((i) => i.id === id);

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Insight not found.</p>
      </div>
    );
  }

  const otherInsights = insights.filter((i) => i.id !== insight.id);

  const handleDownload = () => {
    if (insight) {
      const blob = new Blob([insight.content], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${insight.id}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article>
                <header className="mb-12">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="font-medium text-primary">{insight.category}</span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">{insight.title}</h1>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{insight.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={insight.author.avatar} alt={insight.author.name} />
                        <AvatarFallback>{insight.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{insight.author.name}</span>
                    </div>
                    <span className="hidden md:block">· {insight.readTime}</span>
                  </div>
                </header>

                <img src={insight.image} alt={insight.title} className="w-full h-auto rounded-lg shadow-lg mb-12" />

                <div
                  className="prose prose-lg max-w-none mx-auto text-foreground/90"
                  dangerouslySetInnerHTML={{ __html: insight.content }}
                />
              </article>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-28">
                {/* Share Section */}
                <Card className="p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Share this Insight</h3>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>

                {/* Download Section */}
                <Card className="p-6 mb-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Download Full Report</h3>
                  <Button
                    onClick={handleDownload}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download PDF
                  </Button>
                </Card>

                {/* Other Insights */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Other Insights</h3>
                  <div className="space-y-6">
                    {otherInsights.map((item) => (
                      <Link to={`/insights/${item.id}`} key={item.id} className="block group">
                        <p className="font-semibold text-primary group-hover:underline mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );


};

export default InsightDetailPage;