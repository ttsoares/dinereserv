import React, { useMemo } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';

import PatternCurveTopLeft from '@/assets/images/patterns/pattern-curve-top-left';
import PatternDivide from '@/assets/images/patterns/pattern-divide';
import PatternLines from '@/assets/images/patterns/pattern-lines';
import MyText from './MyText';

const Middle = () => {

  const { width } = useWindowDimensions();

  const mostLocally = useMemo(() => {
    if (width >= 1440) return require("@/assets/images/homepage/locally-sourced-desktop.jpg");
    if (width >= 768) return require("@/assets/images/homepage/locally-sourced-tablet.jpg");
    return require("@/assets/images/homepage/locally-sourced-mobile.jpg");
  }, [width]);

  const salmon = useMemo(() => {
    if (width >= 768) return require("@/assets/images/homepage/salmon-desktop-tablet.jpg");
    return require("@/assets/images/homepage/salmon-mobile.jpg");
  }, [width]);

  const filet = useMemo(() => {
    if (width >= 768) return require("@/assets/images/homepage/beef-desktop-tablet.jpg");
    return require("@/assets/images/homepage/beef-mobile.jpg");
  }, [width]);

  const mousse = useMemo(() => {
    if (width >= 768) return require("@/assets/images/homepage/chocolate-desktop-tablet.jpg");
    return require("@/assets/images/homepage/chocolate-mobile.jpg");
  }, [width]);

  return (
    <View className='w-full relative lg:mt-[15rem]'>
      <View className='w-full h-[25rem]
                      md:mt-[27rem] md:w-[37.5rem] md:h-[20.625rem] self-center md:gap-4
                      lg:self-start lg:ml-32 lg:mt-52 lg:w-[31.25rem] lg:h-[18.75rem]'>
        <PatternDivide className='self-center lg:self-baseline' />
        <MyText className='text-c_32 md:text-c_48 lg:text-left mt-10 font-bold text-center'>
          The most locally sourced food
        </MyText>
        <MyText className='text-c_20r lg:text-left text-center mt-5'>
          All our ingredients come directly from our farm or local fishery. So you can be sure that you&rsquo;re eating the freshest, most sustainable food.
        </MyText>
      </View>
      <PatternLines className='absolute z-50 hidden
                              md:right-4 md:top-[14rem] md:block
                              lg:right-[2rem] lg:top-[18.7rem]' />
      <PatternCurveTopLeft className='absolute hidden
                                      md:-right-[33rem] md:top-[31rem] md:block
                                      lg:-right-16 lg:top-[20rem]' />
      <View className='absolute z-30
                      md:w-[35.8125rem] md:h-[22.5rem] top-0 right-20
                      lg:top-0 lg:right-[9.5rem] lg:w-[33.75rem] lg:h-[45.0625rem] '>
        <Image source={mostLocally} style={{ width: '100%', height: '100%' }} />
      </View>
      {/* secund half */}
      {/* ----------- */}
      <View className='w-full bg-c_cgrey z-10 justify-center items-center
                        md:pb-28
                        lg:mt-[9rem] lg:flex-row lg:pb-0 lg:items-start lg:justify-start
                        '>
        <View className='w-full lg:w-[90%] flex-col lg:flex-row  lg:pt-40'>
          {/* left */}
          <View className='w-full
                          md:items-center md:mt-28 md:gap-6
                          lg:w-1/2 lg:justify-start lg:pl-12 lg:pr-10 lg:ml-20 lg:mt-0 lg:mr-5 lg:items-start'>
            <PatternDivide />
            <MyText className='text-c_32 md:text-c_48 text-center md:px-20 lg:px-0 font-bold lg:text-left mt-10 text-white'>
              A few highlights from our menu
            </MyText>
            <MyText className='text-c_20r  text-center lg:text-left mt-5 text-white md:px-28 lg:px-0'>
              We cater for all dietary requirements, but here&rsquo;s a glimpse at some of our diner&rsquo;s favourites. Our menu is revamped every season.
            </MyText>
          </View>
          {/* right */}
          <View className='w-full lg:w-1/2 gap-10 md:px-20 lg:px-0 pb-20 md:pb-0 lg:pb-20'>
            <View className='md:flex-row relative items-center lg:items-start mt-10'>
              <Image source={salmon} />
              <PatternDivide className='absolute top-3 left-24 -z-10' />
              <View className='md:ml-10 md:max-w-[70%] '>
                <MyText className='text-c_20b mb-2 text-white font-bold text-center md:text-left ml-6'>
                  Seared Salmon Fillet
                </MyText>
                <MyText className='text-c_16 text-white text-center md:text-left px-6'>
                  Our locally sourced salmon served with a refreshing buckwheat summer salad.
                </MyText>
              </View>
            </View>
            <View className='w-full h-0.5 bg-c_eclay' />
            <View className='md:flex-row relative items-center lg:items-start'>
              <Image source={filet} />
              <PatternDivide className='absolute top-3 left-24 -z-10' />
              <View className='md:ml-10 md:max-w-[70%] '>
                <MyText className='text-c_20b mb-2 text-white font-bold text-center md:text-left ml-6'>
                  Rosemary Filet Mignon
                </MyText>
                <MyText className='text-c_16 text-white text-center md:text-left px-6'>
                  Our prime beef served to your taste with a delicious choice of seasonal sides.
                </MyText>
              </View>
            </View>
            <View className='w-full h-0.5 bg-c_eclay' />
            <View className='md:flex-row relative items-center lg:items-start'>
              <Image source={mousse} />
              <PatternDivide className='absolute top-3 left-24 -z-10' />
              <View className='md:ml-10 md:max-w-[70%] '>
                <MyText className='text-c_20b mb-2 text-white font-bold text-center md:text-left ml-6'>
                  Summer Fruit Chocolate Mousse
                </MyText>
                <MyText className='text-c_16 text-white text-center md:text-left px-6'>
                  Creamy mousse combined with summer fruits and dark chocolate shavings.
                </MyText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Middle