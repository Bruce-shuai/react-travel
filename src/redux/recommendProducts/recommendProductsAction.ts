import { ThunkAction } from 'redux-thunk';
import {RootState} from '../store';
import axios from 'axios';
// 这里api的字符串使用全是大写，是什么个原理呢？
// 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_START = 
'FETCH_RECOMMEND_PRODUCTS_START' 
// 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = 
'FETCH_RECOMMEND_PRODUCTS_SUCCESS';
// 推荐信息api调用失败
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 
'FETCH_RECOMMEND_PRODUCTS_FAIL';

interface FatchRecommendProductStartAction {
  // 这样的typeof的使用是啥意思？ 为什么要这样使用呢？但是这个用法骚是真的骚
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FatchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any   // 因为是api的数据，不知道类型，所以用any来代替
}

interface FatchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
  payload: any   // 失败数据
}

// 不夸张的说，这个的结合真的是巧妙！！
export type RecommendProductsAction = 
// 第一行加个|应该纯粹是为了好看
| FatchRecommendProductStartAction 
| FatchRecommendProductSuccessAction 
| FatchRecommendProductFailAction;


/* 创建actionCreator */
// 这些命名是真的长...
export const fetchRecommendProductStartActionCreator = ():FatchRecommendProductStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}

// 有一个问题，这个函数的使用意义是什么呢？
export const fetchRecommendProductSuccessActionCreator = (data:any): FatchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const fetchRecommendProductFailActionCreator = (error:any): FatchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error
  }
}

export const giveMeDataActionCreator = () : ThunkAction<
  void, 
  RootState, 
  unknown, 
  RecommendProductsAction
> => async (dispatch, getState) => {
    dispatch(fetchRecommendProductStartActionCreator());
    try {
      // 注意 这里是http请求
      const response = await axios.get("http://123.56.149.216:8080/api/shoppingCart");
      // this.setState({
      //   loading: false,
      //   error: null,
      //   productList: response.data,
      // })
      dispatch(fetchRecommendProductSuccessActionCreator(response.data))
      // this.props.fetchSuccess(response.data)
    } catch (error) {
      // this.setState({
      //   error: error.message,
      //   loading: false
      // })
      // message 应该是error的一个属性，这个message 应该好好掌握掌握
      // this.props.fetchFail(error.message)
      dispatch(fetchRecommendProductFailActionCreator(error.message))
    }
}