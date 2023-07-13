import styled from "styled-components"
import Home from "./components/HomePage"
import PortfolioPage from "./components/PortfolioPage"
import AboutPage from "./components/AboutPage"
import ContactPage from "./components/ContactPage"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Container>
  )
}

export default App
