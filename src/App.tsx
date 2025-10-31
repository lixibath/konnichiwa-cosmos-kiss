import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Menu } from "lucide-react";
import Loading from "@/components/Loading";
import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import { PriceCalculator } from "@/components/PriceCalculator";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Residential = lazy(() => import("./pages/Residential"));
const Commercial = lazy(() => import("./pages/Commercial"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ServiceArea = lazy(() => import("./pages/ServiceArea"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Blog Articles
const Article1 = lazy(() => import("./pages/blog/Article1"));
const Article2 = lazy(() => import("./pages/blog/Article2"));
const Article3 = lazy(() => import("./pages/blog/Article3"));
const Article4 = lazy(() => import("./pages/blog/Article4"));
const Article5 = lazy(() => import("./pages/blog/Article5"));
const Article6 = lazy(() => import("./pages/blog/Article6"));
const Article7 = lazy(() => import("./pages/blog/Article7"));
const Article8 = lazy(() => import("./pages/blog/Article8"));
const Article9 = lazy(() => import("./pages/blog/Article9"));
const Article10 = lazy(() => import("./pages/blog/Article10"));
const Article11 = lazy(() => import("./pages/blog/Article11"));
const Article12 = lazy(() => import("./pages/blog/Article12"));
const Article13 = lazy(() => import("./pages/blog/Article13"));
const Article14 = lazy(() => import("./pages/blog/Article14"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 items-center justify-between px-4">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground transition-colors p-2 rounded-md">
                      <Menu className="h-5 w-5" />
                    </SidebarTrigger>
                    <span className="font-heading font-bold text-lg">MJ DAVISON CLEANING</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a 
                      href="tel:+19294624627" 
                      className="hidden sm:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      <span>📞</span>
                      (929) 462-4627
                    </a>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/residential" element={<Residential />} />
                    <Route path="/commercial" element={<Commercial />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/service-area" element={<ServiceArea />} />
                    <Route path="/why-us" element={<WhyUs />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/blog/article-1" element={<Article1 />} />
                    <Route path="/blog/article-2" element={<Article2 />} />
                    <Route path="/blog/article-3" element={<Article3 />} />
                    <Route path="/blog/article-4" element={<Article4 />} />
                    <Route path="/blog/article-5" element={<Article5 />} />
                    <Route path="/blog/article-6" element={<Article6 />} />
                    <Route path="/blog/article-7" element={<Article7 />} />
                    <Route path="/blog/article-8" element={<Article8 />} />
                    <Route path="/blog/article-9" element={<Article9 />} />
                    <Route path="/blog/article-10" element={<Article10 />} />
                    <Route path="/blog/article-11" element={<Article11 />} />
                    <Route path="/blog/article-12" element={<Article12 />} />
                    <Route path="/blog/article-13" element={<Article13 />} />
                    <Route path="/blog/article-14" element={<Article14 />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
          </div>
          <BackToTop />
          <PriceCalculator />
          <Toaster />
          <Sonner />
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
