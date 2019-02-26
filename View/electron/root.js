import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import RootView from "./RootView";

const Root = ({ store }) => (
  <Provider store={store}>
    <RootView />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
