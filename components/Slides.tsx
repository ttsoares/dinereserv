import React, { useEffect, useMemo, useState } from 'react';
import { Image, ImageBackground, ImageSourcePropType, Platform, useWindowDimensions, View } from 'react-native';
import MyButton from './MyButton';
import MyText from './MyText';

import PatternCurveTopRight from '@/assets/images/patterns/pattern-curve-top-right';
import PatternLines from '@/assets/images/patterns/pattern-lines';
import Interactions from './Interactions';

const Slides = () => {

  const { width } = useWindowDimensions();

  const readyImg = useMemo(() => {
    if (width >= 1440) return require("@/assets/images/homepage/ready-bg-desktop.jpg");
    if (width >= 768) return require("@/assets/images/homepage/ready-bg-tablet.jpg");
    return require("@/assets/images/homepage/ready-bg-mobile.jpg");
  }, [width]);

  let image1: ImageSourcePropType;
  let image2: ImageSourcePropType;
  let image3: ImageSourcePropType;

  //sm
  image1 = require("@/assets/images/homepage/family-gathering-mobile.jpg");
  image2 = require("@/assets/images/homepage/special-events-mobile.jpg");
  image3 = require("@/assets/images/homepage/social-events-mobile.jpg");

  //md
  if (width >= 768) {
    image1 = require("@/assets/images/homepage/family-gathering-tablet.jpg");
    image2 = require("@/assets/images/homepage/special-events-tablet.jpg");
    image3 = require("@/assets/images/homepage/social-events-tablet.jpg");
  }

  //lg
  if (width >= 1440) {
    image1 = require("@/assets/images/homepage/family-gathering-desktop.jpg");
    image2 = require("@/assets/images/homepage/special-events-desktop.jpg");
    image3 = require("@/assets/images/homepage/social-events-desktop.jpg");
  }

  type Slide = { image: ImageSourcePropType, title: string, text: string };

  const Slides: Slide[] = [
    {
      image: image1,
      title: "Family Gathering",
      text: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.",
    },
    {
      image: image2,
      title: "Special Events",
      text: "Whether it's a romantic dinner or special date you're celebrating with others we'll look after you. We'll be sure to mark your special date with an unforgettable meal",
    },
    {
      image: image3,
      title: "Social Events",
      text: "Are you looking to have a larger social event? No problem! We're more than happy to cater for big parties. We'll work with you to make your event a hit with everyone.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function incrementSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Slides.length);
  }

  function decrementSlide() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Slides.length) % Slides.length);
  }

  useEffect(() => {
    if (Platform.OS !== "web") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") decrementSlide();
      if (e.key === "ArrowRight") incrementSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View className='w-full flex-col lg:flex-row relative  mt-[6rem]  lg:px-24'>
        <PatternCurveTopRight className='hidden md:block absolute -top-10 -left-[24rem]' />
        <PatternLines className='hidden md:block absolute md:-top-10 md:left-10 lg:top-10 lg:left-10 z-50' />
        {/* left */}
        <View
          className='w-full lg:w-[45%] lg:h-[47.5rem]  justify-center items-center z-40 lg:ml-5'>
          <Image source={Slides[currentSlide].image} className='h-full w-full object-cover shadow-slate-700 shadow-2xl' />
        </View>
        <View className='lg:hidden w-full'>
          <Interactions setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
        </View>
        {/* right */}
        <View className='w-full lg:w-[55%]'>
          <View className='items-center justify-center lg:items-start lg:ml-16 gap-5 lg:mt-40 lg:px-10'>
            <MyText className='text-c_32 md:text-c_48 font-bold'>{Slides[currentSlide].title}</MyText>
            <MyText className='text-center md:text-left text-c_20r max-w-[90%]'>{Slides[currentSlide].text}</MyText>
            <MyButton theme="white" route="/booking">Book a table</MyButton>
            <View className='hidden lg:block'>
              <Interactions setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
            </View>
          </View>
        </View>
      </View>
      <View className='w-full h-[21.875rem] md:h-[15.25rem] justify-center items-center mt-10'>
        <ImageBackground source={readyImg} style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View className='my-20 md:my-0md:mt-0 w-full h-fit lg:flex-row justify-center items-center '>
            <View className='lg:w-[60%] justify-center items-center lg:ml-14 '>
              <MyText className='text-c_32 md:text-c_48 text-white font-bold text-center md:text-left'>
                Ready to make a reservation?
              </MyText>
            </View>
            <View className='w-2/3 md:w-[40%] justify-center items-center'>
              <MyButton theme='none' route="/booking">
                Book a table
              </MyButton>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

export default Slides