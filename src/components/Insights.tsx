import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const insights = [
  {
    title: "2024 Q4 Market Outlook: Navigating Economic Headwinds",
    category: "Market Analysis",
    date: "October 15, 2024",
    excerpt: "Our comprehensive analysis of market conditions and investment strategies for the final quarter of 2024...",
    readTime: "5 min read",
  },
  {
    title: "The Future of Fixed Income Investing in Nigeria",
    category: "Investment Strategy",
    date: "October 8, 2024",
    excerpt: "Exploring opportunities and challenges in Nigeria's fixed income market amid changing monetary policy...",
    readTime: "7 min read",
  },
  {
    title: "ESG Investing: Growing Trends in African Markets",
    category: "Sustainable Finance",
    date: "September 30, 2024",
    excerpt: "How Environmental, Social, and Governance factors are reshaping investment decisions across the continent...",
    readTime: "6 min read",
  },
];

export const Insights = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Market Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with our expert analysis on capital markets, investment strategies, 
              and economic trends
            </p>
          </div>
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary text-primary">
                    {insight.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {insight.date}
                  </span>
                  <span>{insight.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-3">
                  {insight.excerpt}
                </CardDescription>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                  Read More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
