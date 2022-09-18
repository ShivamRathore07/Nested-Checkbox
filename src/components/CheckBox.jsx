import React from "react";

export default function CheckBox({ Data,update,setUpdate}){
  const handleClick = (nums) => {
      if(nums === 0 && Data.ParentChecked === false) {
        Data.ParentChecked = true;
        Data.childrens.map((child)=>(
          child.childChecked=true
        ))
      } else if (nums === 0 && Data.ParentChecked === true){
        Data.ParentChecked = false;
        Data.childrens.map((child)=>(
          child.childChecked=false
        ))
      } else if (nums !== 0) {
        Data.childrens[nums-1].childChecked=!Data.childrens[nums-1].childChecked       
        
        if(Data.childrens[0].childChecked === true &&
          Data.childrens[1].childChecked === true &&
          Data.childrens[2].childChecked === true &&
          Data.childrens[3].childChecked === true){
          Data.ParentChecked = true;
        } else {
          Data.ParentChecked = false;
        }
      }
      setUpdate(!update)
  };
  return (
    <div className="Teacher">
      <div className="checkbox">
        <input type="checkbox" className="techearCheckBox" checked={Data.ParentChecked} onChange={()=>{handleClick(0)}} />
        <label>{Data.parent} </label>
      </div>
        {Data.childrens.map((child,index)=>(
        <div className="checkbox" key={index} >
          <input type="checkbox" className="studentCheckBox" checked={child.childChecked} onChange={() => handleClick(index+1)}       />
          <label>{child.childname}</label>
        </div>
        ))}
    </div> 
  );
};
