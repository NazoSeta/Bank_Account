import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddAccount from './users/AddAccount';
import EditAccount from './users/EditAccount';
import ViewAccount from './users/ViewAccount';
import DepositAccount from './users/DepositAccount';
import WithdrawAccount from './users/WithdrawAccount';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route excat path='/' element={<Home />} />
          <Route excat path='/addaccount' element={<AddAccount />} />
          <Route excat path='/editaccount/:id' element={<EditAccount />} />
          <Route excat path='/viewaccount/:id' element={<ViewAccount />} />
          <Route excat path='/editaccount/:id' element={<EditAccount />} />
          <Route excat path='/depositaccount/:id' element={<DepositAccount />} />
          <Route excat path='/withdrawaccount/:id' element={<WithdrawAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
