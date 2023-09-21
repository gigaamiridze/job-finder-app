import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().then(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    });
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
}

export default Layout;
