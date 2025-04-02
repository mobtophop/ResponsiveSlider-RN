import {FC} from 'react';
import {
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
} from 'react-native';
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

const Styled: FC<IStyledWithoutFeedback> = styled(TouchableWithoutFeedback)`
  ${flexMixin}
  ${borderMixin}
    ${paddingMixin}
    ${marginMixin}
    ${sizesMixin}
    ${shadowMixin}
    ${positionMixin}
    ${viewBoxMixin}
`;
export interface IStyledWithoutFeedback
  extends IViewBox,
    TouchableWithoutFeedbackProps {}

export default Styled;
