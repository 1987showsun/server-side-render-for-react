/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { aboutAction } from '../actions/about';

const About = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.home.list);
  useEffect(() => {
    dispatch(aboutAction());
  }, []);

  return (
    <>
      {
        members.map(item => (
          <div key={item.id.value}>
            <div className="">{`${item.name.title}：${item.name.last} ${item.name.first}`}</div>
          </div>
        ))
      }
    </>
  );
};

About.loadData = dispatch => dispatch(aboutAction());

export default About;
