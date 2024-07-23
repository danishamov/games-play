import { useContext } from "react";
import AuthContext from "../context/authContext";

export default function withAuth(Component) {
    const EnhancedComponent = (props) => {
        const auth = useContext(AuthContext);

        return <Component {...props} {...auth} />;
    };

    return EnhancedComponent;
}
