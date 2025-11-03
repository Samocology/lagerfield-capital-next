import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const insights = [
  {
    id: "2024-q4-market-outlook",
    title: "2024 Q4 Market Outlook: Navigating Economic Headwinds",
    category: "Market Analysis",
    date: "October 15, 2024",
    excerpt: "Our comprehensive analysis of market conditions and investment strategies for the final quarter of 2024...",
    readTime: "5 min read",
    image: "/src/assets/hero-financial.jpg",
  },
  {
    id: "future-of-fixed-income-nigeria",
    title: "The Future of Fixed Income Investing in Nigeria",
    category: "Investment Strategy",
    date: "October 8, 2024",
    excerpt: "Exploring opportunities and challenges in Nigeria's fixed income market amid changing monetary policy...",
    readTime: "7 min read",
    image: "/src/assets/services-bg.jpg",
  },
  {
    id: "esg-investing-trends-africa",
    title: "ESG Investing: Growing Trends in African Markets",
    category: "Sustainable Finance",
    date: "September 30, 2024",
    excerpt: "How Environmental, Social, and Governance factors are reshaping investment decisions across the continent...",
    readTime: "6 min read",
    image: "/src/assets/values-bg.jpg",
  },
  {
    id: "nigeria-fintech-revolution",
    title: "The Fintech Revolution in Nigeria: A Comprehensive Overview",
    category: "Technology",
    date: "September 22, 2024",
    excerpt: "An in-depth look at the fintech landscape in Nigeria, its key players, and future prospects...",
    readTime: "8 min read",
    image: "/src/assets/team-hero.jpg",
  },
  {
    id: "private-equity-in-africa",
    title: "Private Equity in Africa: A Resilient and Growing Market",
    category: "Private Equity",
    date: "September 15, 2024",
    excerpt: "Analyzing the trends, challenges, and opportunities in the African private equity market...",
    readTime: "6 min read",
    image: "/src/assets/about-us.jpg",
  },
  {
    id: "impact-of-cbn-policies",
    title: "The Impact of CBN's Monetary Policies on the Nigerian Economy",
    category: "Economic Analysis",
    date: "September 5, 2024",
    excerpt: "A critical assessment of the Central Bank of Nigeria's recent monetary policy decisions...",
    readTime: "7 min read",
    image: "/src/assets/team-member-1.jpg",
  },
];

export const Insights = () => {
  const [visibleInsights, setVisibleInsights] = useState(3);

  const showMoreInsights = () => {
    setVisibleInsights(insights.length);
  };

  return (
    <section id="insights" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Market Insights & Analysis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our expert analysis and perspectives on capital markets, 
            investment trends, and economic developments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.slice(0, visibleInsights).map((insight, index) => (
            <Link to={`/insights/${insight.id}`} key={index}>
              <Card 
                className="group bg-card border-border hover:border-secondary hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in flex flex-col h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="h-48 overflow-hidden">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap">
                    <div className="flex items-center gap-1 bg-secondary/10 px-3 py-1 rounded-full">
                      <Calendar className="h-3.5 w-3.5 text-secondary" />
                      <span className="font-medium text-secondary">{insight.date}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      <span className="font-medium text-primary">{insight.category}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-4 text-primary group-hover:text-secondary transition-colors duration-300 leading-tight flex-grow">
                    {insight.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-6">
                    {insight.excerpt}
                  </CardDescription>
                  
                  <div className="mt-auto">
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary group-hover:text-secondary font-semibold text-base group-hover:translate-x-2 transition-all duration-300"
                    >
                      Read Full Analysis
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {visibleInsights < insights.length && (
          <div className="text-center mt-16 animate-fade-in">
            <Button 
              onClick={showMoreInsights}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              View All Insights
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
