import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Upload from './pages/Upload/Upload';
import Main from './pages/Main/Main';
import Category from './pages/Category/Category';
import Mymotiiv from './pages/MyMotiiv/Mymotiiv';
import Admin from './pages/Admin/Admin';
import Navbar from './components/common/Navbar/Navbar';
import BottomBanner from './components/common/Banner/BottomBanner';
import Footer from './components/common/Footer/Footer';
import MyModal from './pages/MyMotiiv/MyModal/MyModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App({ props }) {
  return (
    <>
      <Navbar/>
      {/* <MyModal/> */}
      <Switch>
        {/* Main & Category & MyMotiiv */}
        <Route
          exact
          path="/main"
          render={props => <Main props={props} />}
        ></Route>
        <Route
          exact
          path="/category"
          render={props => <Category props={props} />}
        ></Route>
        <Route
          exact
          path="/mymotiiv"
          render={props => <Mymotiiv props={props} />}
        ></Route>
        {/* SignUp & SignIn */}
        <Route
          exact
          path="/signup"
          render={props => <SignUp props={props} />}
        ></Route>
        <Route
          exact
          path="/signin"
          render={props => <SignIn props={props} />}
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
      <BottomBanner />
      <Footer />
    </>
  );
}

export default App;
