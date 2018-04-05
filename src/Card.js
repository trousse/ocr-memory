import React, { Component } from 'react'
import "./Card.css"

const HIDDEN_SYMBOL = '?'

   const card = ({card,feelback}) => (
         <div className = "card ${feelback}">
            <span  className = "symbol">
                {feelback === "hidden" ? HIDDEN_SYMBOL : card}
            </span>
        </div>
     )
export default card