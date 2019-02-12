import './polyfills';
import loadEntry from 'load-entry';

import { BioHeader } from 'components';
import './global.style';

loadEntry(() => new BioHeader(ROOTID));
