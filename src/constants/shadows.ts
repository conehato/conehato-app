import { Platform, ViewStyle } from 'react-native';

type ShadowStyle = Pick<
  ViewStyle,
  'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
> & { boxShadow?: string; filter?: string };

export const shadows = {
  blur_4:
    Platform.select<ShadowStyle>({
      ios: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
      web: {
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        elevation: 4,
      },
    }) || {},

  blur_8:
    Platform.select<ShadowStyle>({
      ios: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
      },
      android: {
        elevation: 13,
      },
      web: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 8,
        elevation: 13,
      },
    }) || {},

  blur_16:
    Platform.select<ShadowStyle>({
      ios: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 16.0,
      },
      android: {
        elevation: 4,
      },
      web: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.24,
        shadowRadius: 16.0,
        elevation: 4,
      },
    }) || {},

  landing_16:
    Platform.select<ShadowStyle>({
      ios: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.0,
      },
      android: {
        elevation: 24,
      },
      web: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.0,
        elevation: 24,
      },
    }) || {},
};
