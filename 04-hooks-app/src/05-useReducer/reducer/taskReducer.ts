import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TaskState {
    todos: Todo[];
    length: number;
    completedCount: number;
    pendingCount: number;
}

export type TaskAction = |
{ type: 'ADD_TASK'; payload: string } |
{ type: 'TOGGLE_TASK'; payload: number } |
{ type: 'DELETE_TASK'; payload: number };

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completedCount: z.number(),
    pendingCount: z.number(),
});

export const getTaskInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem('tasks-state');
    if (localStorageState) {
        const result = TaskStateSchema.safeParse({
            todos: JSON.parse(localStorageState),
            length: JSON.parse(localStorageState).length,
            completedCount: JSON.parse(localStorageState).filter((todo: Todo) => todo.completed).length,
            pendingCount: JSON.parse(localStorageState).filter((todo: Todo) => !todo.completed).length,
        });
        if (!result.success) {
            console.error('Error al parsear el estado de las tareas desde localStorage:', result.error);
            return {
                todos: [],
                length: 0,
                completedCount: 0,
                pendingCount: 0,
            };
        }

        return result.data;

    }

    return {
        todos: [],
        length: 0,
        completedCount: 0,
        pendingCount: 0,
    }
};

// action es para determinar un nuevo estado
//siempre devuelve el state
//se usa payload para enviar datos a la función reductora, como el texto de la nueva tarea o el id de la tarea a eliminar o cambiar su estado
export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {

        case 'ADD_TASK': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false,
            };
            //no hay q mutar el state, se debe devolver un nuevo estado
            //(state.todos.push(newTodo)) // esto nooo
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pendingCount: state.pendingCount + 1,
            };
        }
        case 'TOGGLE_TASK':
            {
                const toggledTodos = state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                );
                return {
                    ...state,
                    todos: toggledTodos,
                    completedCount: toggledTodos.filter((todo) => todo.completed).length,
                    pendingCount: toggledTodos.filter((todo) => !todo.completed).length,
                };
            }
        case 'DELETE_TASK': {
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);
            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completedCount: currentTodos.filter((todo) => todo.completed).length,
                pendingCount: currentTodos.filter((todo) => !todo.completed).length,
            };
        }


        default:
            return state;
    }



}