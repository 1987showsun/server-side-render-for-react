/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useIntl, FormattedMessage } from 'react-intl';

// Actions
import { homeAction } from '../actions/home';

const Home = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const members = useSelector(state => state.home.list);

  useEffect(() => {
    dispatch(homeAction());
  }, []);

  return (
    <>
      <Helmet>
        <title>test home title</title>
        <meta name="description" content="test description" />
        <meta name="keywords" content="test,test1,test2" />
      </Helmet>
      <FormattedMessage id="home.title" />
      <FormattedMessage
        id="games.addedOn"
        values={{ addedOn: '2020-01-01', aaaa: 'test' }}
      />
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

Home.loadData = dispatch => dispatch(homeAction());

Home.defaultProps = {
  dispatch: () => {},
  members: [],
};

Home.propTypes = {
  dispatch: PropTypes.func,
  members: PropTypes.array,
};

export default Home;