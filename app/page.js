"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Server, Zap } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Modern Enterprise Java",
    description: "Learn Jakarta EE, the evolution of Java EE for building robust enterprise applications.",
  },
  {
    icon: Server,
    title: "Servlet & JSP",
    description: "Master web components with Jakarta Servlets and JavaServer Pages for dynamic web apps.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Connect to databases using JDBC with PreparedStatements for secure data operations.",
  },
  {
    icon: Zap,
    title: "Production Ready",
    description: "Deploy your applications on Apache Tomcat and other Jakarta-compatible servers.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Master{" "}
              <span className="bg-gradient-to-r from-[#f31500] to-[#f98200] bg-clip-text text-transparent">
                Jakarta EE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
              Your complete guide to learning Jakarta EE from scratch. Build enterprise-grade Java applications with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/setup">
                <motion.button
                  className="px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2 justify-center"
                  style={{ backgroundColor: "#f31500" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/crud">
                <motion.button
                  className="px-8 py-4 rounded-lg font-semibold border-2 flex items-center gap-2 justify-center"
                  style={{ borderColor: "#f98200", color: "#f98200" }}
                  whileHover={{ scale: 1.05, backgroundColor: "#f98200", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View CRUD Example
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Jakarta EE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">What is Jakarta EE?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Jakarta EE</strong> (formerly Java EE) is a set of specifications
                that extend Java SE with enterprise features for building large-scale, multi-tiered, scalable, and
                secure network applications.
              </p>
              <p>
                It's widely used in industries like finance, healthcare, e-commerce, and telecommunications for building
                mission-critical applications that require high reliability, security, and performance.
              </p>
              <p>
                Jakarta EE provides a robust platform with standardized APIs for web services, persistence, messaging,
                transactions, and more - making it the go-to choice for enterprise Java development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Learn Jakarta EE?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Build powerful enterprise applications with industry-standard technologies
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-card border border-border hover:border-[#f31500] transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#f31500" }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Follow our step-by-step guides to become a Jakarta EE developer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "1. Get Tools", href: "/tools", description: "Download and install required development tools" },
              { title: "2. Setup Project", href: "/setup", description: "Create your first Jakarta EE project" },
              { title: "3. Build CRUD App", href: "/crud", description: "Learn with a complete example application" },
            ].map((step, index) => (
              <Link key={index} href={step.href}>
                <motion.div
                  className="p-6 rounded-xl bg-card border border-border hover:border-[#f98200] transition-all h-full"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#f31500" }}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  <div className="mt-4 flex items-center gap-2" style={{ color: "#f98200" }}>
                    <span className="font-semibold">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
