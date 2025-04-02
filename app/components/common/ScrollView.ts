import {FC} from 'react';
import {ScrollViewProps} from 'react-native';
import styled from 'styled-components/native';
import {
  borderMixin,
  flexMixin,
  marginMixin,
  paddingMixin,
  positionMixin,
  textMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';

import {
  IBorderMix,
  IFlexMix,
  IMarginMix,
  IPaddingMix,
  IPostionMix,
  ITextMix,
  IViewBox,
} from './StylesMixins/types';

const Styled: FC<IStyledScrollView> = styled.ScrollView`
  ${marginMixin}
  ${textMixin}
  ${positionMixin}
  ${borderMixin}
  ${flexMixin}
  ${paddingMixin}
  ${viewBoxMixin}
`;

export interface IStyledScrollView
  extends ScrollViewProps,
    IMarginMix,
    ITextMix,
    IPostionMix,
    IBorderMix,
    IFlexMix,
    IViewBox,
    IPaddingMix {}

export default Styled;
