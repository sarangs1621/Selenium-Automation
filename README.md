Here’s the updated README with additional explanations about `chrome.exe` and a note about adding a GIF video for demonstration:

---

# Selenium-Automation: AUMS Feedback Automation

![AUMS Logo](https://aumsam.amrita.edu/cas/images/logo.png)

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
- **ChromeDriver**: You need the ChromeDriver executable to interact with Chrome. You can download it from [ChromeDriver Download](https://sites.google.com/chromium.org/driver/). If you're using Replit, `chrome.exe` is used as the ChromeDriver file. Ensure it is correctly set up in your project directory.

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

   Ensure `chromedriver` (or `chrome.exe` in Replit) is in your project directory, or specify the path in the script.

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

## 🎥 Demonstration

To help you get started, we've created a GIF video showing how to access the evaluation feedback link. You can view it [here](https://drive.google.com/file/d/16yyIUzguyQrodD7Vh9xhTuj18m0iMviv/view?usp=sharing). 

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork the Repository**
2. **Create a New Branch**
3. **Make Your Changes**
4. **Submit a Pull Request**

## 📬 Contact

For any questions or issues, please reach out to [sarangsnair1621@gmail.com](mailto:sarangsnair1621@gmail.com).

---

