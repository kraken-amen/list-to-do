# To-Do List Application

A simple and intuitive to-do list application built with React. This application allows users to manage their daily tasks with features to add, complete, and delete tasks.

## Features

- ✅ **Add Tasks** - Quickly add new tasks to your to-do list
- ✔️ **Mark as Complete** - Click on any task to toggle its completion status
- ❌ **Delete Tasks** - Remove tasks you no longer need
- 🎨 **Clean UI** - Simple and user-friendly interface
- ⚡ **Real-time Updates** - Instant feedback on all actions

## Technologies Used

- **React** (v19.2.0) - JavaScript library for building user interfaces
- **React Hooks** - `useState` and `useRef` for state management
- **CSS** - Custom styling for a polished look
- **React Scripts** (v5.0.1) - Build tooling and development server

## Project Structure

```
to-do-list/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles
│   └── ...
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/kraken-amen/list-to-do
   cd to-do-list
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `build/` directory.

## Usage

1. **Adding a Task**:
   - Type your task in the input field
   - Click the "Add Task" button or press Enter
   - The task will appear in your list

2. **Completing a Task**:
   - Click on any task text to mark it as complete
   - Click again to mark it as incomplete
   - Completed tasks will have a different visual style

3. **Deleting a Task**:
   - Click the ❌ icon next to any task to remove it from the list

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## Future Enhancements

Potential features to add:

- 📅 Due dates for tasks
- 🏷️ Task categories or tags
- 💾 Local storage persistence
- 🔍 Search and filter functionality
- 📊 Task statistics and progress tracking
- 🌙 Dark mode support

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created as part of the MERN stack learning journey.

---

**Happy Task Managing! 📝**
