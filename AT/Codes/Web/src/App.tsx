import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

import { auth } from "./services/firebase";

import Header from "./components/header";
import Footer from "./components/footer";
import Guard from "./components/guard";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Profs from "./pages/profs";
import Details from "./pages/details";
import Schedule from "./pages/schedule";
import Agenda from "./pages/agenda";
import Docs from "./pages/docs";
import Msgs from "./pages/msgs";
import About from "./pages/about";
import Mobile from "./pages/mobile";

import "./styles.css";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const parar = onAuthStateChanged(auth, (usuarioAtual) => {
      setUser(usuarioAtual);
    });

    return () => {
      parar();
    };
  }, []);

  function sair() {
    signOut(auth);
  }

  return (
    <div className="layout">
      <Header user={user} sair={sair} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profs" element={<Profs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobile" element={<Mobile />} />

        <Route
          path="/profile"
          element={
            <Guard user={user}>
              <Profile user={user} />
            </Guard>
          }
        />

        <Route
          path="/schedule"
          element={
            <Guard user={user}>
              <Schedule user={user} />
            </Guard>
          }
        />

        <Route
          path="/agenda"
          element={
            <Guard user={user}>
              <Agenda user={user} />
            </Guard>
          }
        />

        <Route
          path="/docs"
          element={
            <Guard user={user}>
              <Docs user={user} />
            </Guard>
          }
        />

        <Route
          path="/msgs"
          element={
            <Guard user={user}>
              <Msgs user={user} />
            </Guard>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
