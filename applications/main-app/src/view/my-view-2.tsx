import React from 'react';
import TRComponent from "tm-react/src/artifacts/component/tr-component";
import TRComponentState from "tm-react/src/artifacts/component/tr-component-state";
import MaterialButton from "ui-system/components/materialButton";

export default class MyView extends TRComponent<any, TRComponentState> {
    renderUI() {
        return (
            <React.Fragment>
                <MaterialButton>ButtonLink</MaterialButton>
            </React.Fragment>
        );
    }
}