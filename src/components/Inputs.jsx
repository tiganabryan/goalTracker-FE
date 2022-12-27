import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../redux/slices/inputSlice';

import { Input } from '@chakra-ui/react';

const Inputs = () => {
  const input = useSelector(state => state.input.input);

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Input
        placeholder="goal"
        value={input}
        onChange={e => {
          dispatch(updateInput(e.target.value));
        }}
      />
    </React.Fragment>
  );
};

export default Inputs;
