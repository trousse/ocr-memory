import React from 'react'
import PropTypes from 'prop-types'
import "./Card.css"

const HIDDEN_SYMBOL = '?'

   const card = ({card,feelback,index,onClick}) => (
         <div className = "card ${feelback}" onClick = {() => onClick(index)}>
            <span  className = "symbol">
                {feelback === "hidden" ? HIDDEN_SYMBOL : card}
            </span>
        </div>
     )

     card.propTypes = {
        card: PropTypes.string.isRequired,
        feedback: PropTypes.oneOf([
          'hidden',
          'justMatched',
          'justMismatched',
          'visible',
        ]).isRequired,
        index: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
      }
export default card