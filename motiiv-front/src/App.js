import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';
import Upload from './pages/Upload/Upload';
import Main from './pages/Main/Main';
import Category from './pages/Category/Category';
import MyMotiiv from './pages/MyMotiiv/Mymotiiv';
import Setting from './pages/Setting/Setting';
import Admin from './pages/Admin/Admin';
import Navbar from './components/common/Navbar/Navbar';
import BottomBanner from './components/common/Banner/BottomBanner';
import Footer from './components/common/Footer/Footer';
import MyNavBar from './pages/MyMotiiv/sections/MyNavbar';
import React, { useState } from 'react';
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useEffect } from 'react';
import FloatBtn from './components/common/Button/FloatBtn';
/* import { IWantCookies } from './lib/api/user';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie'; */

function App({ props }) {
  const [loginState, setLoginState] = useState({
    isLogin: false,
  });
  const location = useLocation();
  //const [cookies, setCookie] = useCookies(['user']);

  /*   const IWantCookiesPlease = () => {
        setCookie(
      'userToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoi7Jqw7JiBIiwic25zSWQiOiIxIiwic29jaWFsVHlwZSI6Imtha2FvIiwiaWF0IjoxNjEwMTI3ODI3LCJleHAiOjE2MTI3MTk4MjcsImlzcyI6Im1vdGlpdiJ9.v0ksiTTsAKvrnR-iZyoNly1QntI94OtthUoCEy3o5c8',
      {
        path: '/',
      },
    );
    const result = IWantCookies();
    console.log(document.cookie);
    //console.log(Cookies.get('userToken'));
    //console.log(document.cookie);
    //setCookie('userToken', newName, { path: '/' });
  }; */

  return (
    <>
      <Navbar />
      {/*       <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
        <input
          style={{ fontWeight: 'bold' }}
          type="button"
          value="쿠키를 갖고 싶은가?ㅋ"
          onClick={IWantCookiesPlease}
        ></input>
      </div> */}
      {/* <MyModal/> */}
      <Switch>
        {/* Main & Category & MyMotiiv */}
        <Route
          exact
          path="/main"
          render={props => <Main props={props} />}
        ></Route>
        <Route
          path="/category/:hashTag"
          render={props => <Category props={props} />}
        ></Route>
        {
          <Route
            exact
            path="/mymotiiv"
            render={props => <MyMotiiv props={props} />}
          ></Route>
        }

        <Route
          exact
          path="/signup"
          render={props => <SignUp props={props} />}
        ></Route>
        {/* Setting */}
        <Route
          exact
          path="/setting"
          render={props => <Setting props={props} />}
        ></Route>
        {/* Admin */}
        <Route
          exact
          path="/admin"
          render={props => <Admin props={props} />}
        ></Route>
        {/* Detail */}
        <Route
          exact
          path="/detail/:id"
          render={props => <Detail props={props} />}
        ></Route>
        {/* Upload */}
        <Route
          exact
          path="/upload"
          render={props => <Upload props={props} />}
        ></Route>
      </Switch>
      <FloatBtn isShow={location.pathname !== '/mymotiiv'} />
      <BottomBanner />
      <Footer />
      <MyNavBar
        loginState={loginState.isLogin}
        tag={location.pathname}
      ></MyNavBar>
    </>
  );
}

export default App;
