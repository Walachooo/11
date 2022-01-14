import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
  const [value, setValue] = React.useState(true);

  const handleClick = ()=>{
 
    setValue(!value);
  }
  
    return (
    <div>
      <button 
      className={value? 'btn-primary':'btn'}
      onClick={handleClick}>{value?"Wyłącz": "Włącz"}</button>
    </div>
    );
  
}
 
export default App;