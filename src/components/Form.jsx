import React from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import input from '../redux/slices/inputSlice';
import { goals, addGoal } from '../redux/slices/goalsSlice';

import Inputs from './Inputs';

const Form = () => {
  const log = console.log;
  const goals = useSelector(state => state.goals);
  const input = useSelector(state => state.input.input);
  const dispatch = useDispatch();

  const handleSubmit = text => {
    // e.preventDefault();
    // alert("form submitted!");
    // dispatch(addGoal({input}))
    // console.log("input:", input)
    // console.log("array:", goals)

    const params = new URLSearchParams();
    params.append('text', text);

    axios
      .post('/api/goalTracker', params)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        log(err);
      });
  };

  return (
    <React.Fragment>
      <form
      // action="post"
      // onSubmit={handleSubmit(e, input)}
      >
        <Inputs />

        <Button
          type="submit"
          // onClick={handleSubmit}
          colorScheme="purple"
          mt="1rem"
          onClick={() => handleSubmit(input)}
        >
          add
        </Button>
      </form>
    </React.Fragment>
  );
};

export default Form;
