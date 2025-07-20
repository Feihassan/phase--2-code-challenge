#  Smart Goal Planner

Smart Goal Planner is a personal finance dashboard built for a fintech company to help users manage multiple savings goals. It allows users to create, update, track, and deposit into their financial goals while visualizing progress in a clean, professional dark-themed UI.

##  Features

-  **CRUD for Financial Goals**
  - Create new savings goals (e.g., Emergency Fund, Travel)
  - Edit target amount, category, and deadline
  - Delete unwanted goals
-  **Progress Tracking**
  - Visual progress bar for each goal
  - Calculates saved vs target amount
-  **Make Deposits**
  - Deposit money into specific goals
  - Recalculates progress in real-time
-  **Deadline & Overview**
  - Tracks goal deadlines
  - Summarizes total saved, total goals, and completed goals
-  **Dark UI Dashboard**
  - Clean and responsive design using Tailwind CSS v3

## Tech Stack

-  **React** – Frontend framework
-  **Tailwind CSS v3** – Styling
-  **json-server** – Simulated backend API with `db.json`
-  **Fetch API** – For all data operations (no Axios)

##  File Structure

smart-goal-planner/
├── public/
├── src/
│ ├── components/
│ │ ├── GoalList.jsx
│ │ ├── GoalForm.jsx
│ │ ├── GoalEditForm.jsx
│ │ ├── DepositForm.jsx
│ │ ├── Overview.jsx
│ │ └── ProgressBar.jsx
│ ├── App.jsx
│ ├── index.jsx
│ └── index.css
├── db.json 
├── package.json
└── README.md

bash
Copy
Edit

##  Getting Started

### 1. Clone the Repository

## bash
git clone https://github.com/Feihassan/phase--2-code-challenge
cd smart-goal-planner
