// 在redux中不管是reducer还是action都是纯函数。
// 所以该文件输出的最终结果就是一个函数

// 这里使用的是匿名函数
// state是原数据仓库的旧数据，action是指挥reducer函数做出数据变换的指令
// 最后结果是一个新的数据
// 整个reducer函数就是一个以旧换新的过程...

import i18n from 'i18next';
import {CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes} from './languageActions';

interface LanguageState {
  // 这里其实就限定了字符串的选项
  language: 'en' | 'zh', 
  languageList: {name: string, code: string}[]
}

const defaultState: LanguageState = {
  language: "zh",   // 这里感觉用得妙啊~ 这里把属性名和值都限定了~
  languageList: [
    {name: "中文", code: "zh"},
    {name: "English", code: "en"},
  ]
}

// 这里绑定action的类型就真的厉害...
export default (state = defaultState, action:LanguageActionTypes) => {
  // 可以打印下数据，看看当前数据里面有什么。 这是一个好方法
  console.log(state, action);
  switch (action.type) {
    case CHANGE_LANGUAGE: 
      i18n.changeLanguage(action.payload);   // 直接这样处理是不标准的，有副作用
      // 这个是覆盖state的action.payload
      // const newState = {...state, language: action.payload}
      // return newState;
      return {...state, language: action.payload}
    case ADD_LANGUAGE: 
      // 这里似乎已经体现了ts的优势了
      // const newLanguageList = state.languageList;
      // newLanguageList.push(action.payload)
      // 这里是数组展开操作符
      console.log('state.lan',state.languageList);
    
      // const newState = {
      //   ...state, 
      //   languageList: [...state.languageList, action.payload],
      // }
      return {
        ...state, 
        languageList: [...state.languageList, action.payload],
      };
    default: 
      return state;
  }
}