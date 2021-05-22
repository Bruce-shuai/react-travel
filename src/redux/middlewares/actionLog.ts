/* redux中间件的公式 */
//  const middleware = (store) => (next) => (action) => {}
import { Middleware } from 'redux';
// 这个next方法是一个什么鬼呢？
export const actionLog : Middleware= (store) => (next) => (action) => {
  console.log('state 当前', store.getState());
  console.log('fire action', action);
  next(action)
  console.log('state 更新', store.getState())
}