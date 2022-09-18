import React from 'react'
 

export default function DisplayData({ Data }){
  const Count = Data.childrens.filter((child)=>child.childChecked === true).length;
  if(Count === 0) return ""
  return (
    <div className="Teacher">
      <div className="checkbox">
        <li>{Data.parent}</li>
      </div>
      {Data.childrens.map((child, index) =>
        (child.childChecked) && (
          <ul className="checkbox" key={index}>
            <li>{child.childname}</li>
          </ul>
        ))}
    </div>
  );
};
