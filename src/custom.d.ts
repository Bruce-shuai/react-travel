// 定义声明 需要使用ts的关键词： declare、module
// 这句话表示只要我们在import以.css结尾的文件时都会遵循{}里的约定
// 将会导出key所在的对象，而原始的类名和相应的值都会被转化为相应的对象
declare module "*.css" {
  const css: {[key: string]:string};
  export default css;
}

// declare module 我好像都还没使用过...