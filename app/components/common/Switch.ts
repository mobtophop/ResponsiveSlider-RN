import {FC} from 'react';
import {SwitchProps} from 'react-native';
import styled from 'styled-components/native';
import {
  borderMixin,
  flexMixin,
  marginMixin,
  paddingMixin,
  positionMixin,
  shadowMixin,
  sizesMixin,
} from './StylesMixins/Mixins';
import {IViewBox} from './StylesMixins/types';

const Styled: FC<IStyledText> = styled.Switch`
  ${flexMixin}
  ${borderMixin}
  ${paddingMixin}
  ${marginMixin}
  ${sizesMixin}
  ${positionMixin}
  ${shadowMixin}
`;

export interface IStyledText extends SwitchProps, IViewBox {}
export default Styled;
