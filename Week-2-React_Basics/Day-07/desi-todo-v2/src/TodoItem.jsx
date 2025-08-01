export default function TodoItem({ task, onToggle, onDelete }) {
    return (
      <div className="flex items-center justify-between bg-white px-4 py-2 rounded-lg shadow-md">
        <div
          onClick={onToggle}
          className={`cursor-pointer text-left flex-1 ${
            task.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {task.text}
        </div>
        <button
          onClick={onDelete}
          className="ml-4 text-red-500 hover:text-red-700 text-lg"
          title="Delete task"
        >
          ❌
        </button>
      </div>
    );
  }
  