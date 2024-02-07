import { SplashScreen } from '@/components/app';
import { Text } from '@/components/ui';

export default function App() {
  return (
    <SplashScreen>
      <Text style={{ fontWeight: 'bold' }}>
        Open up App.tsx to start working on your app! 한국어 コネハト
      </Text>
      <Text>Open up App.tsx to start working on your app! 한국어 コネハト</Text>

      <Text style={{ fontWeight: 'bold', fontFamily: 'NotoSans' }}>
        Open up App.tsx to start working on your app! 한국어 コネハト
      </Text>
      <Text style={{ fontFamily: 'NotoSans' }}>
        Open up App.tsx to start working on your app! 한국어 コネハト
      </Text>
    </SplashScreen>
  );
}
