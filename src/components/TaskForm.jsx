// src/components/TaskForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/TaskForm.css";

const TaskForm = ({ fetchTasks, currentTask, setCurrentTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: 2, // Default to medium priority
    completed: false,
  });

  useEffect(() => {
    if (currentTask) {
      setFormData({
        title: currentTask.title,
        description: currentTask.description,
        category: currentTask.category || "",
        priority: currentTask.priority || 2,
        completed: currentTask.completed,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        category: "",
        priority: 2,
        completed: false,
      });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (currentTask) {
        // Update existing task
        await axios.put(
          `http://https://sec-project3-backend-deploy.onrender.com/api/tasks/${currentTask.id}`,
          formData,
          {
            headers: { Authorization: token },
          }
        );
        setCurrentTask(null); // Clear the current task after updating
      } else {
        // Create new task
        await axios.post(
          "https://sec-project3-backend-deploy.onrender.com/api/tasks",
          formData,
          {
            headers: { Authorization: token },
          }
        );
      }
      setFormData({
        title: "",
        description: "",
        category: "",
        priority: 2,
        completed: false,
      });
      fetchTasks(); // Refresh task list
    } catch (err) {
      console.error("Error creating/updating task:", err);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="text"
        name="category"
        placeholder="Category (e.g., Work, Personal)"
        value={formData.category}
        onChange={handleChange}
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        required
      >
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
      </select>
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
