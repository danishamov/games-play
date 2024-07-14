import { useContext, useEffect } from "react";

import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../context/authContext";

export default function LogOut() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService
            .logOut()
            .then(() => logoutHandler())
            .catch(() => navigate(Path.Home));
    }, []);
}
