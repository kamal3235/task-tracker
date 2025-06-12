//import React from "react";
import { motion } from "framer-motion";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskItem = ({ task, onDelete, onToggle }: TaskItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem",
        borderBottom: "1px solid #ccc",
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "#888" : "#000",
      }}
    >
      <span onClick={() => onToggle(task.id)} style={{ cursor: "pointer" }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </motion.div>
  );
};

export default TaskItem;
