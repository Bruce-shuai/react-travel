// 在redux中不管是reducer还是action都是纯函数。
// 所以该文件输出的最终结果就是一个函数

// 这里使用的是匿名函数
// state是原数据仓库的旧数据，action是指挥reducer函数做出数据变换的指令
// 最后结果是一个新的数据
// 整个reducer函数就是一个以旧换新的过程...

interface LanguageState {
  language: 'en' | 'zh', 
  languageList: {name: string, code: string}[]
}

const defaultState: LanguageState = {
  language: "zh",   // 这里感觉用得妙啊~ 这里把属性名和值都限定了~
  languageList: [
    {name: "中文", code: "zh"},
    {name: "English", code: "en"}
  ]
}

export default (state = defaultStatus, action:any) => {
  const newState = state;
  return newState;
}