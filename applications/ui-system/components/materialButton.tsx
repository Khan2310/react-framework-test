import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ButtonJss} from "../assets/jss/Mui-button-jss";
import {CommonProps} from "./utils/commonProps";
import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";

const useStyles = makeStyles(ButtonJss);

interface Props{
    children?: React.ReactNode;
}

export default class MaterialButton extends TRReactComponent<Props, any>{
  render () {
    const classes = useStyles();
    const {children,
    ...etc} = this.props;
    return (
        <div>
            <Button className={classes.buttonPrimary}{...etc}>
                {children}
            </Button>
        </div>
    );
  }
}