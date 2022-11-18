import React from 'react'

import { Button } from '@chakra-ui/react'

import Inputs from './Inputs'

const Form = () => {
  return (
    <React.Fragment>
        <form action="post">
            <Inputs />
        </form>
        <Button type='submit' colorScheme='purple'>add</Button>
    </React.Fragment>
  )
}

export default Form