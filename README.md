# TechBridge

TechBridge is a web application that makes technology easier to understand for older adults, beginners, people with memory challenges, and anyone who may not feel comfortable using modern devices.

The application provides clear, beginner-friendly instructions in one central location instead of requiring users to search through complicated or unreliable websites.

## Problem

Many people struggle with common technology tasks such as connecting to Wi-Fi, changing device settings, setting up a printer, or recognizing an online scam.

Online instructions can be overly technical, outdated, or written for a different device. This can cause frustration, wasted time, repeated requests for assistance, and increased security risks.

## Solution

TechBridge provides searchable, step-by-step technology guides organized by device and topic. Its design emphasizes simple language, clear navigation, accessibility, and user independence.

## Features

* Login, account-creation, and guest-access demonstrations
* Searchable technology-help library
* Device and topic filtering
* 100+ step-by-step guides
* Guide difficulty levels and estimated completion times
* Favorite guides
* Helpful or not-yet-helpful feedback
* Larger-text accessibility setting
* High-contrast accessibility setting
* User profile page
* AI technology-help assistant
* Support page with frequently asked questions
* Responsive layout for different screen sizes

## Guide Categories

TechBridge includes guides covering:

* iPhone
* Android
* Windows computers
* Mac computers
* Printers
* Internet and Wi-Fi
* Smart devices
* Online safety and security

## Technologies Used

* React
* JavaScript
* HTML
* CSS
* Vite
* Botpress
* Git
* GitHub

## Project Structure

```text
Tech-Bridge/
├── public/
├── src/
│   ├── Pages/
│   │   ├── Guide.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Search.jsx
│   │   └── Support.jsx
│   ├── assets/
│   ├── data/
│   │   ├── guides.js
│   │   └── support.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Running the Project

### Requirements

* Node.js 22
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/HnL0011/Tech-Bridge.git
```

Open the project directory:

```bash
cd Tech-Bridge
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address provided by Vite in a web browser.

## Building for Production

Create a production build with:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## How the Application Works

The application uses React components for each major page. `App.jsx` manages page navigation, the selected guide, search terms, favorite guides, accessibility preferences, and the current user.

Guide information is stored separately in `src/data/guides.js`. This allows the Search and Guide components to display content dynamically without creating a separate page for every guide.

Users can search by title, description, category, device, difficulty, or estimated completion time. Selecting a result opens the complete guide and its numbered instructions.

## Accessibility

TechBridge includes larger-text and high-contrast settings to help make its content easier to read. The interface also uses labeled form controls, readable buttons, straightforward navigation, and plain language.

## Current Project Scope

TechBridge is a capstone demonstration. Login and account creation represent the planned user experience but do not connect to a production authentication database. Support contact information is also included for demonstration purposes.

## Future Improvements

Future versions of TechBridge could include:

* Secure server-based authentication
* Database storage for accounts and favorites
* Voice-based assistance
* Multilingual guides
* More advanced AI assistance
* Verified community-submitted guides
* Moderator review tools
* Additional accessibility settings
* Real email notification and support systems

## Author

Hunter LaBarge

Capstone Project — 2026
