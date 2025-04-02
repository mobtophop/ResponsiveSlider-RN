import React, {FC} from 'react';
import {Platform, TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  flexMixin,
  paddingMixin,
  sizesMixin,
  borderMixin,
  marginMixin,
  shadowMixin,
  positionMixin,
  viewBoxMixin,
} from './StylesMixins/Mixins';
import {IViewBox} from './StylesMixins/types';

const StyledTouchableOpacity: FC<IStyledButton> = styled(TouchableOpacity)`
  ${flexMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${sizesMixin}
    ${shadowMixin}
    ${positionMixin}
    ${viewBoxMixin}
    ${({opacity}: IStyledButton) =>
    opacity !== undefined ? `opacity: ${opacity};` : ''}
`;

export interface IStyledButton extends TouchableOpacityProps, IViewBox {}

export default (props: IStyledButton) => (
  <StyledTouchableOpacity
    activeOpacity={0.4}
    delayPressIn={Platform.OS === 'ios' ? 30 : 10}
    {...props}
  />
);
