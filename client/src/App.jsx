import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AuthContext from "./context/authContext";
import * as authService from "./services/authService";
import Path from "./paths";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameDetails from "./components/game-details/GameDetails";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <div id="box">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<GameList />} />
                    <Route path="/game/create" element={<GameCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/game/:gameId" element={<GameDetails />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
