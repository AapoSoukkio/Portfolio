import styled from "styled-components"
import About from "./components/About"
import Contact from "./components/Contact"
import Landing from "./components/Landing"
import Projects from "./components/Projects"

const Container = styled.div`
  height: 100vh;
  background-color: cornflowerblue;
`

function App() {

  return (
    <Container>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
