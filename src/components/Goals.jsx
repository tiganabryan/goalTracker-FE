import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { goals, addGoal } from '../redux/slices/goalsSlice'

import { Text } from '@chakra-ui/react'


const Goals = () => {
    // debugger
    const goals = useSelector((state) => state.goals)
    // debugger
    goals.map((goal, index) => console.log(goal.input, index))
    // debugger
  return (
    <React.Fragment>
        <Text>your goals:</Text>
        {goals.map((goal, index) => (
            <React.Fragment>
                <Text key={index}>{goal.id}. {goal.input}</Text>
            </React.Fragment>
        ))}
    </React.Fragment>
  )
}

export default Goals