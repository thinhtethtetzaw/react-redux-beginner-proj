// action creater 
import { SELECT_FOOD } from "./actionTypes"

export const selectFood = (food) => {
    console.log(`clicked ${food.name}`)
    return{
        type: SELECT_FOOD,
        payload: food
    }
}