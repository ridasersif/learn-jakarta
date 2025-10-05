"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { motion } from "framer-motion"

export default function CodeBlock({ code, language = "java", filename = "" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-border bg-muted/30">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
        <span className="text-sm font-medium text-muted-foreground">{filename || language}</span>
        <motion.button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 rounded-md bg-background hover:bg-accent transition-colors text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Code Content */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground leading-relaxed">{code}</code>
      </pre>
    </div>
  )
}
