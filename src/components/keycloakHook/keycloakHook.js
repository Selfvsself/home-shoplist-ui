import React, {useEffect, useRef} from "react";
import {useKeycloak} from "@react-keycloak/web";

const KeycloakHook = (props) => {
    const {onKeycloak} = props;
    const {keycloak, initialized} = useKeycloak();
    if (!keycloak.authenticated) {
        keycloak.login();
    } else {
        // onKeycloak(keycloak)
    }

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
        }
        onKeycloak(keycloak); // performing action after state has updated
    }, [onKeycloak]);

    return null;
}

export default KeycloakHook;
