import './App.css';
import Card from './components/Layout/Card/Card';
import CardHeader from './components/Layout/Card/CardHeader';
import CardBody from './components/Layout/Card/CardBody';
import CardFooter from './components/Layout/Card/CardFooter';
import { useEffect, useState } from 'react';

let count = 0;

// const dummyTodos = [
//   { id: 't1', name: '밥 먹기' },
//   { id: 't2', name: '떡 먹기' },
//   { id: 't3', name: '빵 먹기' },
// ];
const baseUrl = 'http://localhost:8080/todos'

const App = () => {
  const [todos, setTodos] = useState([]);

  // Todos 데이터 fetch(API Call)
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  // 새로운 Todo add
  const addTodoHandler = enteredValue => {

    const newTodo = {
      id: count++,
      name: enteredValue,
    }

    fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: enteredValue })
    })

    setTodos([...todos, newTodo])
  }

  // Todo update
  const updateTodoHandler = (valueId, valueName) => {

    fetch(baseUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: valueId,
        name: valueName
      })
    })

    setTodos(todos.map(todo => todo.id === valueId ? { ...todo, name: valueName } : todo));
  }

  // Todo delete
  const deleteTodoHandler = (valueId) => {

    fetch(baseUrl + '?id=' + valueId, {
      method: 'DELETE',
    })

    setTodos(todos.filter(element => element['id'] !== valueId));
  }

  return (
    <>
      <div className='bg-slate-100'>
        {/* Header */}
        <div className='flex justify-center'>
          <header className='text-red-200 text-7xl'>
            <h1>todos</h1>
          </header>
        </div>
        {/* Card */}
        <div className='flex justify-center'>
          <Card>
            <CardHeader onAdd={addTodoHandler} />
            <CardBody todos={todos} onDelete={deleteTodoHandler} onUpdate={updateTodoHandler} />
            <CardFooter />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
