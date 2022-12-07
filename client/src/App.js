import axios from 'axios';
function App() {
    fetch('https://HAN_SEOHYUN.github.io')
    .then((response) => response.json())
    .then((data)=>console.log(data));

  

    return(
    <div className="App">
     <h1>클라이언트</h1> 
    </div>
  );
}

export default App;
