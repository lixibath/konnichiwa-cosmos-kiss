const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        {/* Animated Broom SVG */}
        <div className="relative w-32 h-32 mx-auto">
          <svg
            className="animate-sweep"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Broom Handle */}
            <line
              x1="50"
              y1="20"
              x2="50"
              y2="60"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Broom Head */}
            <path
              d="M 35 60 L 50 75 L 65 60"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="hsl(var(--primary) / 0.2)"
            />
            
            {/* Bristles */}
            <line x1="40" y1="65" x2="38" y2="80" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.7" />
            <line x1="45" y1="68" x2="43" y2="83" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.7" />
            <line x1="50" y1="70" x2="48" y2="85" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.8" />
            <line x1="55" y1="68" x2="57" y2="83" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.7" />
            <line x1="60" y1="65" x2="62" y2="80" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.7" />
          </svg>
          
          {/* Sparkle effects */}
          <div className="absolute top-0 right-0 animate-ping">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="hsl(var(--primary))" opacity="0.6">
              <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8L10 0Z" />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Cleaning Up...
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
