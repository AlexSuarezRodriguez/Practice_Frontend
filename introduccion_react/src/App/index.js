import React,{useState} from "react";
import { AppUI } from "./AppUI";

const defaultTodos=[
  {text:'cortar cebolla',complete:true},
  {text:'cocinar la cebolla',complete:false},
  {text:'comer la cebolla',complete:false},
]

function App() {
  const[todos,setTodos] = useState(defaultTodos)
  const [searchValue,setSearchValue]=useState('')

const completedTodos= todos.filter(todo=> !!todo.complete).length;//filtra los datos del arreglo comprobando si la propiedad complete es true
const totalTodos=todos.length;//cuenta cuando datos hay dentro del arreglo todos 

let searchedTodos=[];

if(!searchValue.length>=1){
  searchedTodos = todos;
}else{
  searchedTodos = todos.filter(todo=>{
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

}

const completeTodo=(text)=>{
  const todoIndex=todos.findIndex( todo => todo.text === text);
  const newTodos =[...todos];
  newTodos[todoIndex].complete= true;
  setTodos(newTodos);
};  

const deleteTodo=(text)=>{
  const todoIndex=todos.findIndex(todo=>todo.text === text);
  const newTodos =[...todos];
  newTodos.splice(todoIndex,1);
  setTodos(newTodos);
}; 

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
