import styled from "styled-components"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
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
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      {/* <Home /> */}
    </Container>
  )
}

export default App
