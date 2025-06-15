import { motion } from "framer-motion";
import type { Task } from "../types";
import styles from "./TaskItem.module.css";

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
      className={styles.taskItem}
    >
      <span
        onClick={() => onToggle(task.id)}
        className={`${styles.taskTitle} ${
          task.completed ? styles.completed : ""
        }`}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        Delete
      </button>
    </motion.div>
  );
};

export default TaskItem;
