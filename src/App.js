import "./styles.css";
import { useState, useEffect } from "react";
import { Profile } from "./components/Profile";

function App() {
  const [profile, setProfile] = useState([]);
  const [portafolio, setPortafolio] = useState([]);

  const url = "https://my-json-server.typicode.com/alenddro/jsondb/db/";
  // //https://my-json-server.typicode.com/alenddro/jsondb json data base

  const fetchPortafolio = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.profile);
        console.log(profile);
      });
  };

  useEffect(() => {
    fetchPortafolio(url);
  }, []);

  return (
    <>
      <Profile profile={profile} />
    </>
  );
}

export default App;
