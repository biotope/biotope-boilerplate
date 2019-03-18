import 'whatwg-fetch';
import Component from '@biotope/element';

import { setupBiotope } from 'components/setup-biotope';
import { setupComponents } from 'components/setup-components';
import { BioHeader } from 'components/bio-header';

setupBiotope();

setupComponents({
  BioHeader: BioHeader as typeof Component,
});
