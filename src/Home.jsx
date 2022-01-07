import "./styles.css";
import { useState, useEffect } from "react";
import { Profile } from "./components/Profile";
import { Proyectos } from "./components/Proyectos";
import { Practicas } from "./components/Practicas";

function Home() {
  const [profile, setProfile] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [practicas, setPracticas] = useState([]);
  const url = "https://my-json-server.typicode.com/alenddro/jsondb/db/";
  //https://my-json-server.typicode.com/alenddro/jsondb json data base

  const fetchPortafolio = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.profile);
        setProyectos(data.proyectos);
        setPracticas(data.practicas);
      });
  };

  useEffect(() => {
    fetchPortafolio(url);
  }, []);

  return (
    <>
      <div className="container-fluid bg-dark">
        <nav className="navbar-light bg-dark text-center">
          <h1 className="text-light">SOBRE MI</h1>
        </nav>
        <div className="container-sm">
          <Profile profile={profile} />
          <Proyectos proyectos={proyectos} />
          <Practicas practicas={practicas} />
        </div>
      </div>
    </>
  );
}

export default Home;
