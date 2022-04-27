import logo from './logo.svg';
import './App.css';
import AdminNavBar from './Components/Admin/AdminNavBar';
import AddBook from './Views/Admin/AddBook';
import AllBooks from './Components/Admin/AllBooks';
import DashBoard from './Views/Admin/DashBoard';
import AdminProfile from './Components/Admin/AdminProfile';
import Login from './Views/Authorization/Login';
import Register from './Views/Authorization/Register';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';
function App() {
  // const admin ={
  //   'firstname':'Ahmed',
  //   'lastname':'Ahmed',
  //   'email':'ahmed@gmail.com',
  //   'password':'123s',
    
  // }
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/"> <Login/>    </Route>
          <Route  exact path="/Register"  > <Register/>     </Route>
          <Route  exact path="/admin"  >< DashBoard/>  </Route>
          <Route  exact path="/addbook"  >< AddBook/>  </Route>
          <Route  exact path="/admin/profile"  >< AdminProfile/>  </Route>
          
        </Switch>


      </Router>
      
    </div>
  );
}

export default App;
