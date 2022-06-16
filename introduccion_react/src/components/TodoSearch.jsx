
import './TodoSearch.css'

function TodoSearch({searchValue,setSearchValue}) {

  const handleSearchValueChange=(event)=>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  };
  return(
    <input 
      className='TodoSearch' 
      placeholder="ingrese todo"
      value={searchValue}
      onChange={handleSearchValueChange}
    />
    );
}

export {TodoSearch};