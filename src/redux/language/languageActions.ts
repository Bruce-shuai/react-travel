export const CHANGE_LANGUAGE = 'change_language';
export const ADD_LANGUAGE = 'add_language';

interface ChangeLanguageAction {
  // 注意： 在ts中 typeof 可用来获取一个变量或对象的类型
  type: typeof CHANGE_LANGUAGE,
  payload: 'zh' | 'en',
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: {name: string, code: string}
}

// 这里的type的意思是什么  type就是取别名
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

export const changeLanguageActionCreator = (languageCode: 'zh' | 'en'):ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string):AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    // 这里的用法 { name, code } 是个啥玩意？
    payload: {name, code},
  }
}