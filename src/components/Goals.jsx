import React from 'react';
import './Goals.css';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteGoal, getGoals } from '../redux/slices/goalsSlice';

import { Text } from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/react';

const log = console.log;

const Goals = () => {
  const dispatch = useDispatch();
  const goals = useSelector(state => state.goals.goals);

  useEffect(
    () => {
      dispatch(getGoals());
    },
    []
    // [goals] causing hundreds of renders..? useEffect starts acting like there is no dependency array
  );

  return (
    <React.Fragment>
      <Text fontSize="3xl" fontWeight={600}>
        your goals:
      </Text>

      {goals?.map((goal, index) => (
        <Text
          key={index}
          className="goal-text"
          fontSize="1xl"
          pb={0}
          onDoubleClick={() => {
            dispatch(deleteGoal(goal._id));
          }}
        >
          {goal.text}
          {/* <MinusIcon className="minus-icon" onClick={e => log(e.target)} /> */}
        </Text>
      ))}
    </React.Fragment>
  );
};

export default Goals;
