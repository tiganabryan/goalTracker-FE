import React from 'react'

import { Button } from '@chakra-ui/react'

import { useSelector, useDispatch } from 'react-redux'
import input from "../redux/slices/inputSlice"
import { goals, addGoal } from '../redux/slices/goalsSlice'


import Inputs from './Inputs'

const Form = () => {

  const goals = useSelector((state) => state.goals);
  const input = useSelector((state) => state.input.input);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    
    e.preventDefault();
    // alert("form submitted!");
    dispatch(addGoal({input}))
    console.log("input:", input)
    console.log("array:", goals)
  }
    
  return (
    <React.Fragment>
        <form 
        // action="post" 
        onSubmit={handleSubmit}
        >
            <Inputs />
        
        <Button 
        type='submit'
        // onClick={handleSubmit} 
        colorScheme='purple'
        mt="2rem"
        >
          add
        </Button>
      </form>
    </React.Fragment>
  )
}

export default Form