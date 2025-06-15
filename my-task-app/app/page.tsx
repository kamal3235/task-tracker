// src/app/page.tsx
"use client";

import React, { useState } from "react";
import type { Task } from "./types";
import TaskItem from "./components/TaskItem";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice TypeScript", completed: false },
    { id: 3, title: "Build a Project", completed: false },
  ]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (!newTask.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false,
    };
    setTasks((prev) => [...prev, newItem]);
    setNewTask("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>Task Tracker</h1>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          style={{ flex: 1 }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
