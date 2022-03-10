import { GlobalStyle } from "./styles/global"
import Routes from './routes'
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
   <>
    <GlobalStyle />
    <Header />
    <Routes />
   
   </>
  );
}

export default App;
