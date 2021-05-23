// 这里的createStore是一个函数，我们通过这个函数来创建数据仓库store
import { createStore, combineReducers, applyMiddleware } from 'redux';
// 这里的langulageReducer应该是自己命的名字，因为导出的时候是匿名函数
import languageReducer from './language/languageReducer';
// recommendProductsReducer这个也是自己命的名字
import recommendProductsReducer from './recommendProducts/recommendProductsReducer';
// 需要提供reducer作为createStore函数的参数。
// store其实就是一个带有推送功能的仓库而已，
// 而reducer是store中处理数据的方法。 
// reducer中详细记录了各种数据处理的过程

import thunk from 'redux-thunk';
import { actionLog } from './middlewares/actionLog';


// 是一个对象   rootReducer 是一个约定俗成的名称，最好遵守，显得更专业
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer, 
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

// 这是一个什么神操作？！！
// 类型的定义使用type关键字来声明   类型的反向注入...??? 
// 说实话，这里的RootState 用得是真的骚啊~   getState 也用得好~
// 类型的反向注入，使用ReturnType 来从范型中获得他的返回类型
export type RootState = ReturnType<typeof store.getState>

export default store;