
import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  
  // Determine if we're in dark mode (including system preference)
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getLabel = () => {
    if (theme === "light") return "Mode clair"
    if (theme === "dark") return "Mode sombre"
    return "Mode système"
  }

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark 
          ? "bg-zen-gray-dark border border-zen-coral-dark" 
          : "bg-zen-warm border border-zen-coral",
        className
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label={`Changer le thème - ${getLabel()}`}
      title={getLabel()}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "transform translate-x-0 bg-zen-red-dark" 
              : "transform translate-x-8 bg-zen-red"
          )}
        >
          {isDark ? (
            <Moon 
              className="w-4 h-4 text-zen-warm-dark" 
              strokeWidth={1.5}
            />
          ) : (
            <Sun 
              className="w-4 h-4 text-zen-warm" 
              strokeWidth={1.5}
            />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark 
              ? "bg-transparent" 
              : "transform -translate-x-8"
          )}
        >
          {isDark ? (
            <Sun 
              className="w-4 h-4 text-zen-coral-dark" 
              strokeWidth={1.5}
            />
          ) : (
            <Moon 
              className="w-4 h-4 text-zen-gray" 
              strokeWidth={1.5}
            />
          )}
        </div>
      </div>
    </div>
  )
}
