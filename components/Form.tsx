import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, TextInput, View } from 'react-native';

import IconMinus from '@/assets/images/icons/icon-minus';
import IconPlus from '@/assets/images/icons/icon-plus';
import MyButton from '@/components/MyButton';
import MyText from '@/components/MyText';

type FormData = {
  name: string;
  email: string;
  month: string;
  day: string;
  year: string;
  hour: string;
  minute: string;
  period: string;
};

export default function Booking() {

  const [persons, setPersons] = useState(1);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      month: '',
      day: '',
      year: '',
      hour: '',
      minute: '',
      period: 'AM',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    // Add logic here
  };

  // Validation functions
  const validateDay = (value: string) => {
    const day = parseInt(value, 10);
    return (day >= 1 && day <= 31) || 'Day must be between 1-31';
  };

  const validateMonth = (value: string) => {
    const month = parseInt(value, 10);
    return (month >= 1 && month <= 12) || 'Month must be between 1-12';
  };

  const validateYear = (value: string) => {
    const year = parseInt(value, 10);
    const date = new Date();
    const presetYear = date.getFullYear();
    return (year && year >= presetYear) || 'Invalid year ';
  };

  const validateHour = (value: string) => {
    const hour = parseInt(value, 10);
    return (hour >= 0 && hour <= 12) || 'Hour must be between 0-12';
  };

  const validateMinute = (value: string) => {
    const minute = parseInt(value, 10);
    return (minute >= 0 && minute <= 60) || 'Minute must be between 0-60';
  };

  return (
    <View className="p-2 md:p-4 bg-white w-[20.5rem] md:w-[33.75rem] h-fit ">
      {/* Name */}
      <MyText className={`text-black mb-1 text-c_20r ${errors.name ? 'text-red-500' : ''} `}>Name</MyText>
      <Controller
        control={control}
        name="name"
        rules={{ required: 'Name is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className={`border-b ${errors.name ? 'border-red-500' : 'border-gray-300'
              } text-black mb-4 pb-4`}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && (
        <MyText className="text-red-500 text-[10px]">{errors.name.message}</MyText>
      )}

      {/* Email */}
      <MyText className={`text-black text-c_20r ${errors.email ? 'text-red-500' : ''} `}>Email</MyText>
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid email format',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            className={`border-b ${errors.email ? 'border-red-500' : 'border-gray-300'
              } text-black mb-4 pb-4`}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && (
        <MyText className="text-red-500 text-[10px]">
          {errors.email.message?.toString()}
        </MyText>
      )}
      {/* ------------------------------- */}
      {/* Date */}
      <View className='md:flex-row mt-6 relative '>
        <MyText className={`text-black mb-2 text-c_20r md:w-1/4 ${(errors.month || errors.day || errors.year) ? 'text-red-500' : ''}`}>
          Pick a date
        </MyText>
        <View className="flex-row justify-center gap-12 mb-2 md:w-3/4">
          {/* Month */}
          <Controller
            control={control}
            name="month"
            rules={{
              validate: validateMonth,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="MM"
                className={` border-b ${errors.month ? 'border-red-500' : 'border-gray-300'
                  } text-black pb-4 text-center w-12 md:w-16 `}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                maxLength={2}
              />
            )}
          />
          {/* Day */}
          <Controller
            control={control}
            name="day"
            rules={{
              validate: validateDay,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="DD"
                className={` border-b ${errors.day ? 'border-red-500' : 'border-gray-300'
                  } text-black pb-1 text-center w-12 md:w-16 `}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                maxLength={2}
              />
            )}
          />
          {/* Year */}
          <Controller
            control={control}
            name="year"
            rules={{
              validate: validateYear,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="YYYY"
                className={` border-b ${errors.year ? 'border-red-500' : 'border-gray-300 w-12 md:w-16 '
                  } text-black pb-1 text-center`}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                maxLength={4}
              />
            )}
          />
        </View>
        {(errors.month || errors.day || errors.year) && (
          <MyText className="text-red-500 text-[10px] mb-2 absolute top-6 left-0 ">
            {errors.month?.message || errors.day?.message || 'This field in incomplete'}
          </MyText>
        )}
      </View>

      {/* Time */}
      <View className='md:flex-row mt-6 relative'>
        <MyText className={`text-black mb-2 text-c_20r md:w-1/4 ${(errors.hour || errors.minute) ? 'text-red-500' : ''}`}>
          Pick a time
        </MyText>
        <View className="flex-row justify-center gap-12 mb-2 md:w-3/4">
          {/* Hour */}
          <Controller
            control={control}
            name="hour"
            rules={{
              required: 'Hour is required',
              validate: validateHour,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="HH"
                className={` border-b ${errors.hour ? 'border-red-500' : 'border-gray-300'
                  } text-black pb-1 text-center w-12 md:w-16`}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                maxLength={2}
              />
            )}
          />

          {/* Minute */}
          <Controller
            control={control}
            name="minute"
            rules={{
              required: 'Minute is required',
              validate: validateMinute,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="MM"
                className={` border-b ${errors.minute ? 'border-red-500' : 'border-gray-300'
                  } text-black pb-1 text-center w-12 md:w-16`}
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                maxLength={2}
              />
            )}
          />

          {/* AM/PM */}
          <Controller
            control={control}
            name="period"
            rules={{ required: 'Select AM or PM' }}
            render={({ field: { onChange, value } }) => (
              <View
                className={` border-b w-12 md:w-16 ${errors.period ? 'border-red-500' : 'border-gray-300'
                  }`}
              >
                <Picker
                  selectedValue={value}
                  onValueChange={onChange}
                  dropdownIconColor="black"
                >
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
              </View>
            )}
          />
        </View>
        {(errors.hour || errors.minute || errors.period) && (
          <MyText className="text-red-500 text-[10px] mb-2 absolute top-6 left-0">
            {errors.hour?.message || errors.minute?.message || 'Please complete the full time'}
          </MyText>
        )}
      </View>
      {/* number of people */}
      <View className='justify-between items-center mt-6'>
        <View className='w-full flex-row justify-between items-center mt-4'>
          <Pressable
            className='ml-8 p-5 shadow-slate-400 shadow-lg hover:animate-pulse'
            onPress={() => {
              if (persons > 1) {
                setPersons(persons - 1);
              }
            }}
          >
            <IconMinus />
          </Pressable>
          <MyText className='text-c_20r font-bold'>{persons} people</MyText>
          <Pressable
            className='mr-8 p-5 shadow-slate-400 shadow-lg hover:animate-pulse'
            onPress={() => setPersons(persons + 1)}
          >
            <IconPlus />
          </Pressable>
        </View>
        <View className='self-center py-4 w-full border-b-2 border-gray-300' />
      </View>
      {/* submit */}
      <MyButton className='w-full' onPress={handleSubmit(onSubmit)} theme="black">
        Make reservation
      </MyButton>
    </View>
  );
}