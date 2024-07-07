import {Routes, Route} from 'react-router-dom'

import FooterKomponen from './components/FooterKomponen'
import NavBarKomponen from './components/NavBarKomponen'


import CaraOrder from './pages/CaraOrder'
import Faq from './pages/Faq'
import HomePage from './pages/HomePage'
import Layanan from './pages/Layanan'
import SyaratKetentuan from './pages/SyaratKetentuan'

function App() {
  return <div>
    <NavBarKomponen/> 
    <Routes>
      <Route path='/' Component={HomePage}/>
      <Route path='/cara-order' Component={CaraOrder}/>
      <Route path='/faq' Component={Faq}/>
      <Route path='/layanan' Component={Layanan}/>
      <Route path='/syarat-ketentuan' Component={SyaratKetentuan}/>
    </Routes>
    <FooterKomponen/>
  </div>
}

export default App
