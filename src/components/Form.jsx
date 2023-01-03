import React from 'react';

import { Button } from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { addGoal } from '../redux/slices/goalsSlice';

import Inputs from './Inputs';

const Form = () => {
  const log = console.log;
  const input = useSelector(state => state.input.input);
  const dispatch = useDispatch();

  const handleSubmit = (e, text) => {
    e.preventDefault();
    dispatch(addGoal(text));
  };

  return (
    <React.Fragment>
      <form>
        <Inputs />

        <Button
          type="submit"
          colorScheme="purple"
          mt="1rem"
          onClick={() => handleSubmit(e, input)}
        >
          add
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
