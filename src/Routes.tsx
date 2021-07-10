import { BrowserRouter as Router, Switch } from "react-router-dom";
import AnimatedRoute from "./components/AnimatedRoute";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AnimatedRoute path="/" component={Home} />
        <AnimatedRoute path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
