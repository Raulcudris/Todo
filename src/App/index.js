import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

//  const DefaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
//  ];

function App() {
  return (
    <TodoProvider> 
          <AppUI/>
    </TodoProvider>
    );
}

export default App