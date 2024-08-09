# Selenium-Automation: AUMS Feedback Automation

![AUMS](https://aumsam.amrita.edu/cas/images/logo.png)

## 🚀 Overview

Welcome to **Selenium-Automation** for the **Amrita University Management System (AUMS) - Feedback Automation**! This project is designed to simplify and automate the feedback submission process for AUMS using Selenium WebDriver. With this tool, you can seamlessly handle web forms, navigate iframes, and manage dynamic content—all without needing to manually interact with the browser.

## 🌟 Features

- **✨ Automated Feedback Submission**: Effortlessly fills out and submits feedback forms.
- **🔄 Dynamic Element Handling**: Smartly deals with elements that change or update dynamically.
- **🔲 Iframe Interaction**: Smoothly navigates and interacts within iframes.
- **🖥️ Headless Operation**: Executes tasks in the background without displaying the browser.
- **🛠️ Robust Error Handling**: Efficiently manages errors and ensures reliable operation.

## 📋 Prerequisites

Before you get started, make sure you have:

- **Python 3.x**: [Download Python](https://www.python.org/downloads/)
- **Selenium**: Install using pip:
  ```bash
  pip install selenium
  ```
- **Flask**: Install using pip:
  ```bash
  pip install Flask
  ```
- **ChromeDriver**: Ensure you have the ChromeDriver executable. [Download it here](https://sites.google.com/chromium.org/driver/).

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sarangs1621/Selenium-Automation.git
   cd Selenium-Automation
   ```

2. **Install Dependencies**

   Install the necessary Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. **Setup ChromeDriver**

   Make sure `chromedriver` is in your project directory or specify the path in the script.

4. **Run the Script**

   Execute the script with:

   ```bash
   python main.py
   ```

   You will be prompted to enter the evaluation link, username, and password.

## 🔧 How It Works

1. **Initialization**: Sets up Selenium WebDriver with headless Chrome.
2. **Login**: Navigates to the provided link and logs in using the provided credentials.
3. **Feedback Handling**: Processes feedback forms using a predefined JavaScript function.
4. **Error Recovery**: Automatically retries and handles common issues to ensure successful execution.

## ✨ Customization

Feel free to modify the JavaScript snippet (`namahshivaya_script`) to suit specific feedback form requirements. Customize error handling and logging as needed for your setup.

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork the Repository**
2. **Create a New Branch**
3. **Make Your Changes**
4. **Submit a Pull Request**

## 📬 Contact

For any questions or issues, please reach out to [mail](mailto:sarangsnair1621@gmail.com).
