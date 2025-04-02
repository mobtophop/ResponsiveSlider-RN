import {FC} from 'react';
import {FlatListProps} from 'react-native';
import styled from 'styled-components/native';
import {
  flexMixin,
  borderMixin,
  paddingMixin,
  sizesMixin,
  shadowMixin,
  marginMixin,
  positionMixin,
} from './StylesMixins/Mixins';
import {
  IBorderMix,
  IFlexMix,
  IMarginMix,
  IPaddingMix,
  IPostionMix,
  IShadowMix,
  ISizeMix,
} from './StylesMixins/types';

const Styled: FC<IStyledFlatList> = styled.FlatList`
  ${flexMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${sizesMixin}
    ${shadowMixin}
    ${positionMixin}
    ${({backgroundColor}) =>
    backgroundColor !== undefined
      ? `background-color: ${backgroundColor};`
      : ''}
    ${({opacity}) => (opacity !== undefined ? `opacity: ${opacity};` : '')}
`;

export interface IStyledFlatList
  extends FlatListProps<any>,
    IFlexMix,
    IBorderMix,
    IPaddingMix,
    IMarginMix,
    ISizeMix,
    IShadowMix,
    IPostionMix {
  opacity?: number | string;
  backgroundColor?: string;
}

export default Styled;
