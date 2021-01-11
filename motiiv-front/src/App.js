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
import { getProfile, showSigninModal } from './modules/user';
import { getWorkspaces } from './modules/mymotiiv';

function App({ props }) {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(false);
  const [showLoginModalState, setShowLoginModalState] = useState(false);

  const location = useLocation();
  //const { showLoginModal } = useSelector(state => state.user);
  const { onFloatBtn } = useSelector(state => state.mymotiiv);
  const { workspaces } = useSelector(state => state.mymotiiv);

  useEffect(() => {
    dispatch(getWorkspaces());
    dispatch(getProfile());
    //dispatch(showSigninModal());
  }, []);

  const hideModal = () => {
    setShowLoginModalState(false);
  };

  const showModal = () => {
    setShowLoginModalState(true);
  };

  return (
    <>
      <Navbar showModal={showModal} isloggined={loginState} />
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
      <SigninModal hideModal={hideModal} isShow={showLoginModalState} />
      <FloatBtn workspaces={workspaces} isShow={onFloatBtn} />
      <BottomBanner isShow={location.pathname != '/setting'} />
      <Footer isShow={location.pathname != '/setting'} />
      <MyNavBar loginState={loginState} tag={location.pathname}></MyNavBar>
    </>
  );
}

export default App;
