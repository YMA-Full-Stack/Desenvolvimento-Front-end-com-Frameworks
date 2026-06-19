import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

import { auth } from "./services/firebase";

import Header from "./components/header";
import Footer from "./components/footer";

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
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/profs" element={<Profs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/schedule" element={<Schedule user={user} />} />
        <Route path="/agenda" element={<Agenda user={user} />} />
        <Route path="/docs" element={<Docs user={user} />} />
        <Route path="/msgs" element={<Msgs user={user} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
