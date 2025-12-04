# 🚀 TypeScript Basics & Testing Playground

A hands-on learning project exploring **TypeScript fundamentals**.
This exercise follows a *test-driven development (TDD)* approach using **Jest**, focusing on understanding JavaScript/TypeScript core concepts through structured learning tests.

Built as part of the **Web Engineering 1** course, but written and organized in a way that is fully reusable and industry-ready.

---

## 📌 Overview

This repository demonstrates:

* ✔ **Type conversions** (string/number/boolean)
* ✔ **Static utility class implementation**
* ✔ **Deep equality behavior in JS/TS**
* ✔ **Comparison of `==`, `===`, `Object.is`, `toBe`, `toEqual`, `toStrictEqual`**
* ✔ **Quiz-style exercises** to internalize JS operators and expressions
* ✔ **High test coverage (95%+)** as required by the assignment

The project combines TypeScript fundamentals with hands-on TDD — a skill highly valued in modern software development.

---

## ✨ Key Features

* **🔧 Static Conversions Class**
  Convert any value to `number`, `string`, or `boolean` using idiomatic one-line implementations.

* **🧪 Extensive Test Suite**
  Organized learning tests covering:

  * Type coercion
  * Equality quirks (NaN, -0, undefined, null, strings vs numbers)
  * Operator behavior
  * Jest matchers & contrasts

* **❓ Quiz System for Operators**
  A custom matcher (`answer()`) is used to validate operator outcomes in a quiz format.

* **📈 Code Coverage Requirement: 95%+**
  Achieved through disciplined TDD.

* **🧹 Clean, simple, well-structured TypeScript**
  Following best practices for naming, organization, and edge-case handling.

---

## 📂 Folder Structure

```
/src
  ├── conversions.ts   # Static class for type transformations
  ├── equals.ts        # Utility functions for equality exploration
  └── quiz.ts          # Operator/expressions quiz functions

/tests
  ├── conversions.test.ts  # Tests for type conversions
  ├── equals.test.ts       # Tests for equality behavior
  └── quiz.test.ts         # TDD quiz with custom "answer" matcher
```

---

## 🧪 Testing & Coverage

This project uses **Jest** as a testing framework.

### Run test suite:

```bash
npm test
```

### Run with coverage:

```bash
npm test -- --coverage
```

Expected (depending on your implementation):

```
Statements: 95%+
Branches:   95%+
Functions:  95%+
Lines:      95%+
```

---

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

---

## 🧠 Learning Goals

This project helped practice and understand:

* Core JavaScript/TypeScript types
* Implicit and explicit type coercion
* Equality vs identity (`==` vs `===` vs `Object.is`)
* Operator precedence & evaluation
* Writing clean, isolated TDD tests
* Implementing concise utility functions
* Understanding Jest matchers deeply
* Maintaining high coverage in TypeScript projects

---

## 📝 Tech Stack

* **TypeScript**
* **Node.js**
* **Jest** (testing)
* **Custom Jest matchers**
* **tsc** for type checking & transpilation

---

## 📘 Course Reference

This project is part of **Web Engineering 1 (BHT)** but is written in a way suitable for showcasing TypeScript skills to employers.
