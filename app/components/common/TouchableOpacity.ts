import {FC} from 'react';
import {TouchableOpacityProps, ViewProps} from 'react-native';
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

const Styled: FC<IStyledTouchableOpacity> = styled.TouchableOpacity`
  ${flexMixin}
  ${borderMixin}
  ${paddingMixin}
  ${marginMixin}
  ${sizesMixin}
  ${shadowMixin}
  ${positionMixin}
  ${viewBoxMixin}
`;

export interface IStyledTouchableOpacity
  extends TouchableOpacityProps,
    ViewProps,
    IViewBox {}

export default Styled;
