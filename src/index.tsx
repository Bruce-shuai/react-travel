import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import './i18n/configs';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

// 这个操作是真特么神奇
axios.defaults.headers['x-icode'] = '08BD99351DDCB26D';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

