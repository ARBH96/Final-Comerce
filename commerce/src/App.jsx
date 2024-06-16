import {BrowserRouter} from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex";
import Header from "./components/Header";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { SearchContext, SearchProvider } from "./context/SearchContext";
function App(){
  return(
    <>
    <AuthProvider>
      <SearchProvider>
        <BrowserRouter>
        <Header/>
        <RoutesIndex/>
        </BrowserRouter>
      </SearchProvider>
    </AuthProvider>
    </>
  );
}
export default App;