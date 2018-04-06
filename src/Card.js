import React from 'react'
import "./Card.css"

const HIDDEN_SYMBOL = '?'

   const card = ({card,feelback,onClick}) => (
         <div className = "card ${feelback}" onClick = {()=>onClick(card)}>
            <span  className = "symbol">
                {feelback === "hidden" ? HIDDEN_SYMBOL : card}
            </span>
        </div>
     )
export default card