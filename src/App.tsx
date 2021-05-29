import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage, SignInPage, RigisterPage, DetailPage, SearchPage } from './Pages';

function App() {
  return (
   <BrowserRouter>
    <Switch>
      {/* 注意： 这里是用的HomePage，而不是<HomePage /> */}
      <Route exact path='/' component={HomePage}/> 
      <Route path='/signIn' component={SignInPage} />
      <Route path='/rigister' component={RigisterPage} />
      {/* 参数使用冒号来引导~ */}
      <Route path='/detail/:touristRouteId' component={DetailPage} />
      {/* 这里的问号，代表参数是可选的。 keywords是关键词搜索~关键词搜索原来这么简单~ */}
      <Route path='/search/:keywords?' component={SearchPage} />
      <Route render={()=><div>404 not fount 页面去火星了!</div>} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;

