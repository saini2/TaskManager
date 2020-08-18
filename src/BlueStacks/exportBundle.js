import React from './node_modules/react';
import { BrowserRouter } from './node_modules/react-router-dom';
import AppIndex from './components';
import './webfont.font';
/* global BASE_PATH */


export const BlueStacksBundle = feature => (
    <BrowserRouter basename={BASE_PATH}>
      <AppIndex feature={feature} />
    </BrowserRouter>
);
