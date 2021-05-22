// 这里的用法很妙！但是还是要好好再思考思考为什么要这样来写

import { 
  useSelector as useReduxSelector,
  TypedUseSelectorHook 
} from 'react-redux';
import { RootState } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;