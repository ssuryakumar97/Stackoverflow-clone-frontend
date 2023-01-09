import React,{ useEffect} from 'react';
import './App.css';
import Header  from './components/Header/Header';
import {  BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Stackoverflow from "./components/Stackoverflow";
import Question from './components/Stackoverflow/Add-Question/Question';
import ViewQuestion from './components/ViewQuestion'
import Auth from '../src/components/Auth/index';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch]);

  const PrivateRoute = ({ user }) => {
    console.log(user)
   return user ? 
   <>
   <Outlet />
   </> : <Navigate to='/auth' />
}
  
  return (
    <div className="App">
      <Router>
        <Header /> 
           <Routes>
              <Route path='/auth' element= {<Auth/>} />
              <Route path='/add-question' element = {<PrivateRoute user={user} />} >
                <Route exact path='/add-question' element= {<Question/>} />
              </Route>
              <Route path='/question' element = {<PrivateRoute user={user} />} >
                <Route exact path='/question' element= {<ViewQuestion/>} />
              </Route>
              <Route path='/' element = {<PrivateRoute user={user} />} >
                <Route exact path='/' element= {<Stackoverflow/>} />
              </Route>
           </Routes>
      </Router>
    </div>
  );
}

export default App;
