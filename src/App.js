import {useState} from "react";
import Header from "./components/header";
import Card from "./components/card";
import Button from "./components/buttons";

function App() {
  const [count,setCount]=useState(1)
  const handleClick = (e) =>{ 
    if (e.target.value === "Next") {
      if (count >=0 && count <=11 ) {
        setCount(count + 5)
      }
      else if (count >=15) {
      setCount (1)
      }
   }

    if (e.target.value === "Prew") {
      if (count > 1) {
        setCount(count - 5)
      }

      else if (count <= 1) {
        setCount(16)

      }
    }

  }


  return (
    <div className="App">
      <div className="container">
        <Header count={count} />
        <div className="cards">
          <Card count={count} />
        </div>
        <Button click={handleClick} />
      </div>
      
    </div>
  );
}

export default App;
