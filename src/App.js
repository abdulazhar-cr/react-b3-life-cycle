import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";
import AvatarProfile from "./AvatarProfile";
// import { Avatar2 } from "./Profile";
// import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing scientists</h1>
        <AvatarProfile
          size={100}
          person={{ name: "xyz", imageId: "1bX5QH6" }}
        />
        <AvatarProfile
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
        <AvatarProfile
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh",
          }}
        />
        <AvatarProfile
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />

        {/* <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile /> */}
      </header>
    </div>
  );
}

export default App;
