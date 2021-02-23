import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.js";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />

        <Switch>
          <Route path="/store">Store route</Route>
          <Route path="/about">About route</Route>
          <Route path="/app">App route</Route>
          <Route path="/faq">F.A.Q. route</Route>
          <Route path="/">Home route</Route>
        </Switch>
      </Router>
    </div>
  );
}
