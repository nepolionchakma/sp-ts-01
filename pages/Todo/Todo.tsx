import NavBar from '../../components/NavBar/NavBar'
import AddTodo from '../../components/Todo/AddTodo'
import Todos from '../../components/Todo/Todos'

const Todo = () => {
    return (
        <div className="flex flex-col gap-3 my-10 p-4 border w-[50%] items-center mx-auto">
            <NavBar />
            <AddTodo />
            <Todos />
        </div>
    )
}
export default Todo
