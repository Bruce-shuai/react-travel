import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export const ProductDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    fetchStart: (state) => {
      // return {...state, loading: true}
      // 这个只能说牛逼~ 会底层帮我们转化
      state.loading = true;   
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFail: (state, action: PayloadAction<string|null>) => {
      // const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    }
  }
})