import React from 'react'
import FoodItem from './FoodItem'
import SayHello from '../../SayHello'

const FoodList = () => {

    // fetch를 통해 음식 목록 json을 불러옴
    const foods = {
        id: 4212312,
        foodList: [
            {
                fName: '짜장면',
                price: 6000,
                id : 'chinese'
            },
            {
                fName: '해물파전',
                price: 8000,
                id : 'korean'
            },
            {
                fName: '가츠동',
                price: 12000,
                id : 'japanese'
            },
            {
                fName: '파스타',
                price: 12000,
                id : 'italian'
            }
        ]
    };


  return (
    <ul>
        <SayHello>
            <a href='https://www.naver.com'>네이버 링크</a>
        </SayHello>
    
        {
            foods.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id} />)
        }
       
        
    </ul>

  )
}

export default FoodList