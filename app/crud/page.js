"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { Database, Layers, Shield } from "lucide-react"

const architecture = [
  {
    icon: Layers,
    title: "Model (Entity)",
    description: "Java classes representing database tables",
  },
  {
    icon: Database,
    title: "DAO (Data Access)",
    description: "Handles database operations with JDBC",
  },
  {
    icon: Layers,
    title: "Service (Business Logic)",
    description: "Contains application business rules",
  },
  {
    icon: Layers,
    title: "Controller (Servlet)",
    description: "Handles HTTP requests and responses",
  },
]

export default function CRUDPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#f31500] to-[#f98200] bg-clip-text text-transparent">
              CRUD Application
            </span>{" "}
            Tutorial
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Build a complete Create, Read, Update, Delete application using Jakarta Servlets, JDBC, and MySQL
          </p>
        </motion.div>

        {/* Architecture Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Application Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecture.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f31500" }}
                >
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">{layer.title}</h3>
                <p className="text-sm text-muted-foreground">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Database Schema */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">1. Database Schema</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            First, create a MySQL database and a users table. This example demonstrates a simple user management system.
          </p>
          <CodeBlock
            filename="schema.sql"
            language="sql"
            code={`-- Create database
CREATE DATABASE IF NOT EXISTS jakarta_crud_db;
USE jakarta_crud_db;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (name, email, phone) VALUES
('John Doe', 'john.doe@example.com', '+1-555-0101'),
('Jane Smith', 'jane.smith@example.com', '+1-555-0102'),
('Bob Johnson', 'bob.johnson@example.com', '+1-555-0103');`}
          />
        </motion.section>

        {/* Model Class */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">2. Model Class (User.java)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Create a Java class to represent the User entity with getters and setters.
          </p>
          <CodeBlock
            filename="User.java"
            language="java"
            code={`package com.example.model;

import java.sql.Timestamp;

public class User {
    private int id;
    private String name;
    private String email;
    private String phone;
    private Timestamp createdAt;

    // Constructors
    public User() {}

    public User(String name, String email, String phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public User(int id, String name, String email, String phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
}`}
          />
        </motion.section>

        {/* Database Connection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">3. Database Connection (DatabaseConnection.java)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Create a utility class to manage database connections using JDBC.
          </p>
          <CodeBlock
            filename="DatabaseConnection.java"
            language="java"
            code={`package com.example.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/jakarta_crud_db";
    private static final String USER = "root";
    private static final String PASSWORD = "your_password";

    static {
        try {
            // Load MySQL JDBC Driver
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("MySQL JDBC Driver not found", e);
        }
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}`}
          />
          <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm font-semibold text-foreground mb-2">Don't forget to add MySQL dependency:</p>
            <CodeBlock
              filename="pom.xml (dependency)"
              language="xml"
              code={`<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.2.0</version>
</dependency>`}
            />
          </div>
        </motion.section>

        {/* DAO Class */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">4. DAO Class (UserDAO.java)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Implement data access operations using PreparedStatement to prevent SQL injection.
          </p>
          <CodeBlock
            filename="UserDAO.java"
            language="java"
            code={`package com.example.dao;

import com.example.model.User;
import com.example.util.DatabaseConnection;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {

    // CREATE - Insert new user
    public boolean insertUser(User user) {
        String sql = "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, user.getName());
            stmt.setString(2, user.getEmail());
            stmt.setString(3, user.getPhone());
            
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // READ - Get all users
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        String sql = "SELECT * FROM users ORDER BY id DESC";
        
        try (Connection conn = DatabaseConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            while (rs.next()) {
                User user = new User();
                user.setId(rs.getInt("id"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setPhone(rs.getString("phone"));
                user.setCreatedAt(rs.getTimestamp("created_at"));
                users.add(user);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return users;
    }

    // READ - Get user by ID
    public User getUserById(int id) {
        String sql = "SELECT * FROM users WHERE id = ?";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                User user = new User();
                user.setId(rs.getInt("id"));
                user.setName(rs.getString("name"));
                user.setEmail(rs.getString("email"));
                user.setPhone(rs.getString("phone"));
                user.setCreatedAt(rs.getTimestamp("created_at"));
                return user;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    // UPDATE - Update existing user
    public boolean updateUser(User user) {
        String sql = "UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, user.getName());
            stmt.setString(2, user.getEmail());
            stmt.setString(3, user.getPhone());
            stmt.setInt(4, user.getId());
            
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    // DELETE - Delete user by ID
    public boolean deleteUser(int id) {
        String sql = "DELETE FROM users WHERE id = ?";
        
        try (Connection conn = DatabaseConnection.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setInt(1, id);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}`}
          />
        </motion.section>

        {/* Servlet Controller */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">5. Servlet Controller (UserServlet.java)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Create a servlet to handle HTTP requests and coordinate between the view and DAO.
          </p>
          <CodeBlock
            filename="UserServlet.java"
            language="java"
            code={`package com.example.servlet;

import com.example.dao.UserDAO;
import com.example.model.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "UserServlet", urlPatterns = {"/users"})
public class UserServlet extends HttpServlet {
    
    private UserDAO userDAO;

    @Override
    public void init() {
        userDAO = new UserDAO();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String action = request.getParameter("action");
        
        if (action == null) {
            action = "list";
        }

        switch (action) {
            case "list":
                listUsers(request, response);
                break;
            case "edit":
                showEditForm(request, response);
                break;
            case "delete":
                deleteUser(request, response);
                break;
            default:
                listUsers(request, response);
                break;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String action = request.getParameter("action");

        if ("insert".equals(action)) {
            insertUser(request, response);
        } else if ("update".equals(action)) {
            updateUser(request, response);
        }
    }

    private void listUsers(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        List<User> users = userDAO.getAllUsers();
        request.setAttribute("users", users);
        request.getRequestDispatcher("/users.jsp").forward(request, response);
    }

    private void showEditForm(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        User user = userDAO.getUserById(id);
        request.setAttribute("user", user);
        request.getRequestDispatcher("/user-form.jsp").forward(request, response);
    }

    private void insertUser(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");

        User user = new User(name, email, phone);
        userDAO.insertUser(user);
        response.sendRedirect("users");
    }

    private void updateUser(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");

        User user = new User(id, name, email, phone);
        userDAO.updateUser(user);
        response.sendRedirect("users");
    }

    private void deleteUser(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        userDAO.deleteUser(id);
        response.sendRedirect("users");
    }
}`}
          />
        </motion.section>

        {/* Security Notes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#f31500]/10 to-[#f98200]/10 border border-[#f31500]/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8" style={{ color: "#f31500" }} />
              <h2 className="text-3xl font-bold">Security Best Practices</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-bold text-foreground mb-2">1. SQL Injection Prevention</h3>
                <p>
                  Always use <code className="px-2 py-1 rounded bg-muted font-mono text-sm">PreparedStatement</code>{" "}
                  instead of concatenating SQL strings. This prevents malicious SQL code from being executed.
                </p>
                <CodeBlock
                  filename="Good Practice"
                  language="java"
                  code={`// GOOD - Uses PreparedStatement
String sql = "SELECT * FROM users WHERE id = ?";
PreparedStatement stmt = conn.prepareStatement(sql);
stmt.setInt(1, userId);

// BAD - Vulnerable to SQL injection
String sql = "SELECT * FROM users WHERE id = " + userId;`}
                />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">2. XSS (Cross-Site Scripting) Prevention</h3>
                <p>
                  Always escape user input before displaying it in HTML. Use JSTL{" "}
                  <code className="px-2 py-1 rounded bg-muted font-mono text-sm">{"<c:out>"}</code> tag or manually
                  escape HTML characters.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">3. Input Validation</h3>
                <p>
                  Validate all user inputs on both client and server side. Check for required fields, email format,
                  length constraints, etc.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">4. Connection Management</h3>
                <p>
                  Always close database connections, statements, and result sets using try-with-resources to prevent
                  resource leaks.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Backend Files */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="p-8 rounded-xl bg-muted/30 border border-border">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f31500" }}>
              Complete Backend Example
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A complete, runnable Jakarta EE CRUD application is available in the{" "}
              <code className="px-2 py-1 rounded bg-muted font-mono text-sm">backend-jakarta/</code> folder of this
              project. It includes:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Complete source code with all classes shown above</li>
              <li>• Maven pom.xml with all dependencies</li>
              <li>• SQL schema and sample data scripts</li>
              <li>• JSP views for user interface</li>
              <li>• Detailed README with setup instructions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              See <code className="px-2 py-1 rounded bg-muted font-mono text-sm">backend-jakarta/README.md</code> for
              instructions on how to build and run the application with Maven and Tomcat.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
