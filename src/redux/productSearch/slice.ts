import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  // 分页操作...
  pagination: any
}

// 强制定义初始化的数据
const initialState : ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
}

export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  // 这里的逻辑感觉没有搞懂呀~  头部信息这些有啥用哦~
  async (paramaters: {
    keywords: string,
    nextPage: number | string,
    pageSize: number | string,
  }, thunkAPI) => {
    // 这种，是不是就不算Restful API了呢？
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      // 这个关键词的搜索是这么的随意吗？
      url += `&keyword=${paramaters.keywords}`;
    }

    const response = await axios.get(url);
    return {
      data: response.data,   // response.data 是响应主体的数据
      // 把字符串转化为js对象
      // 这里是取的响应头部，x-pagination字段的数据。这个字段的数据可在postman软件里看见。
      pagination: JSON.parse(response.headers['x-pagination'])  
    };

  }
)

export const ProductSearchSlice = createSlice({
  name: 'productSearch',   // 命名空间的名称
  initialState,            // 初始化数据~这里是RTK 强制我们初始化数据
  reducers: {              // 这里的reducers 是把action 和 reducer捆绑在一起了，不需要单独定义action了
                           // 这里的reducer是一个对象，而不是一个过程。每个对象对应着一个action，同时也对应着这个action的处理函数
                           // 这是面向对象而不是面向过程，所以不需要再写switch语句了
  },
  extraReducers: {
    [searchProduct.pending.type]: (state) => {   // 现在action.type和fetchStart 已经完美结合了
      // return {...state, loading: true}
      // 这个只能说牛逼~ 底层会帮我们转化
      state.loading = true;   
    },
    [searchProduct.fulfilled.type]: (state, action) => {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
      state.error = null;
    },
    [searchProduct.rejected.type]: (state, action: PayloadAction<string|null>) => {
      // const ddd = action.payload;
      state.loading = false;
      state.error = action.payload;
    }
  }
})