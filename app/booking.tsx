import React, { useMemo } from 'react';
import { ImageBackground, useWindowDimensions, View } from 'react-native';

import Logo from '@/assets/images/logo';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import MyText from '@/components/MyText';

import PatternCurveBottomRight from '@/assets/images/patterns/pattern-curve-bottom-right';
import PatternLines from '@/assets/images/patterns/pattern-lines';

const Booking = () => {

  const { width } = useWindowDimensions();

  const readyImg = useMemo(() => {
    if (width >= 1440) return require("@/assets/images/booking/hero-bg-desktop.jpg");
    if (width >= 768) return require("@/assets/images/booking/hero-bg-tablet.jpg");
    return require("@/assets/images/booking/hero-bg-mobile.jpg");
  }, [width]);

  return (
    <>
      <View className='w-full relative mb-[38rem]'>
        <View className='w-full h-[600px] md:h-[750px] lg:h-[600px] md:mb-[23rem] lg:mb-[20rem]'>
          <ImageBackground source={readyImg} style={{ width: '100%', height: '100%' }}>
            <Logo className=' self-center  md:self-baseline md:ml-16 mt-20 mb-14 lg:mt-20 lg:mb-32 lg:ml-40 ' />
            <View className="lg:ml-40 items-center lg:items-baseline">
              <MyText className='text-c_32 md:text-c_48 font-thin lg:text-c_80 md:text-c_96 text-white mb-10 text-center lg:text-left'>
                Reservations
              </MyText>
              <MyText className='text-c_20 text-white md:max-w-[66%] lg:max-w-[30%] leading-8 text-center lg:text-left'>
                We can&rsquo;t wait to host you. If you have any special requirements please feel free to call on the phone number below. We&rsquo;ll be happy to accommodate you.
              </MyText>
            </View>
          </ImageBackground>
        </View>
        <PatternLines className='hidden lg:block absolute top-[47.5rem] right-[40rem]' />
        <PatternCurveBottomRight className='hidden lg:block absolute top-[37.5rem] right-[26rem]' />
        {/* inputs */}
        <View className='absolute -bottom-[32rem] w-full px-5 right-0 shadow-slate-500 shadow-2xl
                        md:top-[30rem] md:right-[7rem] md:w-fit md:bottom-auto md:px-0
                        lg:top-[16rem] lg:right-[10rem] '>
          <Form />
        </View>
      </View>
      <Footer />
    </>
  )
}

export default Booking