"use client"

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";


export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            {
                theme === "light" ? <Button className="hover:bg-muted-foreground" variant="ghost" size="icon" onClick={() => setTheme("dark")}>
                    <Sun style={{ stroke: `hsl(var(--background))` }} />
                </Button> :
                    <Button variant="ghost" size="icon" className="hover:bg-muted-foreground" onClick={() => setTheme("light")}>
                        <Moon style={{ stroke: `hsl(var(--background))` }} />
                    </Button>
            }
        </>
    )
}