import React from 'react';
import {render} from 'react-dom';
import './assets/index.less';
//App 负责选择哪一个组件
import App from './containers/index';

render(
    <App/>,
    document.getElementById("root")

)