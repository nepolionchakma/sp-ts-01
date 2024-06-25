import { FormEvent, useState } from 'react'
import { useTodos } from '../../store/TodosContext'

const AddTodo = () => {
    const [todo, setTodo] = useState('')
    const { handleAddToDo } = useTodos()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddToDo(todo)
        setTodo('')
    }
    return (
        <div className=" my-10 flex flex-col gap-4 ">
            <h2 className="text-center">Todos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add task"
                    className="border bg-slate-200 p-2 rounded-l"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <button
                    type="submit"
                    className="p-2 bg-slate-700 text-white rounded-r border">
                    Add
                </button>
            </form>
        </div>
    )
}
export default AddTodo
