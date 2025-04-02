import Carousel from 'react-native-reanimated-carousel';
import {
  StyledImageBackground,
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from './common';
import React from 'react';
import {Animated} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {images} from '../assets/consts/images';

interface CarouselProps {
  height: number;
  width: number;
}

const CarouselItem: React.FC<CarouselProps> = ({width, height}) => {
  const scrollOffsetValue = useSharedValue<number>(0);
  return (
    <StyledView width={'100%'}>
      <Carousel
        loop={true}
        width={width}
        mode={'parallax'}
        height={height / 1.65}
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 30,
          parallaxAdjacentItemScale: 1,
        }}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        data={images}
        defaultScrollOffsetValue={scrollOffsetValue}
        renderItem={({index, item}) => {
          return (
            <Animated.View key={index} style={{width: '90%'}}>
              <StyledImageBackground source={item.url} height={'100%'}>
                <StyledView
                  backgroundColor={'rgba(0,0,0, 0.3)'}
                  width={'100%'}
                  height={'100%'}
                  justifyContent={'flex-end'}
                  padding={'15px'}>
                  <StyledText
                    fontSize={'24px'}
                    fontWeight={300}
                    color={'white'}
                    fontFamily={'Roboto'}
                    lineHeight={'32px'}>
                    {item.header}
                  </StyledText>
                  <StyledText
                    fontSize={'16px'}
                    fontWeight={300}
                    color={'white'}
                    fontFamily={'Roboto'}
                    lineHeight={'32px'}>
                    {item.description}
                  </StyledText>
                  <StyledView flexDirection={'row'} mt={'22px'}>
                    <StyledTouchableOpacity
                      ph={'10px'}
                      pv={'5px'}
                      br={'40px'}
                      mr={'10px'}
                      backgroundColor={'white'}>
                      <StyledText
                        fontSize={'16px'}
                        fontWeight={300}
                        color={'black'}
                        fontFamily={'Roboto'}
                        lineHeight={'32px'}>
                        Apply to my room
                      </StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity
                      ph={'15px'}
                      br={'40px'}
                      pv={'5px'}
                      border={'1px solid #fff'}>
                      <StyledText
                        fontSize={'16px'}
                        fontWeight={300}
                        color={'white'}
                        fontFamily={'Roboto'}
                        lineHeight={'32px'}>
                        Details
                      </StyledText>
                    </StyledTouchableOpacity>
                  </StyledView>
                </StyledView>
              </StyledImageBackground>
            </Animated.View>
          );
        }}
      />
    </StyledView>
  );
};

export default CarouselItem;
