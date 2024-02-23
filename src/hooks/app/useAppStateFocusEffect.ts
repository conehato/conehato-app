import { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export function useAppStateFocusEffect(effect: () => void) {
  useEffect(() => {
    effect();
    const onAppStateChange = (state: AppStateStatus) => {
      state === 'active' && effect();
    };

    const { remove } = AppState.addEventListener('change', onAppStateChange);

    return () => remove();
  }, [effect]);
}
