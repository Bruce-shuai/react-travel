// 这里的用法很妙！但还是有点没搞清楚为啥要这样做....？？？
import { 
  useSelector as useReduxSelector,
  TypedUseSelectorHook 
} from 'react-redux';
import { RootState } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;