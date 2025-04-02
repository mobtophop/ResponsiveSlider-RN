import {FC} from 'react';
import {ImageProps} from 'react-native';
import styled from 'styled-components/native';
import {
  marginMixin,
  paddingMixin,
  sizesMixin,
  borderMixin,
  positionMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';
import {
  IBorderMix,
  IMarginMix,
  IPaddingMix,
  IPostionMix,
  ISizeMix,
  IViewBox,
} from './StylesMixins/types';

const Image: FC<IStyledImage> = styled.Image`
  ${sizesMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${positionMixin}
    ${viewBoxMixin}
    ${({backgroundColor}) =>
    backgroundColor ? `background-color: ${backgroundColor};` : ''}
`;

export interface IStyledImage
  extends Omit<ImageProps, 'width' | 'height' | 'borderRadius'>,
    IBorderMix,
    IPaddingMix,
    IMarginMix,
    IPostionMix,
    IViewBox,
    ISizeMix {
  backgroundColor?: string;
}
export default Image;
