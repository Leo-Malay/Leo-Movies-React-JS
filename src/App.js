import { HashRouter, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import MovieDetail from "./Components/MovieDetail";

const App = () => {
    return (
        <div className="App">
            <HashRouter basename="/">
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
            </HashRouter>
        </div>
    );
};

export default App;
