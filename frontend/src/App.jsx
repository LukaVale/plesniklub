import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarPles from './components/NavBarPles'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import PlesoviPregled from './pages/plesovi/PlesoviPregled'
import PlesoviDodaj from './pages/plesovi/PlesoviDodaj'
import PlesoviPromjena from './pages/plesovi/PlesoviPromjena'


function App() {
  return (
    <>
    <Container>
      <NavBarPles />
      
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna />} />
        <Route path={RouteNames.PLESOVI_PREGLED} element={<PlesoviPregled />} />
        <Route path={RouteNames.PLES_NOVI} element={<PlesoviDodaj/>}/>
        <Route path={RouteNames.PLES_PROMJENA} element={<PlesoviPromjena/>}/>
      </Routes>

      <hr></hr>
      &copy; Luka Valenić
    </Container>

    </>
  )
}

export default App
