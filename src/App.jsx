import Header from "../Components/Header";
import Main from "../Components/main";
import Languages from "../assets/languages";

const App = () => {
  return (
    <>
      < Header />
      < Main languages={Languages} />
    </>
  )
}

export default App
