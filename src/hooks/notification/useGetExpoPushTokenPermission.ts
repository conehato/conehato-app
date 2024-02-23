import * as Notifications from 'expo-notifications';
import { useState } from 'react';

import { useAppStateFocusEffect } from '../app';

export function useGetExpoPushTokenPermission() {
  const [result, setResult] = useState(false);

  useAppStateFocusEffect(() => {
    (async () => {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        setResult(false);
      }
      setResult(true);
    })();
  });

  return result;
}
