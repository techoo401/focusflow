import { Check, Delete, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Tasks() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Complete React project', status: 'pending' },
        { id: 2, title: 'Study for exam', status: 'completed' },
        { id: 3, title: 'Buy groceries', status: 'failed' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
    };

    const handleDelete = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">Your Tasks</h2>
            {tasks.map(task => (
                <div
                    key={task.id}
                    className="bg-white shadow-sm rounded p-5 mb-4 border border-gray-200"
                >
                    <div className="flex justify-between items-center">
                        <h3 className={`text-lg font-semibold capitalize ${task.status === 'completed' ? 'line-through text-green-600' : task.status === 'failed' ? 'text-red-600' : ''}`}>
                            {task.title}
                        </h3>
                        <span className="text-sm text-gray-500">{task.status}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                        <button
                            onClick={() => handleStatusChange(task.id, 'completed')}
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                            <Check />
                        </button>
                        <button
                            onClick={() => handleStatusChange(task.id, 'failed')}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            <X />
                        </button>
                        <button
                            onClick={() => handleDelete(task.id)}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                        >
                            <Delete />
                        </button>
                    </div>
                </div>
            ))}

            {/* Create New Task Button */}
            <div className="mt-6 text-center">
                <Link
                    to="/create-task"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    + Create New Task
                </Link>
            </div>
        </div>
    );
}

export default Tasks;