import './App.css';
import Detail from './pages/Detail/Detail';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Upload from './pages/Upload/Upload';
import Main from './pages/Main/Main';
import Category from './pages/Category/Category';
import MyMyotiiv from './pages/MyMotiiv/MyMyotiiv';
import Admin from './pages/Admin/Admin';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

const object = [
  {
      idx : 0,
      video : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      time : "03:30",
      title : "죄송합니다.",
      views: "100",
      channel : "dk-master",
      tag : ["존맛","일상","코노"]
  },
  {
    idx : 1,
    video : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    time : "03:30",
    title : "죄송합니다.",
    views: "100",
    channel : "dk-master",
    tag : ["존맛","일상","코노"]
  },
  {
    idx : 2,
    video : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    time : "03:30",
    title : "죄송합니다.",
    views: "100",
    channel : "dk-master",
    tag : ["존맛","일상","코노"]
  },
  {
    idx : 3,
    video : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    time : "03:30",
    title : "죄송합니다.",
    views: "100",
    channel : "dk-master",
    tag : ["존맛","일상","코노"]
  },
  {
    idx : 4,
    video : "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    time : "03:30",
    title : "죄송합니다.",
    views: "100",
    channel : "dk-master",
    tag : ["존맛","일상","코노"]
  }
]

function App() {
  return (
        <Switch>
          {/* Main & Category & MyMotiiv */}
          <Route exact path='/main' render={(props)=>(<Main props={props} object={object} />)}></Route>
          <Route exact path='/category' render={(props)=>(<Category props={props} />)}></Route>
          <Route exact path='/mymotiiv' render={(props)=>(<MyMyotiiv props={props} />)}></Route>
          {/* SignUp & SignIn */}
          <Route exact path='/signup' render={(props)=>(<SignUp props={props}/>)}></Route> 
          <Route exact path='/signin' render={(props)=>(<SignIn props={props}/>)}></Route>
          {/* Admin */}
          <Route exact path='/admin' render={(props)=>(<Admin props={props} />)}></Route>
          {/* Detail */}
          <Route exact path='/detail/:id' render={(props)=>(<Detail props={props} />)}></Route>
          {/* Upload */}
          <Route exact path='/upload' render={(props)=>(<Upload props={props}/>)}></Route>
          <Route path='/*'>404 NOT FOUND</Route>
        </Switch>
  );
}

export default App;