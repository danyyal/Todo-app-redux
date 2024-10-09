import logo from './logo.svg';
import './App.css';
import { TasksList } from './Components/TasksList';
import { SearchBar } from './Components/SearchBar';
import { useEffect } from 'react';
import {addTask} from './Redux/actions';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();

  const dummyTasks = [
    "Buy groceries",
    "Complete React project",
    "Plan weekend trip",
    "Prepare for the meeting",
    "Workout",
    "Read a book",
    "Pay electricity bill",
    "Respond to emails",
    "Clean the kitchen",
    "Organize the garage",
    "Finish the presentation",
    "Call mom",
    "Watch new movie",
    "Fix the bicycle",
    "Schedule a doctor's appointment",
    "Learn a new recipe",
    "Send the report to the manager",
    "Plan next week's tasks",
    "Declutter workspace",
    "Research vacation spots",
    "Practice guitar",
    "Get a haircut",
    "Attend the seminar",
    "Complete the assignment",
    "Backup important files",
    "Order new headphones",
    "Fix the leaky faucet",
    "Try a new restaurant",
    "Read the news",
    "Visit the park",
    "Schedule dentist appointment",
    "Prepare dinner for guests",
    "Go for a morning run",
    "Refill water bottles",
    "Do laundry",
    "Buy a gift for a friend",
    "Take the car for servicing",
    "Plan birthday celebration",
    "Watch a tutorial",
    "Prepare a blog post",
    "Join a local club",
    "Set new fitness goals",
    "Research stock market trends",
    "Take a photography walk",
    "Organize photos",
    "Pick up the package",
    "Write a thank you note",
    "Create a budget plan",
    "Start a new book",
    "Try out meditation"
  ];

  useEffect(()=>{
    dummyTasks.forEach(task =>
      dispatch(addTask(task))
    );
      
      
  },[dummyTasks, dispatch]);

  return (
    <div className="App">
      <SearchBar />
      
      <TasksList />
    </div>
  );
}

export default App;
