import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { UserContextProvider } from '../context/UserContext';
import MovieList from "../Componants/MovieList"
import Movie from "../Componants/Movie"

const Routings = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          
          <Route path="/movies" element={<Movie />} />
          <Route path="/movielist" element={<MovieList />} />
        </Routes>
    </Router>
    </UserContextProvider>
  )
}

export default Routings