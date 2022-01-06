/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import { useIntl, FormattedMessage } from "react-intl";

// Actions
import { homeAction } from '../actions/home';

const Home = ({ dispatch, members=[] }) => {

  const intl = useIntl();

  useEffect(() => {
    dispatch( homeAction() );
  },[]);

  return(
    <>
      <Helmet>
        <title>123</title>
      </Helmet>
      <FormattedMessage id="home.title" />
      <FormattedMessage
        id="games.addedOn"
        values={{ addedOn: '2020-01-01', aaaa: 'test' }}
      />
      {
        members.map(item => {
          return(
            <div key={item.id.value}>
              <div className="">{`${item.name.title}：${item.name.last} ${item.name.first}`}</div>
            </div>
          );
        })
      }
    </>
  );
}

Home.loadData = (dispatch) => {
  return dispatch(homeAction());
}

const mapStateToProps = state => {
  return{
    members: state.home.list
  }
}

export default connect(mapStateToProps)(Home);
