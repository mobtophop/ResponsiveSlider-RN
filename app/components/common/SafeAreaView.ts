import {ViewProps} from 'react-native';
import {FC} from 'react';
import styled from 'styled-components/native';
import {
  flexMixin,
  borderMixin,
  paddingMixin,
  sizesMixin,
  shadowMixin,
  marginMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';
import {IViewBox} from './StylesMixins/types';

const Styled: FC<IStyledSafeArea> = styled.SafeAreaView`
  ${flexMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${sizesMixin}
    ${shadowMixin}
    ${viewBoxMixin}
`;

export interface IStyledSafeArea extends IViewBox, ViewProps {}

export default Styled;
