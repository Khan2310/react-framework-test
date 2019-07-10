import { TRProps } from "tm-react/src/artifacts/model/tr-model";
import { Classes } from "jss";


export interface CommonProps extends TRProps {
    classes: Classes;
    style?: React.CSSProperties;
    className?: string;
    title?: string;
    id?: string;
    hidden?: boolean;
    contentEditable?: boolean;
    tabIndex?: number;
    readonly [x: string]: any;
  }