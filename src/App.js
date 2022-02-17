import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'
import { LoginPage } from './LoginPage/LoginPage'
import { ListeTransaction } from './ListeTransaction/ListeTransaction'
import  EnhancedTable  from './Component/TableTransactions/TableTransactions'

function App() {
  return (
        <div className="App">
          <ResponsiveAppBar />
          
  
            <div className="">
                <div className="">
                    <Routes>
                        <Route exact path="/login" element={<LoginPage />} />
                      <Route exact path='/listeTransaction' element={<EnhancedTable />} />
                      <Route exact path='/' element={<EnhancedTable />} />
                    </Routes>
                </div>
            </div>
        </div>
  );
}

export default App;
