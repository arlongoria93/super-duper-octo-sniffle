import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  //localhose:3000/
  // my-page.com
  return (
    <>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetups">
        <NewMeetupPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </>
  );
}

export default App;
