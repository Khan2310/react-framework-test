import React from 'react';
import TRComponent from "tm-react/src/artifacts/component/tr-component";




export default class LoginView extends TRComponent<any, any> {
    renderUI() {
        return (
            <React.Fragment>
                <h1>Bismillah to My View From Main Application</h1>
            </React.Fragment>
        );
    }
}