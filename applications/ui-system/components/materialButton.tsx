import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ButtonJss} from "../assets/jss/Mui-button-jss";
import {CommonProps} from "./utils/commonProps";
import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";
import style from './../assets/scss/component/_button.scss';

interface Props extends CommonProps{
    children?: React.ReactNode;
}

class MaterialButton extends TRReactComponent<Props, any>{
  render () {
    const {
        children,
        classes,
        ...etc
    } = this.props;

    return (
        <div>
            <Button className='button' {...etc}>
                {children}
            </Button>
        </div>
    );
  }
}
export default withStyles(style)(MaterialButton)