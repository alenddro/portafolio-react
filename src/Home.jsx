import "./styles.css";
import { useState, useEffect } from "react";
import { Profile } from "./components/Profile";
import { Proyectos } from "./components/Proyectos";

function Home() {
  const [profile, setProfile] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const url = "https://my-json-server.typicode.com/alenddro/jsondb/db/";
  //https://my-json-server.typicode.com/alenddro/jsondb json data base

  const fetchPortafolio = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.profile);
        setProyectos(data.proyectos);
        console.log(proyectos);
      });
  };

  useEffect(() => {
    fetchPortafolio(url);
  }, []);

  return (
    <>
      <Profile profile={profile} />
      <Proyectos proyectos={proyectos} />
    </>
  );
}

export default Home;
