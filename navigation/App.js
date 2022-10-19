import React from "react";
import "./config/firebase";
import RootNavigation from "./navigation";

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <RootNavigation />;
}
