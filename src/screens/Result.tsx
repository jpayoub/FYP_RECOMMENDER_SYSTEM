import React from "react";
import LottieView from "lottie-react-native";
import lottieAnimation from '../assets/lottie/Animation-ai.json';
import { View } from "react-native";
import { createEntityAdapter } from "@reduxjs/toolkit";


export default function Animation() {
  return (
    <View style={{flex:1, justifycontent:'center', alignItems: 'center' }}>
    <LottieView
      source={require('../assets/lottie/Animation-ai.json')}
      style={{width: '100%', height:'100%'}}
      autoPlay
      loop
    />
    </View>
  );
}