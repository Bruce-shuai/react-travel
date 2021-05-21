// 这里的createStore是一个函数，我们通过这个函数来创建数据仓库store
import { createStore } from 'redux';
// 这里的langulageReducer应该是自己命的名字
import languageReducer from './language/languageReducer';
// 需要提供reducer作为createStore函数的参数。
// store其实就是一个带有推送功能的仓库而已，
// 而reducer是store中处理数据的方法。 
// reducer中详细记录了各种数据处理的过程
const store = createStore(languageReducer);

// 这是一个什么神操作？！！
// 类型的定义使用type关键字   类型的反向注入...??? 
export type RootState = ReturnType<typeof store.getState>

export default store;