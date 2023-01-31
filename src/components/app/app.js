import React, {Component} from "react";
import "./app.css"
import AppHeader from "../appHeader";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {default as keycloakClient} from "../../Keycloak";
import AppProductPage from "../appProductPage";
import KeycloakHook from "../keycloakHook";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keycloakReady: false,
            keycloakAuth: false,
            keycloak: null,
            authToken: null,
            roomId: null
        }
    }

    getKeycloak = (keycloak) => {
        console.log("subject", keycloak.subject);
        this.setState(() => ({
            keycloak: keycloak,
            authToken: keycloak.token,
            roomId: keycloak.subject
        }));
    }

    onKeycloakEvent = (event, error) => {
        console.log('onKeycloakEvent', event, error)
        console.log(`Keycloak Event ${event}`);
        if (event && event === 'onReady') {
            this.setState(() => ({keycloakReady: true}));
        }
    }

    onKeycloakLogout = () => {
        const {keycloak} = this.state;
        keycloak.logout();
    }

    render = () => {
        const {keycloak, keycloakReady, authToken, roomId} = this.state;
        const keycloakHook = keycloakReady ?
            <KeycloakHook onKeycloak={this.getKeycloak}/> : null;
        const page = (keycloak && keycloak.authenticated) ?
            <AppProductPage
                token={authToken}
                onAddItem={this.onAddItem}
                roomId={roomId}
                onLogout={this.onKeycloakLogout}/>
            : null;

        const theme = createTheme({
            palette: {
                primary: {
                    main: '#ffffff',
                },
                secondary: {
                    main: '#000f',
                },
                success: {
                    main: '#689f38'
                },
                background: {
                    paper: "#555"
                },
                text: {
                    primary: '#fff'
                },
                action: {
                    selected: '#ff0000'
                }
            }
        });
        return (
            <div className="wrapper">
                <ReactKeycloakProvider
                    authClient={keycloakClient}
                    onEvent={this.onKeycloakEvent}>
                    {keycloakHook}
                    <div className="app-content">
                        <ThemeProvider theme={theme}>
                            {page}
                        </ThemeProvider>
                    </div>
                </ReactKeycloakProvider>
            </div>
        );
    }
}
