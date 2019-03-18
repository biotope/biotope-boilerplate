import 'browser-polyfills';
import loadEntry from 'load-entry';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LoadService } from 'services';
import { Header } from 'components/header';

import './global.style';

LoadService.setupBiotope();

export const indexEntry = (): void => {
  ReactDOM.render(
    <Header />,
    document.getElementById(ROOTID),
  );
};

loadEntry(indexEntry);
