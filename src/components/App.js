import React from "react";

import NavBar from "./NavBar";
// eslint-disable-next-line
import GifListContainer from './GifListContainer';
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
    </div>
  );
}

export default App;
