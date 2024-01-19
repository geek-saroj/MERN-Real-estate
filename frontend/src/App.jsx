import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import SingUp from './pages/SingUp';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/Create.Listing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';



export default function App() {
  return (<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Sing-in" element={<Signin />} />
    <Route path="/Sign-Up" element={<SingUp />} />
    <Route path='/search' element={<Search />} />
    <Route path="/update-listing/:listingId" element={<UpdateListing />} />
    <Route path='/listing/:listingId' element={<Listing />} />
    
    <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
   <Route path='/create-listing' element={<CreateListing />} /></Route>
    
  </Routes>
  </BrowserRouter>
    
  )
}
