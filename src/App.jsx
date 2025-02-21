import Body from "./components/Body"
import Counter from "./components/Counter"
import ExampleMotion from "./components/ExampleMotion"
import NavBar from "./components/NavBar"
import { FullSeparator } from "./utility/separator"

function App() {

  return (
    <>
      <NavBar />

      <Body />

      <FullSeparator />

      <ExampleMotion />

      <FullSeparator />

      <Counter />
    </>
  )
}

export default App
