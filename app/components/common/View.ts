import {FC} from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';
import {
  flexMixin,
  borderMixin,
  paddingMixin,
  sizesMixin,
  shadowMixin,
  marginMixin,
  positionMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';
import {IViewBox} from './StylesMixins/types';

const Styled: FC<IStyledView> = styled.View`
  ${flexMixin}
  ${borderMixin}
  ${paddingMixin}
  ${marginMixin}
  ${sizesMixin}
  ${shadowMixin}
  ${positionMixin}
  ${viewBoxMixin}
`;

export interface IStyledView extends ViewProps, IViewBox {}

export default Styled;
