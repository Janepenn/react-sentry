import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SentryBoundary from './SentryBoundary';
import { release } from './release.json';

Raven.config('http://2b3d4bd1dae64a15a4bd64aadd875e4a@localhost:9000/5', {
  release: release,
  environment: process.env.NODE_ENV,
  // 此处可以放一些具有标志的信息，用于后期再平台在查找某一处指定问题
  // 比如当前版本号
  tags: {
    version: '1.0.0',
  },
}).install();

ReactDOM.render(
  <div>
    <SentryBoundary>
      <App />
    </SentryBoundary>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
