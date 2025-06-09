import Logo from '@/assets/images/logo';
import React, { useMemo } from 'react';
import { Image, ImageBackground, useWindowDimensions, View } from 'react-native';

import MyButton from './MyButton';
import MyText from './MyText';

import PatternCurveTopRight from '@/assets/images/patterns/pattern-curve-top-right';
import PatternDivide from '@/assets/images/patterns/pattern-divide';

const Top = () => {

  const { width } = useWindowDimensions();

  const heroImage = useMemo(() => {
    if (width >= 1440) return require("@/assets/images/homepage/hero-bg-desktop.jpg");
    if (width >= 768) return require("@/assets/images/homepage/hero-bg-tablet.jpg");
    return require("@/assets/images/homepage/hero-bg-mobile.jpg");
  }, [width]);

  const enjoyableImage = useMemo(() => {
    if (width >= 1440) return require("@/assets/images/homepage/enjoyable-place-desktop.jpg");
    if (width >= 768) return require("@/assets/images/homepage/enjoyable-place-mobile.jpg");
    return require("@/assets/images/homepage/enjoyable-place-mobile.jpg");
  }, [width])


  return (
    <View className='w-full'>
      <View className='w-full h-[43.75rem] md:h-[56.25rem] lg:h-[51.25rem] '>
        <ImageBackground source={heroImage} style={{ width: '100%', height: '100%', position: 'relative' }}>
          <View className='bg-c_cgray
                          md:w-full items-center md:gap-20 gap-10
                          lg:absolute lg:top-0 lg:left-0 lg:w-[34.0625rem] lg:h-[51.25rem] lg:items-baseline'>
            <View className='lg:mt-20 lg:ml-36 lg:items-start md:mt-[21rem] mt-[14rem]'>
              <Logo />
            </View>
            <View className='
                            items-center
                            lg:absolute lg:top-[15.5rem] lg:left-[8.5rem] lg:items-start lg:w-[43.75rem]'>
              <MyText className='text-white text-center md:text-left text-c_32 font-light md:text-c_48 lg:text-c_80 md:font-extralight px-9 md:px-0'>
                Exquisite dining since 1989
              </MyText>
              <MyText className='text-white text-c_16 md:text-c_20r max-w-[95%] md:max-w-[80%] mt-5 text-center lg:text-left'>
                Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
              </MyText>
              <MyButton theme='black' route='booking'>Book a table</MyButton>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View className='absolute
                      md:w-[35.8125rem] md:h-[23.75rem] md:top-[50rem] md:left-[6rem]
                      lg:top-[47rem] lg:left-[8rem]  lg:w-[33.75rem] lg:h-[45.0625rem] '>
        <Image
          className='shadow-slate-700 shadow-2xl'
          source={enjoyableImage} style={{ width: '100%', height: '100%' }} />
      </View>
      <PatternCurveTopRight className='absolute
                                      md:top-[67.5rem] md:right-[27rem]
                                      lg:top-[66rem] lg:right-[35.5rem]' />
      <View className='h-[25rem]
                      md:w-full items-center flex-col justify-center gap-4 md:mt-[20rem]
                      lg:w-[31.5625rem] lg:h-[18.75rem] lg:self-end lg:mr-36 lg:mt-48 lg:gap-0 lg:items-start'>
        <PatternDivide className='self-center lg:self-start' />
        <MyText className='text-c_32 md:text-c_48 text-center lg:text-left mt-10 font-bold md:w-[60%] lg:w-full'>
          Enjoyable place for all the family
        </MyText>
        <MyText className='text-c_20r text-center lg:text-left mt-5 md:w-[73%]'>
          Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
        </MyText>
      </View>
    </View>
  )
}

export default Top