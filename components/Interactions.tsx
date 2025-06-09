import React from 'react';
import { Pressable, View } from 'react-native';
import MyText from './MyText';

const slideTitles = ['FAMILY GATHERING', 'SPECIAL EVENTS', 'SOCIAL EVENTS'];

export default function Interactions({ setCurrentSlide, currentSlide }: { setCurrentSlide: (slide: number) => void, currentSlide: number }) {
  return (
    <View className='items-center  gap-4 justify-center py-10
                    md:flex-row md:px-0
                    lg:flex-col lg:items-start lg:justify-normal'>
      {slideTitles.map((title, index) => (
        <Pressable
          style={{ position: 'relative' }}
          key={index}
          onPress={() => {
            setCurrentSlide(index);
          }}
        >
          {/* LG */}
          <View className={`hidden lg:block h-0.5 w-40 absolute top-3 -left-52 z-10 ${currentSlide === index ? 'bg-c_beaver' : 'hidden'}`} />
          {/* MD */}
          <View className={`sm:hidden md:block lg:hidden  h-0.5 w-40 absolute top-8 self-center z-10 ${currentSlide === index ? 'bg-c_beaver' : 'hidden'}`} />
          {/* SM */}
          <View className={`md:hidden  h-0.5 w-14 absolute top-8 self-center z-10 ${currentSlide === index ? 'bg-c_beaver' : 'hidden'}`} />
          <MyText className={` ${currentSlide === index ? 'text-c_mirage' : 'text-c_sgrey'}  hover:text-c_mirage text-c_17 font-semibold`}>
            {title}</MyText>
        </Pressable>
      ))}
    </View>
  )
}
