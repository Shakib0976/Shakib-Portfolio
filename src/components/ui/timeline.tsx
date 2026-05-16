"use client";
import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const timelineDotVariants = cva(
  "relative h-4 w-4 rounded-full z-10 flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "border-primary bg-black",
        secondary: "border-secondary bg-black",
        destructive: "border-destructive bg-black",
        outline: "",
      },
      hollow: {
        true: "border-2 bg-card",
        false: "border-2",
      },
    },
    compoundVariants: [
      { hollow: false, variant: "default", class: "bg-primary" },
      { hollow: false, variant: "secondary", class: "bg-secondary" },
      { hollow: false, variant: "destructive", class: "bg-destructive" },
      { hollow: false, variant: "outline", class: "bg-background" },
    ],
    defaultVariants: {
      variant: "default",
      hollow: false,
    },
  }
);

const timelineItemVariants = cva(
  "flex flex-col rounded-md transition-all p-4 shrink-0",
  {
    variants: {
      variant: {
        default: "bg-card border text-card-foreground shadow-sm",
        secondary: "bg-secondary text-secondary-foreground shadow-sm",
        destructive:
          "bg-destructive/10 border border-destructive/20 text-destructive-foreground shadow-sm",
        outline: "bg-transparent border shadow-sm",
      },
      noCards: {
        true: "border-none shadow-none bg-transparent",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      noCards: false,
    },
  }
);

const timelineBranchVariants = cva("absolute z-0", {
  variants: {
    variant: {
      default: "bg-gray-800 dark:bg-gray-200",
      secondary: "bg-secondary",
      destructive: "bg-destructive",
      outline: "bg-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const timelineLayoutVariants = cva("grid relative", {
  variants: {
    orientation: {
      horizontal: "grid-flow-col grid-rows-[min-content_2rem_min-content]",
      vertical: "grid-cols-[1fr_2rem_1fr] auto-rows-min",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const timelineItemContainerVariants = cva("flex relative snap-center", {
  variants: {
    orientation: {
      horizontal: "w-full justify-center",
      vertical: "h-full items-center",
    },
    side: {
      before: "",
      after: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", side: "before", class: "items-end" },
    { orientation: "horizontal", side: "after", class: "items-start" },
    { orientation: "vertical", side: "before", class: "justify-end" },
    { orientation: "vertical", side: "after", class: "justify-start" },
  ],
});

interface TimelineContextType {
  orientation: "horizontal" | "vertical";
  total: number;
  cardWidth: number;
  maxCardWidth: number;
  alternating: boolean;
  alignment: "top/left" | "bottom/right";
  noCards: boolean;
}

const TlCtxt = createContext<TimelineContextType | null>(null);

function useTimelineContext() {
  const context = useContext(TlCtxt);
  if (context === null) {
    throw new Error("Timeline components must be used within a Timeline component.");
  }
  return context;
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
  horizItemWidth?: number;
  horizItemSpacing?: number;
  vertItemSpacing?: number;
  vertItemMaxWidth?: number;
  alternating?: boolean;
  alignment?: "top/left" | "bottom/right";
  orientation?: "horizontal" | "vertical";
  noCards?: boolean;
}

export default function Timeline({
  children,
  className,
  horizItemWidth = 220,
  horizItemSpacing = 130,
  vertItemSpacing = 130,
  vertItemMaxWidth = 350,
  alternating = true,
  alignment = "top/left",
  orientation = "horizontal",
  noCards = false,
  ...props
}: TimelineProps) {
  const isVertical = orientation === "vertical";
  const safePadding = Math.max(0, (horizItemWidth - horizItemSpacing) / 2);
  const [verticalPadding, setVerticalPadding] = useState({ top: 0, bottom: 0 });
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (!isVertical || !listRef.current) {
      setVerticalPadding({ top: 0, bottom: 0 });
      return;
    }

    const computePadding = () => {
      const list = listRef.current;
      if (!list) return;
      const cards = list.querySelectorAll<HTMLElement>('[data-timeline-card="true"]');
      if (cards.length === 0) return;
      const firstHeight = cards[0].getBoundingClientRect().height;
      const lastHeight = cards[cards.length - 1].getBoundingClientRect().height;
      const top = Math.max(0, (firstHeight - vertItemSpacing) / 2);
      const bottom = Math.max(0, (lastHeight - vertItemSpacing) / 2);
      setVerticalPadding({ top, bottom });
    };

    computePadding();
    const observer = new ResizeObserver(() => computePadding());
    observer.observe(listRef.current);
    return () => observer.disconnect();
  }, [isVertical, vertItemSpacing, children]);

  const contextVal: TimelineContextType = {
    orientation,
    total: Children.count(children),
    cardWidth: horizItemWidth,
    maxCardWidth: vertItemMaxWidth,
    alternating,
    alignment,
    noCards,
  };

  return (
    <div
      className={cn(
        "flex h-full w-full p-4",
        isVertical ? "flex-col" : "flex-row justify-center overflow-x-auto",
        className
      )}
      role="list"
      aria-orientation={orientation}
      {...props}
    >
      <ul
        className={timelineLayoutVariants({ orientation })}
        style={
          isVertical
            ? {
                gridAutoRows: `${vertItemSpacing}px`,
                gridTemplateColumns: alternating
                  ? "1fr 2rem 1fr"
                  : alignment === "top/left"
                    ? "1fr 2rem"
                    : "2rem 1fr",
                paddingTop: `${verticalPadding.top}px`,
                paddingBottom: `${verticalPadding.bottom}px`,
              }
            : {
                gridAutoColumns: `${horizItemSpacing}px`,
                gridTemplateRows: alternating
                  ? "min-content 2rem min-content"
                  : alignment === "top/left"
                    ? "min-content 2rem"
                    : "2rem min-content",
                paddingLeft: `${safePadding}px`,
                paddingRight: `${safePadding}px`,
              }
        }
        ref={listRef}
      >
        <TlCtxt.Provider value={contextVal}>
          {Children.map(children, (child, index) =>
            React.isValidElement(child) ? cloneElement(child, { index } as any) : child
          )}
        </TlCtxt.Provider>
      </ul>
    </div>
  );
}

interface TimelineItemProps extends VariantProps<typeof timelineDotVariants> {
  children: ReactNode;
  className?: string;
  hollow?: boolean;
  index?: number;
}

export function TimelineItem({
  children,
  className,
  variant,
  hollow = false,
  index,
  ...props
}: TimelineItemProps) {
  if (index === undefined) {
    throw new Error("TimelineItem must be used as a direct child of Timeline.");
  }

  const {
    orientation,
    total,
    cardWidth,
    maxCardWidth,
    alternating,
    alignment,
    noCards,
  } = useTimelineContext();

  const isEven = index % 2 === 0;
  const isVertical = orientation === "vertical";
  const side = alternating
    ? isEven ? "before" : "after"
    : alignment === "top/left" ? "before" : "after";

  let gridStyle: React.CSSProperties = {};
  let lineStyle: React.CSSProperties = {};

  if (isVertical) {
    if (alternating) {
      gridStyle = { gridColumn: side === "before" ? 1 : 3, gridRow: index + 1 };
      lineStyle = { gridColumn: 2, gridRow: index + 1, height: "100%" };
    } else {
      if (side === "before") {
        gridStyle = { gridColumn: 1, gridRow: index + 1 };
        lineStyle = { gridColumn: 2, gridRow: index + 1, height: "100%" };
      } else {
        gridStyle = { gridColumn: 2, gridRow: index + 1 };
        lineStyle = { gridColumn: 1, gridRow: index + 1, height: "100%" };
      }
    }
  } else {
    if (alternating) {
      gridStyle = { gridColumn: index + 1, gridRow: side === "before" ? 1 : 3 };
      lineStyle = { gridColumn: index + 1, gridRow: 2, width: "100%" };
    } else {
      if (side === "before") {
        gridStyle = { gridColumn: index + 1, gridRow: 1 };
        lineStyle = { gridColumn: index + 1, gridRow: 2, width: "100%" };
      } else {
        gridStyle = { gridColumn: index + 1, gridRow: 2 };
        lineStyle = { gridColumn: index + 1, gridRow: 1, width: "100%" };
      }
    }
  }

  const branchStyle = isVertical
    ? alternating
      ? isEven ? "h-px w-4 left-0" : "h-px w-4 right-0"
      : alignment === "top/left" ? "h-px w-4 left-0" : "h-px w-4 right-0"
    : alternating
      ? isEven ? "w-px h-4 top-0" : "w-px h-4 bottom-0"
      : alignment === "top/left" ? "w-px h-4 top-0" : "w-px h-4 bottom-0";

  return (
    <>
      <li
        className={cn(timelineItemContainerVariants({ orientation, side }))}
        style={gridStyle}
        role="listitem"
      >
        <div
          style={isVertical ? { maxWidth: `${maxCardWidth}px` } : { width: `${cardWidth}px`, minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
          className={cn(timelineItemVariants({ variant: variant as any, noCards }), className)}
          data-timeline-card={true}
        >
          {children}
        </div>
      </li>
      <li className="relative flex items-center justify-center" style={lineStyle}>
        <div
          className={cn(
            "absolute bg-muted",
            index === 0 ? (isVertical ? "rounded-t-full" : "rounded-l-full") : "",
            index === total - 1 ? (isVertical ? "rounded-b-full" : "rounded-r-full") : "",
            isVertical ? "h-full w-1" : "w-full h-1"
          )}
        />
        <div className={cn(timelineBranchVariants({ variant: variant as any }), branchStyle)} />
        <div className={cn(timelineDotVariants({ variant: variant as any, hollow }))} />
      </li>
    </>
  );
}

export function TimelineItemDate({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("text-xs text-muted-foreground mb-1", className)}>{children}</span>;
}

export function TimelineItemTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("font-semibold", className)}>{children}</h3>;
}

export function TimelineItemDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-sm text-muted-foreground mt-2", className)}>{children}</p>;
}
