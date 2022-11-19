import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { goals } from '../redux/slices/goalsSlice'

import { Text } from '@chakra-ui/react'


const Goals = () => {
    const goals = useSelector((state) => state.goals)
    goals.map((goal) => console.log(goal.text))
  return (
    <React.Fragment>
        <Text>your goals:</Text>
        {goals.map((goal) => (
            <Text>{goal.text}</Text>
        ))}
    </React.Fragment>
  )
}

export default Goals