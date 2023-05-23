import React from 'react'

const FoodItem = ({foodId, foodName, price}) => {

    // console.log(props);

  return (
    <li id={foodId}>{foodName} ({price}원)</li>
  )
}

export default FoodItem