import React, { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";
import ResultData from "./components/ResultData";
import { data } from "./data"

function App() {
 const [update,setUpdate] = useState(false)
  return (
    <>
    <div className="container">
      <div>
        <div className="font">CHECK BOX</div>
        <div className="parentDiv">
        {data?.map((elem,index)=>(<CheckBox key={index} Data={elem} update={update} setUpdate={setUpdate}/>))}
        </div>
      </div>
      <div>
        <div className="font">RESULT</div>
        <div className="parentDiv">
        {data.map((elem)=>(<ResultData Data={elem} />))}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
