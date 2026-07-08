# Tech-Bridge
A technology support application designed to make everyday technology easier to understand.
The goal of the application is to provide a single, easy-to-use platform where users can find beginner-friendly technology guides and receive AI-assisted support without having to search through multiple websites or confusing technical documentation.

Problem Statement
Many people, especially older adults and beginner technology users, struggle to troubleshoot common problems with devices such as smartphones, computers, printers, Wi-Fi, and other technology. Most online resources assume users already understand technical terminology or require them to search through multiple articles and videos before finding an answer. Tech Bridge addresses this problem by organizing technology support into simple, step-by-step guides written in plain language while also providing an AI assistant that can answer questions and recommend helpful resources.

Target Users
The primary users of Tech Bridge are:
Older adults learning modern technology
Beginner computer and smartphone users
Individuals looking for easy-to-follow troubleshooting guides
Anyone who wants simple, understandable technology support
A future enhancement would allow trusted community contributors to submit tutorials that are reviewed before being published.

Planned Features
The application currently includes the following planned features:

User registration and secure login
Home dashboard with technology categories
Search functionality for finding guides
AI-powered technology assistant
Step-by-step troubleshooting guides
Favorites for saving helpful guides
User profile and account management

The current technology categories include:
Phones
Computers
Wi-Fi
Printers
Internet
Smart Devices
Applications
User Interface Design

I have completed the initial user interface design in Figma. The prototype currently contains the following screens:
Login Screen
Home Screen
Search Screen
Guide Details Screen
AI Assistant Screen
Profile Screen

The interface is designed with large buttons, clear labels, and simple navigation to make the application accessible for users with limited technology experience.

Database Design
The initial database consists of five primary tables:
Users
UserID
Name
Email
Password

Categories
CategoryID
Category Name
Description

Support Guides
GuideID
CategoryID
Title
Description
Steps
Difficulty

Favorites
FavoriteID
UserID
GuideID

AI Chat History
ChatID
UserID
Question
Response
Date

Service Layer

The application has been organized into several service layers:
Authentication Service
Guide Service
Search Service
Favorites Service
AI Service
Profile Settings Service
Each service has a specific responsibility, making the application easier to maintain and expand as development continues.

Workflow

The user workflow is designed to be simple:

User logs in or creates an account.
User arrives at the Home screen.
User browses categories or searches for a technology problem.
User opens a Guide Details page with step-by-step instructions.
If additional assistance is needed, the user opens the AI Assistant.
Helpful guides can be saved to Favorites.
Users can manage their account through the Profile page.
Design Materials Completed

At this stage, I have completed the following design materials:

High-fidelity Figma prototype
User interface screens
Navigation flow
User workflow diagram
Database design
Service layer architecture
Feature list
Technology stack selection

The planned technology stack includes:
Frontend: HTML, CSS, JavaScript
Backend: C#
Database: SQL Server
AI Integration: OpenAI API (planned)
Design Tool: Figma
