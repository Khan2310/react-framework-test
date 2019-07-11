import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ButtonJss} from "../assets/jss/Mui-button-jss";
import {CommonProps} from "./utils/commonProps";
import TRReactComponent from "tm-react/src/artifacts/framework/tr-react-component";

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
            <Button className={classes.buttonLink} {...etc}>
                {children}{console.log(classes)}
            </Button>
        </div>
    );
  }
}
export default withStyles(ButtonJss)(MaterialButton)