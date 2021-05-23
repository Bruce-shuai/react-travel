// 这是个action creator  模式采用的就是工厂模式

/** 将action.type 全部变为了 常量 */
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

// 这里采用的就是工厂模式 并且 加上TS简直就是王炸~  type值是不变的， payload值是变化的~
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