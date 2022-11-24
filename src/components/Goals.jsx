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
        // goals.filter((goal) => goal.id != id)
        // console.log(goals)
    }
  return (
    <React.Fragment>
        <Text>your goals:</Text>
        {goals.map((goal, index) => (
            <React.Fragment>
                <Text 
                key={index}
                // onDoubleClick={(goal) => deleteGoal(goal.id)}
                onDoubleClick = {goal => {
                    // dispatch(deleteGoal(goal.id))
                    console.log(goal)
                    console.log(goal.id)
                }}
                // className='goal-text'
                >
                    
                    {index+1}. {goal.input}
                </Text> 
                {/* <MinusIcon className='minus-icon' /> */}
            </React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default Goals