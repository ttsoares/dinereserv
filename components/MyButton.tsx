import clsx from 'clsx';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import MyText from './MyText';

type RoutePath = '/' | '/booking';
type Theme = 'black' | 'white' | 'none';

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  className?: string;
  route?: string;
  theme: Theme
}

export default function MyButton({
  children,
  className,
  theme = 'black',
  route,
  onPress, // Extract onPress from props
  ...props
}: ButtonProps) {
  const router = useRouter();

  const ButtonBaseClasses = 'py-4 px-11 w-fit border-2 my-8 group';
  const ButtonTheme = theme === 'black'
    ? ' border-white bg-black hover:bg-white hover:border-black'
    : ' border-black bg-white hover:bg-black hover:border-white';

  const textBaseClasses = 'font-spartan text-c_17 uppercase text-center';

  const TextTheme = theme === 'black'
    ? 'text-white group-hover:text-black'
    : 'text-black group-hover:text-white';

  const buttonClasses = clsx(ButtonBaseClasses, ButtonTheme, className);
  const textClasses = clsx(textBaseClasses, TextTheme, className);

  const handlePress = (e: any) => {
    if (onPress) onPress(e);

    if (route) {
      // Delay before navigating to allow press animation to complete
      setTimeout(() => {
        router.push(route as RoutePath);
      }, 200); // 200ms feels responsive and still shows the animation
    }
  };

  return (
    <Pressable
      className={clsx(
        buttonClasses,
        'active:translate-y-0.5 active:scale-95 transition-transform duration-100'
      )}
      onPress={handlePress}
      {...props}
    >
      <MyText className={textClasses}>{children}</MyText>
    </Pressable>
  );
}
