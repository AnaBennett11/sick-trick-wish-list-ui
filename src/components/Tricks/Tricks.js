import React from "react"
import TrickCard from "../TrickCard/TrickCard";
import "./Tricks.css";

const Tricks = ({currentTricks}) => {
    console.log(currentTricks)
  const TricksView = currentTricks.map(trick => {

    return (
        <TrickCard
          key={trick.id}
          stance={trick.stance}
          name={trick.name}
          obstacle={trick.obstacle}
          tutorial={trick.tutorial}
          id={trick.id}
          />
          
    )
  })

  return (
    <div className="tricksHolder">{TricksView}</div>
  )
   
}



export default Tricks;


