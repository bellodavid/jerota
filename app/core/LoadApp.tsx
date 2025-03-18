import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { pallets } from 'constant';
import Welcome from 'screens/Auth/UserSelection';
import { OnboardNavigator } from 'navigation/Onboard';

const theme: Theme = {
  colors: {
    background: pallets.white,
    border: pallets.border,
    card: pallets.card,
    notification: pallets.notification,
    primary: pallets.primary,
    text: pallets.text,
  },
  dark: false,
  fonts: {
    regular: {
      fontFamily: 'DMSansRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'DMSansMedium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'DMSansBold',
      fontWeight: 'normal',
    },
    heavy: {
      fontFamily: 'DMSansBold',
      fontWeight: 'normal',
    },
  },
};

const fonts = {
  DMSansBold: require('../../assets/fonts/DMSans-Bold.ttf'),
  DMSansMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
  DMSansRegular: require('../../assets/fonts/DMSans-Regular.ttf'),
};

SplashScreen.preventAutoHideAsync();

export default function LoadApp(): React.ReactElement | null {
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 800);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer {...{ theme }}>
          <SafeAreaProvider>
            <OnboardNavigator />
            <StatusBar style="light" backgroundColor="transparent" translucent />
          </SafeAreaProvider>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
