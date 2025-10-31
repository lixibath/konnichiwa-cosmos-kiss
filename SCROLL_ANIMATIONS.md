# Scroll Animations Guide

## ScrollReveal Component

The `ScrollReveal` component adds smooth reveal animations when elements come into viewport.

### Basic Usage

```tsx
import ScrollReveal from "@/components/ScrollReveal";

function MyPage() {
  return (
    <div>
      <ScrollReveal>
        <h2>This fades in when scrolled into view</h2>
      </ScrollReveal>

      <ScrollReveal direction="left">
        <div>This slides in from the left</div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <p>This animates after 200ms delay</p>
      </ScrollReveal>
    </div>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | Content to animate |
| `className` | string | - | Additional CSS classes |
| `direction` | "up" \| "down" \| "left" \| "right" \| "fade" | "up" | Animation direction |
| `delay` | number | 0 | Delay in milliseconds |
| `threshold` | number | 0.1 | IntersectionObserver threshold |

### Animation Directions

```tsx
// Fade in from bottom (default)
<ScrollReveal direction="up">
  <Card>Content slides up</Card>
</ScrollReveal>

// Fade in from top
<ScrollReveal direction="down">
  <Card>Content slides down</Card>
</ScrollReveal>

// Fade in from left
<ScrollReveal direction="left">
  <Card>Content slides from left</Card>
</ScrollReveal>

// Fade in from right
<ScrollReveal direction="right">
  <Card>Content slides from right</Card>
</ScrollReveal>

// Just fade in (no slide)
<ScrollReveal direction="fade">
  <Card>Content fades in</Card>
</ScrollReveal>
```

### Staggered Animations

Create a sequence of animations with delays:

```tsx
function FeatureList() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <ScrollReveal 
          key={feature.id}
          direction="up"
          delay={index * 100} // Stagger by 100ms
        >
          <FeatureCard {...feature} />
        </ScrollReveal>
      ))}
    </div>
  );
}
```

### Threshold Control

Adjust when animation triggers (0-1):

```tsx
// Trigger when 10% visible (default)
<ScrollReveal threshold={0.1}>
  <Card>Animates early</Card>
</ScrollReveal>

// Trigger when 50% visible
<ScrollReveal threshold={0.5}>
  <Card>Animates halfway in</Card>
</ScrollReveal>

// Trigger when fully visible
<ScrollReveal threshold={1.0}>
  <Card>Animates when completely in view</Card>
</ScrollReveal>
```

## Smooth Scrolling

### Automatic Smooth Scroll

All anchor links scroll smoothly by default:

```tsx
// Automatically smooth scrolls
<a href="#pricing">Jump to Pricing</a>

// Target section
<section id="pricing">
  <h2>Our Pricing</h2>
</section>
```

### Programmatic Smooth Scroll

```tsx
import { useNavigate } from "react-router-dom";

function ScrollToSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div>
      <button onClick={scrollToTop}>
        Back to Top
      </button>
      <button onClick={() => scrollToSection("contact")}>
        Contact Section
      </button>
    </div>
  );
}
```

## Back to Top Button

Already implemented and included in `App.tsx`:

```tsx
import BackToTop from "@/components/BackToTop";

// Appears automatically after scrolling 300px
// Smooth scrolls to top when clicked
<BackToTop />
```

### Customization

```tsx
// BackToTop component uses these classes:
// - `fixed bottom-8 right-8` - Position
// - `z-50` - Above other content
// - `rounded-full` - Circular button
// - `shadow-lg` - Drop shadow

// You can extend it by wrapping or modifying:
<div className="custom-wrapper">
  <BackToTop />
</div>
```

## Best Practices

### 1. Don't Overuse Animations

```tsx
// ❌ Too many animations
<ScrollReveal>
  <ScrollReveal direction="left">
    <ScrollReveal direction="fade">
      <p>Overkill!</p>
    </ScrollReveal>
  </ScrollReveal>
</ScrollReveal>

// ✅ One animation per element
<ScrollReveal direction="up">
  <Card>
    <h3>Clean and simple</h3>
    <p>Content inside doesn't need animation</p>
  </Card>
</ScrollReveal>
```

### 2. Use Consistent Directions

```tsx
// ✅ Consistent pattern
<ScrollReveal direction="up">
  <FeatureCard />
</ScrollReveal>
<ScrollReveal direction="up" delay={100}>
  <FeatureCard />
</ScrollReveal>
<ScrollReveal direction="up" delay={200}>
  <FeatureCard />
</ScrollReveal>

// ❌ Chaotic directions
<ScrollReveal direction="up">...</ScrollReveal>
<ScrollReveal direction="left">...</ScrollReveal>
<ScrollReveal direction="down">...</ScrollReveal>
```

### 3. Respect Performance

```tsx
// ❌ Animating huge lists
{hugeArray.map(item => (
  <ScrollReveal key={item.id}>
    <Item />
  </ScrollReveal>
))}

// ✅ Limit animations to important elements
<ScrollReveal>
  <div>
    {hugeArray.map(item => (
      <Item key={item.id} />
    ))}
  </div>
</ScrollReveal>
```

### 4. Consider Accessibility

The CSS automatically respects `prefers-reduced-motion`:

```css
/* Already implemented in index.css */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users who prefer reduced motion will see instant reveals instead of animations.

## Example: Homepage Hero Section

```tsx
function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <h1 className="text-6xl font-bold mb-4">
            Professional Cleaning Services
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <p className="text-xl text-muted-foreground mb-8">
            Trusted since 2010 in Queens, NYC
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="flex gap-4">
            <Button size="lg">Get Free Quote</Button>
            <Button size="lg" variant="outline">
              Our Services
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

## Example: Features Grid

```tsx
const features = [
  { icon: Sparkles, title: "Deep Cleaning" },
  { icon: Shield, title: "Insured & Bonded" },
  { icon: Clock, title: "Flexible Schedule" },
  { icon: CheckCircle, title: "Satisfaction Guaranteed" }
];

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="fade">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="up"
              delay={index * 100}
              threshold={0.2}
            >
              <Card className="p-6 text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold">{feature.title}</h3>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Troubleshooting

### Animation not triggering

```tsx
// Check threshold - might be too high
<ScrollReveal threshold={0.1}> {/* Lower threshold */}
  <Content />
</ScrollReveal>

// Verify element is in viewport when expected
// Check browser console for IntersectionObserver support
```

### Animation too fast/slow

```tsx
// Adjust in ScrollReveal component or globally in CSS
.transition-all {
  transition-duration: 0.7s; // Adjust this value
}
```

### Multiple animations conflict

```tsx
// Don't nest ScrollReveal components
// Use one ScrollReveal per animated element
```

## Performance Tips

1. **Lazy load ScrollReveal** if not needed immediately:
```tsx
const ScrollReveal = lazy(() => import("@/components/ScrollReveal"));
```

2. **Limit to visible elements** - Don't animate everything

3. **Use `will-change` sparingly** - Already optimized in component

4. **Test on mobile** - Animations should be smooth on all devices

---

**Animation Duration**: 700ms  
**Easing**: ease-out  
**Trigger Distance**: 50px before viewport  
**Browser Support**: All modern browsers (uses IntersectionObserver)
