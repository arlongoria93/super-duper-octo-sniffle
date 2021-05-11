import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </>
  );
}

export default App;
