import Component from '@biotope/element';

import { BioHeader } from 'components/bio-header';
import { setupComponents } from './setup-components';
import './global.style';

setupComponents({
  BioHeader: BioHeader as typeof Component,
});
