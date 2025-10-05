"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="w-5 h-5 text-foreground" /> : <Sun className="w-5 h-5 text-foreground" />}
    </motion.button>
  )
}
