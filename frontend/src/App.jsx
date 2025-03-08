import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarPles from './components/NavBarPles'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import PlesoviPregled from './pages/plesovi/PlesoviPregled'



function App() {
  return (
    <>
    <Container>
      <NavBarPles />
      
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna />}/>
        <Route path={RouteNames.PLESOVI_PREGLED} element={<PlesoviPregled/>}/>
      </Routes>

      <hr></hr>
      &copy; Luka Valenić
    </Container>

    </>
  )
}

export default App
