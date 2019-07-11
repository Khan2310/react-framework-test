import React from 'react';
import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";


export default class PublicLayout extends TRReactComponent<any, any> {

    render() {
        const Component = this.props.component;
        const route = this.props.route;
        return (
            <React.Fragment>
            <p>This is Main Application Layout</p>
            <Component route={route} />
        </React.Fragment>
        );
    }

}