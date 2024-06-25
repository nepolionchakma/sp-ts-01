import { useSearchParams } from 'react-router-dom'
import { useTodos } from '../../store/TodosContext'
import { useState } from 'react'

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos()
    const [searchParams] = useSearchParams()
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState('')
    let todosSearchParanms = searchParams.get('todos')
    let filterData = todos
    if (todosSearchParanms === 'active') {
        filterData = filterData.filter(task => !task.completed)
    }
    if (todosSearchParanms === 'completed') {
        filterData = filterData.filter(task => task.completed)
    }

    const checkBoxChecked = (id: string) => {
        setIsCheckBoxChecked(id)
    }
    console.log(typeof isCheckBoxChecked)
    return (
        <div className="w-full border">
            <ul className="flex flex-col gap-2">
                {filterData.map(todo => {
                    return (
                        <li key={todo.id} className="flex justify-between ">
                            <div className="flex gap-3">
                                <input
                                    type="checkbox"
                                    id={`todo-${todo.id}`}
                                    checked={todo.completed}
                                    onChange={() => {
                                        toggleTodoAsCompleted(todo.id)
                                        checkBoxChecked(todo.id)
                                    }}
                                    className=" "
                                />
                                <label
                                    htmlFor={`todo-${todo.id}`}
                                    //       className={` ${
                                    //           isCheckBoxChecked === todo.id &&
                                    //           'line-through'
                                    // }`}
                                >
                                    {todo.task}
                                </label>
                            </div>
                            <span>
                                {todo.completed && (
                                    <button
                                        className="bg-red-500 px-2 rounded text-white"
                                        onClick={() =>
                                            handleDeleteTodo(todo.id)
                                        }>
                                        Delete
                                    </button>
                                )}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Todos
