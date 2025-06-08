import React from 'react';
import { View } from 'react-native';

import Logo from '@/assets/images/logo';
import MyText from './MyText';

const Footer = () => {

  return (
    <View className='w-full'>
      <View className='w-full bg-c_cgrey h-[350px] gap-10 pt-10
                      md:h-[244px] md:flex-row items-center md:gap-24 md:pt-0
                      lg:items-center lg:justify-around lg:flex-row
                      '>
        <Logo className='md:ml-14 md:-mt-20 lg:mt-0 lg:ml-0 ' />
        <View className='lg:flex-row md:gap-10 lg:gap-40 md:mt-14 lg:mt-0 gap-10 '>
          <MyText className=' text-white text-c_14 text-center md:text-left tracking-widest leading-6'>
            MARTHWAITE, SEDBERGH{'\n'}Cumbria{'\n'}+00 44 123 4567
          </MyText>
          <MyText className=' text-white text-c_14 text-center md:text-left tracking-widest leading-6'>
            OPEN TIMES{'\n'}MON - FRI: 09:00 AM - 10:00 PM{'\n'}SAT - SUN: 09:00 AM - 11:30 PM
          </MyText>
        </View>
      </View>
    </View>
  )
}

export default Footer