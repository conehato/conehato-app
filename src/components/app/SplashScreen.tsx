import { useFonts } from 'expo-font';
import * as _SplashScreen from 'expo-splash-screen';
import { useCallback, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';

import { fonts } from '@/constants';

_SplashScreen.preventAutoHideAsync();

interface SplashScreenProps {
  children: React.ReactNode;
  preLoad?: () => Promise<void>;
}
export function SplashScreen({ children, preLoad }: SplashScreenProps) {
  const [fontsLoaded] = useFonts(fonts);

  const [preLoaded, setPreLoaded] = useState(false);

  useLayoutEffect(() => {
    (async () => {
      try {
        preLoad && (await preLoad());
      } catch {}

      setPreLoaded(true);
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && preLoaded) {
      await _SplashScreen.hideAsync();
    }
  }, [fontsLoaded, preLoaded]);

  if (!fontsLoaded || !preLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
}
