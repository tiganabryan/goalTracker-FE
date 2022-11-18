import React from 'react'
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateInput } from '../redux/slices/inputSlice'

import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const Inputs = () => {
    // const [input, setInput] = useState('')

    // debugger
    const input = useSelector((state) => state.input.input)
    
    console.log(input)
    const dispatch = useDispatch()


    // const handleChange = (e) => {
    //     debugger
    //     dispatch(updateInput(input, e.target.value))
    //     debugger
    //     console.log(input)
    // }

    return (
        <React.Fragment>
            <Input 
            placeholder='goal'
            value={input}
            onChange={value => dispatch(updateInput(value))}
            />
            
            <Text>{input}</Text>
        </React.Fragment>
    )
}

export default Inputs