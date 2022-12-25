import React from 'react';
import './Goals.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { goals, addGoal, deleteGoal } from '../redux/slices/goalsSlice';

import { Text } from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';
import { Spinner } from '@chakra-ui/react';

const log = console.log;

const Goals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/goalTracker')
      .then(res => {
        setData(res.data);
        log(res.data);
      })
      .catch(function (error) {
        log(`ERROR: ${error}`);
      });
  }, []);

  // debugger
  const goals = useSelector(state => state.goals);
  // goals.map((goal) => {
  //     console.log(goal)
  //   })
  // debugger
  const dispatch = useDispatch();
  // goals.map((goal, index) => console.log(goal.input, index))
  // debugger

  // const deleteGoal = (id) => {
  //     console.log(id)
  //     dispatch(deleteGoal(id))
  //     // console.log(goals)
  // }

  return (
    <React.Fragment>
      <Text fontSize="3xl" fontWeight={600}>
        your goals:
      </Text>

      {data.map((goal, index) => (
        <Text
          key={index}
          className="goal-text"
          fontSize="1xl"
          pb={0}
          onDoubleClick={() => {
            axios
              .delete(`/api/goalTracker/${goal._id}`)
              .then(function (res) {
                log(res);
              })
              .catch(function (err) {
                log(err);
              });
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
