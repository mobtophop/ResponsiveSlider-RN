import {FC} from 'react';
import {ImageBackground, ImageBackgroundProps} from 'react-native';
import styled from 'styled-components/native';
import {
  marginMixin,
  paddingMixin,
  sizesMixin,
  borderMixin,
  positionMixin,
  flexMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';
import {
  IBorderMix,
  IMarginMix,
  IPaddingMix,
  ISizeMix,
  IFlexMix,
  IPostionMix,
  IViewBox,
} from './StylesMixins/types';

const Image: FC<IStyledImage> = styled(ImageBackground)`
  ${sizesMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${positionMixin}
    ${flexMixin}
    ${viewBoxMixin}
    ${borderMixin}
    ${({backgroundColor}) =>
    backgroundColor ? `background-color: ${backgroundColor};` : ''}
`;

export interface IStyledImage
  extends Omit<
      ImageBackgroundProps,
      | 'width'
      | 'height'
      | 'borderRadius'
      | 'borderBottomRightRadius'
      | 'borderBottomLeftRadius'
      | 'borderTopRightRadius'
      | 'borderTopLeftRadius'
    >,
    IBorderMix,
    IPaddingMix,
    IMarginMix,
    IFlexMix,
    IPostionMix,
    IViewBox,
    ImageBackgroundProps,
    ISizeMix {
  backgroundColor?: string;
}
export default Image;
