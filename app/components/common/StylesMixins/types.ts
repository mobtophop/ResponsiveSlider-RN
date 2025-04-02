export interface IFlexMix {
  flex?: number;
  justifyContent?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly'
    | 'stretch';
  alignItems?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'flex-end'
    | 'flex-start';
  alignSelf?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end'
    | 'flex-start'
    | 'space-evenly'
    | 'stretch';
  // justifySelf: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'space-evenly' | 'stretch';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow?: string | number | 'auto';
  flexShrink?: string | number | 'auto';
  flexBasis?: string | number | 'auto';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    // justifySelf: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'space-evenly' | 'stretch';
}

export interface IPaddingMix {
  padding?: number | string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  pv?: string;
  ph?: string;
}

export interface IMarginMix {
  margin?: number | string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  mv?: string;
  mh?: string;
}

export interface IBorderMix {
  br?: string;
  border?: string;
  borderWidth?: string;
  borderColor?: string;
  borderBottom?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottomColor?: string;
  borderBottomWidth?: string;
  borderTopColor?: string;
  borderTopWidth?: string;
  borderRightColor?: string;
  borderRightWidth?: string;
  borderLeftColor?: string;
  borderLeftWidth?: string;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderTopRightRadius?: string;
  borderTopLeftRadius?: string;
}

export interface ISizeMix {
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
}

interface IShadowOffset {
  width: string | number;
  height: string | number;
}

export interface IShadowMix {
  boxShadow?: string;
  elevation?: string | number;
  shadowColor?: string;
  shadow?: string;
  shadowOffset?: IShadowOffset;
  shadowOpacity?: string | number;
  shadowRadius?: string | number;
}

export interface ITextMix {
  textDecoration?: 'underline',
    textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    color?: string;
    fontWeight?: string | number;
    fontSize?: string;
    fontFamily?: string;
    lineHeight?: string;
    letterSpacing?: string;
    fontStyle?: 'normal' | 'italic';
}

export interface IPostionMix {
  position?: 'absolute' | 'relative'; // | 'fixed' | 'sticky'
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
  zIndex?: string | number;
}

export interface IViewBox
  extends IFlexMix,
    IBorderMix,
    IPaddingMix,
    IMarginMix,
    ISizeMix,
    IShadowMix,
    IPostionMix {
  opacity?: number | string;
  backgroundColor?: string;
  overflow?: 'hidden' | 'visible' | 'scroll';
  transform?: [{[key: string]: string}] | {};
}
