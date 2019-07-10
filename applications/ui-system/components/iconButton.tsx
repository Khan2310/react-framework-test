import React from 'react';
import withStyles from 'react-jss';
import {ButtonJss} from '../assets/jss/button-jss';
import Button from './button';
import Icon from './icon';
import classnames from 'classnames';
import TRReactComponent from 'tm-react/src/artifacts/framework/tr-react-component';
import { CommonProps } from './utils/commonProps';

interface Props extends CommonProps {
  icon: string;
  position?: string;
}

class IconButton extends TRReactComponent<Props,any> {
  render () {
    const {
      children,
      classes,
      className: classNameProp,
      icon,
      style,
      position,
      ...etc
    } = this.props;

    const leftSide = position === 'left';
    const rightSide = position === 'right';

    const clazz = classnames({
      ['button-icon-left']: leftSide,
      ['button-icon-right']:rightSide
    })

    if(leftSide){
      return (
        <Button className={clazz} {...etc}>
          <Icon icon={icon} {...etc}></Icon>
          {children}
        </Button>
      );
    }else{
      return (
        <Button className={clazz} {...etc}>
          {children}
          <Icon icon={icon} {...etc}></Icon>
        </Button>
      );
    }
    
  }
}
export default withStyles(ButtonJss)(IconButton);