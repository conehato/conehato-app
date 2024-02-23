import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { useGetExpoPushTokenPermission } from './useGetExpoPushTokenPermission';

import { getExpoPushToken } from '@/helpers/notification';

export function useGetExpoPushToken() {
  const permission = useGetExpoPushTokenPermission();
  const [expoPushToken, setExpoPushToken] = useState<string>();

  useEffect(() => {
    if (!permission) return;

    (async () => setExpoPushToken(await getExpoPushToken()))();
  }, [permission]);

  useEffect(() => {
    if (!!expoPushToken && Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
      });
    }
  }, [expoPushToken]);

  return expoPushToken;
}
