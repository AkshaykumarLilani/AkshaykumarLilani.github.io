"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render a placeholder or null to avoid hydration mismatch
        // or a default icon if preferred, but null is safest for theme switches
        return <Button variant="ghost" size="icon" disabled className="h-10 w-10" />;
    }

    const isLightMode = theme === "light";
    const toggleTheme = () => setTheme(isLightMode ? "dark" : "light");
    const IconComponent = isLightMode ? Sun : Moon;
    const label = isLightMode ? "Switch to dark mode" : "Switch to light mode";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={label}
            // Using standard shadcn/ui hover for ghost buttons
            // className="hover:bg-accent hover:text-accent-foreground"
            // Or if you prefer your custom hover, ensure icon contrast is good:
            className="text-foreground/70 hover:text-foreground hover:bg-muted/50 dark:text-foreground/70 dark:hover:text-foreground dark:hover:bg-muted/50"

        >
            <IconComponent className="h-[1.2rem] w-[1.2rem]" /> {/* Or h-5 w-5 etc. */}
            {/* Removed inline style for stroke, icons will inherit color */}
        </Button>
    );
}