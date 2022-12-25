import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../redux/slices/inputSlice';

import { Input } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Inputs = () => {
  // const [input, setInput] = useState('')

  // debugger
  const input = useSelector(state => state.input.input);

  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //     debugger
  //     dispatch(updateInput(input, e.target.value))
  //     debugger
  //     console.log(input)
  // }

  return (
    <React.Fragment>
      <Input
        placeholder="goal"
        value={input}
        onChange={e => {
          dispatch(updateInput(e.target.value));
          // console.log(e.target.value)
        }}
      />

      {/* <Text>{input}</Text> */}
    </React.Fragment>
  );
};

export default Inputs;
