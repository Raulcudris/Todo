import React, { Fragment } from 'react'
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';

function AppUI ({
    totalTodos,
    completeTodo,
    searchValue,
    setSearchValue, 
    searchedTodos,
    completedTodos,
    deleteTodo
 } ) {
  return (
     <Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=>{ completeTodo(todo.text) }}
            onDelete = {()=>{deleteTodo(todo.text)}}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  )
}
 export { AppUI };
