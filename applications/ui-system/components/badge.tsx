import React from 'react';
import withStyles from 'react-jss';
import {BadgeJss} from '../assets/jss/badge-jss';
import classNames from 'classnames';
import TRReactComponent from 'tm-react/src/artifacts/framework/tr-react-component';
import { CommonProps } from './utils/commonProps';

interface Props extends CommonProps {
  type: string;
}

class Badge extends TRReactComponent<Props,any> {
    render () {
    const {
      classes,
      children,
      className: classNameProp,
      type = 'info',
      ...etc
    } = this.props;

    const info = type === 'info'
    const cancel = type === 'cancel'
    const active = type === 'active'
    const pending = type === 'pending'
    const disabled = type === 'disabled'
    const count = type === 'count'

    const clazz = classNames(classes.badge, {
            [classes.info]: info,
            [classes.cancel]: cancel,
            [classes.active]: active,
            [classes.pending]: pending,
            [classes.disabled]: disabled,
            [classes.count]: count
        },
        classNameProp
    );
    return (
        <span className={clazz} {...etc}>
            {children}
        </span>
    );
  }
}
export default withStyles(BadgeJss)(Badge);