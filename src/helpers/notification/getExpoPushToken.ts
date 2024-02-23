import * as Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

export async function getExpoPushToken() {
  return (
    await Notifications.getExpoPushTokenAsync({
      projectId: Constants.default.expoConfig?.extra?.eas.projectId,
    })
  ).data;
}
