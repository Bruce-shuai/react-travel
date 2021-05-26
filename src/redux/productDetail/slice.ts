import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface ProductDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

// 强制定义初始化的数据
const initialState : ProductDetailState = {
  loading: true,
  error: null,
  data: null,
}

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (touristRouteId: string, thunkAPI) => {
    const {data} = await axios.get(
      `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
    )
    return data;
  }
)

export const ProductDetailSlice = createSlice({
  name: 'productDetail',   // 命名空间的名称
  initialState,            // 初始化数据~这里是RTK 强制我们初始化数据
  reducers: {              // 这里的reducers 是把action 和 reducer捆绑在一起了，不需要单独定义action了
                           // 这里的reducer是一个对象，而不是一个过程。每个对象对应着一个action，同时也对应着这个action的处理函数
                           // 这是面向对象而不是面向过程，所以不需要再写switch语句了
  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {   // 现在action.type和fetchStart 已经完美结合了
      // return {...state, loading: true}
      // 这个只能说牛逼~ 底层会帮我们转化
      state.loading = true;   
    },
    [getProductDetail.fulfilled.type]: (state, action: PayloadAction<string|null>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getProductDetail.rejected.type]: (state, action: PayloadAction<string|null>) => {
      // const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    }
  }
})