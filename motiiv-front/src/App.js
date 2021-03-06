import Detail from './pages/Detail/Detail';
import Privacy from './pages/Privacy/Privacy';
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
import SigninModal from './components/common/Login/SignInModal';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useEffect } from 'react';
import FloatBtn from './components/common/Button/FloatBtn';
import { getProfile, changeIsLogged } from './modules/user';
import { getWorkspaces } from './modules/mymotiiv';
import { whiteColors, darkColors } from './style/color';
import { authToken } from './lib/api/auth';

function App({ props }) {
  const dispatch = useDispatch();
  const [showLoginModalState, setShowLoginModalState] = useState(false);

  const location = useLocation();
  const { isLoggedIn } = useSelector(state => state.user);
  const { onFloatBtn } = useSelector(state => state.mymotiiv);
  const { workspaces } = useSelector(state => state.mymotiiv);

  // 다크모드
  const setColorType = colors => {
    for (const [key, value] of Object.entries(colors)) {
      document.documentElement.style.setProperty(`--${key}`, `${value}`);
    }
  };

  useEffect(() => {
    localStorage.getItem('isDark')
      ? setColorType(darkColors)
      : setColorType(whiteColors);
    const token = localStorage.getItem('userToken')
      ? JSON.parse(localStorage.getItem('userToken'))
      : null;
    if (token !== null) {
      authToken(token).then(res => {
        if (res.success) {
          dispatch(getWorkspaces());
          dispatch(getProfile());
          dispatch(changeIsLogged());
        } else {
          // 토큰은 있는데 유효한 토큰이 아닐 때 localstorage삭제
          localStorage.removeItem('userToken');
        }
      });
    }
  }, []);

  /*   useEffect(() => {
    setColorType(whiteColors);
    dispatch(getWorkspaces());
    dispatch(getProfile());
    hideModal();
  }, [isLoggedInIn]); */

  const hideModal = () => {
    setShowLoginModalState(false);
    document.body.style.overflow = 'visible';
  };

  const showModal = () => {
    setShowLoginModalState(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <Navbar
        location={location.pathname}
        showModal={showModal}
        isloggined={isLoggedIn}
      />
      <Switch>
        {/* Main & Category & MyMotiiv */}
        <Route
          exact
          path="/"
          render={props => (
            <Main props={props} showModal={showModal} isLoggined={isLoggedIn} />
          )}
        ></Route>
        <Route
          path="/category/:hashTag"
          render={props => (
            <Category
              props={props}
              showModal={showModal}
              isLoggined={isLoggedIn}
            />
          )}
        ></Route>
        {
          <Route
            exact
            path="/mymotiiv"
            render={props => (
              <MyMotiiv
                props={props}
                showModal={showModal}
                isLoggined={isLoggedIn}
              />
            )}
          ></Route>
        }
        <Route
          exact
          path="/privacy"
          render={props => <Privacy props={props} />}
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
          render={props => (
            <Detail
              props={props}
              showModal={showModal}
              isLoggined={isLoggedIn}
            />
          )}
        ></Route>
        {/* Upload */}
        <Route
          exact
          path="/upload"
          render={props => <Upload props={props} />}
        ></Route>
      </Switch>
      <SigninModal hideModal={hideModal} isShow={showLoginModalState} />
      <FloatBtn workspaces={workspaces} isShow={onFloatBtn && isLoggedIn} />
      <BottomBanner
        isShow={
          location.pathname !== '/setting' &&
          location.pathname !== '/category/0'
        }
      />
      <Footer isShow={location.pathname !== '/setting'} />
      <MyNavBar isLoggined={isLoggedIn} location={location.pathname}></MyNavBar>
    </>
  );
}

export default React.memo(App);
