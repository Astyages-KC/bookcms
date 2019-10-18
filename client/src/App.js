import React from "react";
import BookSearchs from "./booksearch/BookSearchs.js";
import BookEntry from "./bookentry/BookEntry.js";
import NavBar from "./navbar/NavBar.js";
import Footer from "./footer/Footer.js";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
        <Switch>
          <Route path="/booksearch" component={BookSearchs} />
          <Route exact path="/" component={BookEntry} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
