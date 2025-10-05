"use client"

import { motion } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"

const tools = [
  {
    name: "IntelliJ IDEA",
    purpose: "Powerful Java IDE with excellent Jakarta EE support",
    version: "2024.3 or later (Community or Ultimate)",
    downloadUrl: "https://www.jetbrains.com/idea/download/",
    description:
      "IntelliJ IDEA provides intelligent code completion, refactoring tools, and built-in support for Maven, Tomcat, and Jakarta EE development.",
    color: "#f31500",
  },
  {
    name: "JDK (Java Development Kit)",
    purpose: "Java runtime and development tools",
    version: "JDK 17 or JDK 21 (LTS versions recommended)",
    downloadUrl: "https://adoptium.net/",
    description:
      "The Java Development Kit includes the Java compiler, runtime environment, and essential libraries. Jakarta EE 10+ requires Java 11 or higher.",
    color: "#f98200",
  },
  {
    name: "Apache Tomcat",
    purpose: "Servlet container for running Jakarta web applications",
    version: "Tomcat 10.1.x (supports Jakarta EE 10)",
    downloadUrl: "https://tomcat.apache.org/download-10.cgi",
    description:
      "Apache Tomcat is a lightweight, open-source servlet container that implements Jakarta Servlet, JSP, and WebSocket specifications.",
    color: "#f31500",
  },
  {
    name: "Apache Maven",
    purpose: "Build automation and dependency management",
    version: "Maven 3.9.x or later",
    downloadUrl: "https://maven.apache.org/download.cgi",
    description:
      "Maven simplifies project builds, manages dependencies, and provides a standard project structure for Jakarta EE applications.",
    color: "#f98200",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Essential{" "}
            <span className="bg-gradient-to-r from-[#f31500] to-[#f98200] bg-clip-text text-transparent">
              Development Tools
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Download and install these tools to start building Jakarta EE applications. Each tool plays a crucial role
            in your development workflow.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl bg-card border border-border hover:border-[#f31500] transition-all"
            >
              {/* Tool Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: tool.color }}>
                    {tool.name}
                  </h2>
                  <p className="text-sm font-medium text-muted-foreground">{tool.purpose}</p>
                </div>
                <Download className="w-6 h-6 text-muted-foreground" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-4">{tool.description}</p>

              {/* Version */}
              <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm font-semibold text-foreground mb-1">Recommended Version:</p>
                <p className="text-foreground font-mono text-sm">{tool.version}</p>
              </div>

              {/* Download Button */}
              <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="w-full px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2"
                  style={{ backgroundColor: tool.color }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  Download {tool.name}
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Installation Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-xl bg-muted/30 border border-border"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#f31500" }}>
            Installation Tips
          </h3>
          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-bold text-foreground">1.</span>
              <span>
                <strong className="text-foreground">Install JDK first</strong> - All other tools depend on Java being
                installed. Verify with{" "}
                <code className="px-2 py-1 rounded bg-muted font-mono text-sm">java -version</code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-foreground">2.</span>
              <span>
                <strong className="text-foreground">Set JAVA_HOME</strong> - Configure the JAVA_HOME environment
                variable to point to your JDK installation directory
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-foreground">3.</span>
              <span>
                <strong className="text-foreground">Add Maven to PATH</strong> - After installing Maven, add its bin
                directory to your system PATH to use{" "}
                <code className="px-2 py-1 rounded bg-muted font-mono text-sm">mvn</code> commands
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-foreground">4.</span>
              <span>
                <strong className="text-foreground">Configure Tomcat in IntelliJ</strong> - Add Tomcat as an application
                server in IntelliJ IDEA settings for easy deployment
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
