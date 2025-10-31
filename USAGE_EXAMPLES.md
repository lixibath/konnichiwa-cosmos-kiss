# Usage Examples - Performance Components

Quick reference guide for using performance optimization components.

## Loading Component

Display animated loading screen during page transitions:

```tsx
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { lazy } from "react";

const MyPage = lazy(() => import("./pages/MyPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MyPage />
    </Suspense>
  );
}
```

## Skeleton Cards

Show loading skeletons while fetching data:

```tsx
import SkeletonCard from "@/components/SkeletonCard";
import { useQuery } from "@tanstack/react-query";

function TestimonialsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} variant="testimonial" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(testimonial => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
}
```

### Available Skeleton Variants
- `default` - Generic content
- `testimonial` - Testimonial cards with avatar
- `service` - Service cards with image
- `pricing` - Pricing cards with features list

## OptimizedImage

For images imported as ES6 modules (preferred method):

```tsx
import OptimizedImage from "@/components/OptimizedImage";
import heroImage from "@/assets/hero-office-cleaning.jpg";
import serviceImage from "@/assets/service-deep-cleaning.jpg";

function HeroSection() {
  return (
    <div>
      {/* Hero image - load immediately */}
      <OptimizedImage
        src={heroImage}
        alt="Professional office cleaning services"
        priority={true}
        className="w-full h-96 rounded-lg"
      />

      {/* Below-the-fold image - lazy load */}
      <OptimizedImage
        src={serviceImage}
        alt="Deep cleaning service"
        className="w-full h-64 rounded-lg mt-8"
      />
    </div>
  );
}
```

## LazyImage

For external image URLs:

```tsx
import LazyImage from "@/components/LazyImage";

function Gallery() {
  const images = [
    "https://example.com/gallery1.jpg",
    "https://example.com/gallery2.jpg",
    // ... more images
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((url, index) => (
        <LazyImage
          key={index}
          src={url}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-64 rounded-lg object-cover"
          placeholderClassName="bg-muted"
        />
      ))}
    </div>
  );
}
```

## Route-based Code Splitting

Always use lazy loading for route components:

```tsx
// App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@/components/Loading";

// ❌ DON'T - Regular imports load everything upfront
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

// ✅ DO - Lazy load each route
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

## Combined Example - Optimized Page

Here's a complete example of an optimized page component:

```tsx
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import OptimizedImage from "@/components/OptimizedImage";
import SkeletonCard from "@/components/SkeletonCard";
import heroImage from "@/assets/hero.jpg";

function ServicesPage() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices
  });

  return (
    <div className="min-h-screen">
      {/* Hero with priority loading */}
      <section className="relative h-96">
        <OptimizedImage
          src={heroImage}
          alt="Our services"
          priority={true}
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      {/* Services grid with loading state */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {isLoading ? (
            // Show skeletons while loading
            [...Array(6)].map((_, i) => (
              <SkeletonCard key={i} variant="service" />
            ))
          ) : (
            // Show actual content
            services?.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

// Individual service card component
function ServiceCard({ image, title, description }: Service) {
  return (
    <div className="bg-card rounded-lg overflow-hidden">
      {/* Lazy load service images */}
      <OptimizedImage
        src={image}
        alt={title}
        className="w-full h-48"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default ServicesPage;
```

## Best Practices Summary

1. **Always lazy load routes** - Use `React.lazy()` for all page components
2. **Prioritize hero images** - Set `priority={true}` for above-the-fold images
3. **Show loading states** - Use skeletons instead of spinners for better UX
4. **Batch similar components** - Use the same skeleton variant for similar content
5. **Test on slow connections** - Use Chrome DevTools to throttle network
6. **Monitor bundle size** - Run `npm run build` and check output sizes

## Performance Checklist

Before deploying, ensure:

- [ ] All routes use `lazy()` imports
- [ ] Hero images have `priority={true}`
- [ ] Below-fold images use lazy loading
- [ ] Loading states are implemented
- [ ] Fonts are preloaded in `index.html`
- [ ] Bundle size is under 200KB (initial)
- [ ] Lighthouse score > 90

## Troubleshooting

### Images not loading
```tsx
// Check the import path
import image from "@/assets/image.jpg"; // ✅ Correct
import image from "../assets/image.jpg"; // ❌ Avoid relative paths

// Verify the image exists
console.log(image); // Should output a URL string
```

### Suspense boundary errors
```tsx
// ❌ Wrong - Suspense inside lazy component
function MyPage() {
  return <Suspense>...</Suspense>;
}

// ✅ Correct - Suspense wraps lazy component
<Suspense fallback={<Loading />}>
  <MyPage />
</Suspense>
```

### Skeleton doesn't match content
```tsx
// Make skeleton structure similar to actual content
<SkeletonCard variant="testimonial" /> // For testimonials
<SkeletonCard variant="service" />     // For service cards
<SkeletonCard variant="pricing" />     // For pricing tables
```

## Additional Resources

- [React.lazy() Documentation](https://react.dev/reference/react/lazy)
- [Suspense Documentation](https://react.dev/reference/react/Suspense)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
- [Core Web Vitals](https://web.dev/vitals/)
