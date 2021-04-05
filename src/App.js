import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import MovieDetail from "./Components/MovieDetail";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/movie">
                        <Movie />
                    </Route>
                    <Route exact path="/movie/:id">
                        <MovieDetail />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
