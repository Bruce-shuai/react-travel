import React from 'react';
import { HomePage, SignInPage, RigisterPage, DetailPage } from './Pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


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
    <Route render={()=><div>404 not fount 页面去火星了!</div>} />
   </Switch>
  
   </BrowserRouter>
  );
}

export default App;

