import {FC} from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';
import {
  borderMixin,
  flexMixin,
  marginMixin,
  positionMixin,
  textMixin,
  paddingMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';
import {
  IBorderMix,
  IFlexMix,
  IMarginMix,
  IPostionMix,
  ITextMix,
  IPaddingMix,
  IViewBox,
} from './StylesMixins/types';

const Styled: FC<IStyledText> = styled.Text`
  ${marginMixin}
  ${textMixin}
  ${positionMixin}
  ${borderMixin}
  ${flexMixin}
  ${paddingMixin}
  ${viewBoxMixin}
`;

export interface IStyledText
  extends TextProps,
    IMarginMix,
    IViewBox,
    ITextMix,
    IPostionMix,
    IBorderMix,
    IFlexMix,
    IPaddingMix {}
export default Styled;
