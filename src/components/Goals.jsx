import React from 'react'
import axios from 'axios'
import './Goals.css'
import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { goals, addGoal, deleteGoal } from '../redux/slices/goalsSlice'

import { Text } from '@chakra-ui/react'
import { MinusIcon } from '@chakra-ui/icons'



const Goals = () => {
    const log = console.log

    const [dbGoals, setDbGoals] = useState([])
    log(dbGoals)

    async function fetchData() {
        const goals = await axios.get(`http://localhost:3000/goals`)
        setDbGoals(goals.data)
    }

    useEffect(() => {
        fetchData()    
    }, [])
    
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
        <Text fontSize='4xl' className='yourGoalsText' fontWeight={600}>your goals:</Text>
        {/* {goals.map((goal, index) => (
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
                </Text>  */}
                {/* <MinusIcon className='minus-icon' /> */}
                <ol>
                {dbGoals.map((goal) => (
                    <li key={goal.id}>
                        <Text fontWeight={700}>{goal.input}.</Text>
                        <Text mb={3}>achieved? {goal.achieved.toString()}</Text>
                    </li>
                ))}</ol>
            {/* </React.Fragment> */}
        {/* ) */}
        {/* ) */}
    {/* } */}
    </React.Fragment>
  )
}

export default Goals