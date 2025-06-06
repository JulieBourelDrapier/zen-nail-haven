
import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-4 w-4" />
    }
    return <Sun className="h-4 w-4" />
  }

  const getLabel = () => {
    if (theme === "light") return "Mode clair"
    if (theme === "dark") return "Mode sombre"
    return "Mode système"
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-zen-sage/10 dark:bg-zen-sage-dark/20 hover:bg-zen-sage/20 dark:hover:bg-zen-sage-dark/30 transition-all duration-300 group"
      aria-label={`Changer le thème - ${getLabel()}`}
      title={getLabel()}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {getIcon()}
      </div>
    </button>
  )
}
