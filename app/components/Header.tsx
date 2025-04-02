import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {StyledImage, StyledText, StyledView} from './common';

interface HeaderProps {
  height: number;
}

const Header: React.FC<HeaderProps> = ({height}) => {
  return (
    <StyledView
      flexDirection={'row'}
      alignItems={'center'}
      ph={'25px'}
      pb={`${height * 0.04}px`}>
      <Shadow
        distance={10}
        startColor={'rgba(61, 132, 173, 0.02)'}
        endColor={'rgba(61, 132, 173, 0.04)'}>
        <StyledView>
          <StyledImage
            source={require('../assets/images/avatar.png')}
            width={'48px'}
            height={'48px'}
            br={'7px'}
          />
        </StyledView>
      </Shadow>
      <StyledView ml={'15px'}>
        <StyledText
          fontSize={'24px'}
          fontWeight={300}
          fontFamily={'Roboto'}
          lineHeight={'32px'}
          color={'rgba(132, 130, 128, 1)'}>
          Georgia
        </StyledText>
        <StyledText
          fontSize={'24px'}
          fontWeight={300}
          fontFamily={'Roboto'}
          lineHeight={'32px'}
          color={'rgba(29, 28, 25, 1)'}>
          Let’s start designing
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Header;
