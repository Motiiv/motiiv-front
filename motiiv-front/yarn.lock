import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Upload from './pages/Upload/Upload';
import Main from './pages/Main/Main';
import Category from './pages/Category/Category';
import MyMyotiiv from './pages/MyMotiiv/MyMyotiiv';
import Admin from './pages/Admin/Admin';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 예제니까 지우쇼
const MainText = styled.div`
  color: ${props => props.theme.primary};
`;
function App() {
  return (
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
        render={props => <MyMyotiiv props={props} />}
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
      <Route path="/*">
        404 NOT FOUND<MainText>dddd</MainText>
      </Route>
    </Switch>
  );
}

export default App;