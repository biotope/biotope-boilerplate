import {SliderComponent} from './SliderComponent';
import {registerComponent} from '../../core/registerComponent';
import {Store} from 'redux';

registerComponent((store: Store): any => SliderComponent);
