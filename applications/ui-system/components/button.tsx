import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';
import {ButtonJss} from '../assets/jss/button-jss';
import TRReactComponent from 'tm-react/src/artifacts/framework/tr-react-component';
import { CommonProps } from './utils/commonProps';

interface Props extends CommonProps {
  type?: string;
  color?: string;
  component?: any;
  href?: string;
  disabled?: boolean;
  size?: string;
}

class Button extends TRReactComponent<Props,any> {
  render () {
    const {
      classes,
      className: classNameProp, 
      children,
      color = 'primary', 
      component = 'button',
      href = null,
      disabled = false,
      size = 'default',
      type = 'button',
      ...etc
    } = this.props;

    const primaryColor = color === 'primary';
    const secondaryColor = color === 'secondary';
    const ref = href !== null;

    let ComponentName = component;

    if(ComponentName === 'button' && ref){
      ComponentName = 'a';
    }

    let buttonProps

    if (ref) {
      buttonProps= {
        'href' : href
      }
    }

    const circular = type === 'circular'

    const cls = cx(
      classes.button,
      {
        [classes.buttonPrimary]: primaryColor && !ref,
        [classes.buttonSecondary]: secondaryColor  && !ref,
        [classes.buttonLink]: ref,
        ['disabled']: disabled,
        ['button-large']: size === 'large',
        ['button-circular']: circular
      },
      classNameProp
    );

    return (
      <ComponentName className={cls} {...etc} {...buttonProps}>
        {children}
      </ComponentName>
    );
  }
}
export default withStyles(ButtonJss)(Button);