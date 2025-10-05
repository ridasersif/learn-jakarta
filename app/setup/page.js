"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    title: "Create Maven Project in IntelliJ",
    description: "Start by creating a new Maven project with Jakarta EE support",
  },
  {
    title: "Configure pom.xml",
    description: "Add Jakarta EE dependencies to your project",
  },
  {
    title: "Create Hello World Servlet",
    description: "Build your first servlet to handle HTTP requests",
  },
  {
    title: "Configure Tomcat",
    description: "Set up Tomcat server in IntelliJ for deployment",
  },
  {
    title: "Run Your Application",
    description: "Deploy and test your first Jakarta EE application",
  },
]

export default function SetupPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f31500] to-[#f98200] bg-clip-text text-transparent">
              Project Setup
            </span>{" "}
            Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Follow these step-by-step instructions to create your first Jakarta EE project in IntelliJ IDEA
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "#f31500" }}
                >
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-foreground hidden lg:block">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#f31500" }}
            >
              1
            </div>
            <h2 className="text-3xl font-bold">Create Maven Project in IntelliJ</h2>
          </div>
          <div className="ml-13 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Open IntelliJ IDEA and create a new Maven project with the following settings:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>File → New → Project</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Select "Maven Archetype" from the left panel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>
                  Name: <code className="px-2 py-1 rounded bg-muted font-mono text-sm">jakarta-hello-world</code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>
                  GroupId: <code className="px-2 py-1 rounded bg-muted font-mono text-sm">com.example</code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>
                  ArtifactId: <code className="px-2 py-1 rounded bg-muted font-mono text-sm">jakarta-hello-world</code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Archetype: maven-archetype-webapp</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Step 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#f31500" }}
            >
              2
            </div>
            <h2 className="text-3xl font-bold">Configure pom.xml</h2>
          </div>
          <div className="ml-13 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Add Jakarta EE dependencies to your{" "}
              <code className="px-2 py-1 rounded bg-muted font-mono text-sm">pom.xml</code> file:
            </p>
            <CodeBlock
              filename="pom.xml"
              language="xml"
              code={`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>jakarta-hello-world</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
         Jakarta Servlet API 
        <dependency>
            <groupId>jakarta.servlet</groupId>
            <artifactId>jakarta.servlet-api</artifactId>
            <version>6.0.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>

    <build>
        <finalName>jakarta-hello-world</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.2</version>
            </plugin>
        </plugins>
    </build>
</project>`}
            />
          </div>
        </motion.section>

        {/* Step 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#f31500" }}
            >
              3
            </div>
            <h2 className="text-3xl font-bold">Create Hello World Servlet</h2>
          </div>
          <div className="ml-13 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Create a new Java class in{" "}
              <code className="px-2 py-1 rounded bg-muted font-mono text-sm">src/main/java/com/example/servlet/</code>:
            </p>
            <CodeBlock
              filename="HelloServlet.java"
              language="java"
              code={`package com.example.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "HelloServlet", urlPatterns = {"/hello"})
public class HelloServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");
        
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Hello Jakarta EE</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Hello from Jakarta EE!</h1>");
        out.println("<p>Your first servlet is working correctly.</p>");
        out.println("</body>");
        out.println("</html>");
    }
}`}
            />
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm font-semibold text-foreground mb-2">Key Points:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• The @WebServlet annotation maps the servlet to the /hello URL</li>
                <li>• doGet() handles HTTP GET requests</li>
                <li>• PrintWriter sends HTML response to the client</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Step 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#f31500" }}
            >
              4
            </div>
            <h2 className="text-3xl font-bold">Configure Tomcat</h2>
          </div>
          <div className="ml-13 space-y-4">
            <p className="text-muted-foreground leading-relaxed">Set up Apache Tomcat in IntelliJ IDEA:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Run → Edit Configurations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Click "+" and select "Tomcat Server → Local"</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Configure Tomcat home directory (where you installed Tomcat)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Go to "Deployment" tab → Click "+" → Select "Artifact" → Choose your WAR file</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#f98200" }} />
                <span>Set Application context to "/" or "/jakarta-hello-world"</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Step 5 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#f31500" }}
            >
              5
            </div>
            <h2 className="text-3xl font-bold">Run Your Application</h2>
          </div>
          <div className="ml-13 space-y-4">
            <p className="text-muted-foreground leading-relaxed">Build and deploy your application:</p>
            <CodeBlock
              filename="Terminal Commands"
              language="bash"
              code={`# Build the project with Maven
mvn clean package

# The WAR file will be created in target/jakarta-hello-world.war`}
            />
            <p className="text-muted-foreground leading-relaxed">
              Click the green "Run" button in IntelliJ to start Tomcat and deploy your application.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Open your browser and navigate to:{" "}
              <code className="px-2 py-1 rounded bg-muted font-mono text-sm">http://localhost:8080/hello</code>
            </p>
            <div className="p-6 rounded-lg border-2 border-[#f98200] bg-muted/30">
              <p className="font-semibold text-foreground mb-2">Success!</p>
              <p className="text-muted-foreground">
                You should see "Hello from Jakarta EE!" displayed in your browser. Congratulations on creating your
                first Jakarta EE application!
              </p>
            </div>
          </div>
        </motion.section>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-gradient-to-br from-[#f31500]/10 to-[#f98200]/10 border border-[#f31500]/20"
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#f31500" }}>
            Next Steps
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Now that you have a working Jakarta EE project, you're ready to build more complex applications. Check out
            our CRUD tutorial to learn how to create a full database-driven application.
          </p>
          <a href="/crud">
            <motion.button
              className="px-6 py-3 rounded-lg font-semibold text-white"
              style={{ backgroundColor: "#f31500" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn CRUD Operations →
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
