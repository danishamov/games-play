import { useState } from "react";

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializeValue;

        if (typeof value === "function") {
            serializeValue = JSON.stringify(value(state));
        } else {
            serializeValue = JSON.stringify(value);
        }

        serializeValue = JSON.stringify(value);

        localStorage.setItem(key, serializeValue);
    };

    return [state, setPersistedState];
}
