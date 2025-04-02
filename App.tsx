import React from 'react';
import {Dimensions, Platform, StatusBar, useColorScheme} from 'react-native';
import {
  StyledView,
  StyledSafeAreaView,
  StyledTouchableOpacity,
  StyledImage,
} from './app/components/common';
import Menu from './app/assets/icons/Menu.svg';
import DualIconSwitch from './app/components/Switch.tsx';
import Header from './app/components/Header.tsx';
import CarouselItem from './app/components/CarouselItem.tsx';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const isIos = Platform.OS === 'ios';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StyledSafeAreaView flex={1} backgroundColor={'white'}>
      <StyledView flex={1}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <StyledView
          width={'100%'}
          alignItems={'flex-end'}
          pr={'20px'}
          pv={'10px'}>
          <StyledTouchableOpacity>
            <Menu width={'30'} height={'30'} />
          </StyledTouchableOpacity>
        </StyledView>
        <Header height={height} />
        <CarouselItem width={width} height={height} />
        <StyledView
          width={'100%'}
          flex={1}
          mb={isIos ? '-15px' : '15px'}
          zIndex={2}
          justifyContent={'flex-end'}>
          <StyledImage
            source={require('./app/assets/images/bottomBg.jpg')}
            resizeMode={'cover'}
            alignItems={'flex-end'}
            justifyContent={'flex-end'}
            width={'100%'}
            zIndex={1}
          />
        </StyledView>
      </StyledView>
      <StyledView
        width={'100%'}
        position={'absolute'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        bottom={40}
        zIndex={3}>
        <DualIconSwitch height={75} width={132} />
      </StyledView>
    </StyledSafeAreaView>
  );
}

export default App;
