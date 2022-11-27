import React from 'react'
import './Goals.css'

import { useSelector, useDispatch } from 'react-redux'
import { goals, addGoal, deleteGoal } from '../redux/slices/goalsSlice'

import { Text } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'



const Goals = () => {
    // debugger
    const goals = useSelector((state) => state.goals)
    // debugger
    const dispatch = useDispatch();
    // goals.map((goal, index) => console.log(goal.input, index))
    // debugger

    const deleteGoal = (id) => {
        console.log(id)
        dispatch(deleteGoal(id))
        // console.log(goals)
    }
  return (
    <React.Fragment>
        <Text
        fontSize="3xl"
        fontWeight={600}
        >your goals:</Text>
            {goals.map((goal, index) => (
                    <li 
                    key={index}
                    onDoubleClick = {goal => {
                        // dispatch(deleteGoal(goal.id))
                        console.log(goal)
                        console.log(goal.target.textContent)
                    }}
                    className='goal-text'
                    >
                        
                        {goal.input}
                    </li> 
                    // {/* <MinusIcon className='minus-icon' /> */}
            
        ))}
    </React.Fragment>
  )
}

export default Goals