import { useEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import { SplashScreen } from '@/components/app';
import { useGetExpoPushToken } from '@/hooks/notification';

export default function App() {
  const token = useGetExpoPushToken();

  useEffect(() => {
    if (!token) return;

    fetch('https://conehato.com/api/expo-push-token', {
      method: 'post',
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((res) => console.log(JSON.stringify(res)));
  }, [token]);

  return (
    <SplashScreen>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </SplashScreen>
  );
}

function Home() {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingBottom: bottom, paddingTop: top }}>
      <WebView style={{ flex: 1 }} source={{ uri: 'https://conehato.com' }} />
    </View>
  );
}
