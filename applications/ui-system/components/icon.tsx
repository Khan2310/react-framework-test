import React from 'react';
import withStyles from 'react-jss';
import {IconJss} from '../assets/jss/icon-jss';
import classNames from 'classnames';
import TRReactComponent from 'tm-react/src/artifacts/framework/tr-react-component';
import { CommonProps } from './utils/commonProps';

interface Props extends CommonProps {
    icon: string;
}

class Icon extends TRReactComponent<Props,any> {
    capitalize = (name: string):string => {
        const nameArray = name.split("-");
        let finalName = '';
        for(let item of nameArray){
            finalName += item.charAt(0).toUpperCase() + item.slice(1)
        }
        return finalName;
    }

    render () {
    const {
      classes,
      className: classNameProp,
      style,
      icon,
      ...etc
    } = this.props;

    let iconName: string = icon;
    iconName = 'icon' + this.capitalize(iconName)

    const clazz = classNames(classes.iconBase, 
        [classes[iconName]],
        classNameProp
    );
    return (
        <i className={clazz} style={style} {...etc}></i>
    );
  }
}
export default withStyles(IconJss)(Icon);