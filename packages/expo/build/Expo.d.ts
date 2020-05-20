import './Expo.fx';
import * as Linking from 'expo-linking';
import * as SplashScreen from './launch/SplashScreen';
import * as Logs from './logs/Logs';
export { Linking };
export { Logs };
export { default as apisAreAvailable } from './apisAreAvailable';
export { default as registerRootComponent } from './launch/registerRootComponent';
export { default as Notifications } from './Notifications/Notifications';
export { SplashScreen };
export { default as AppLoading } from './launch/AppLoading';
export { default as DangerZone } from './DangerZone';
export { AR, Updates } from './deprecated';
export { Accelerometer, AdMobBanner, AdMobInterstitial, AdMobRewarded, Animated, Amplitude, AppAuth, Asset, Audio, BackgroundFetch, BarCodeScanner, Barometer, BlurView, Brightness, Calendar, Camera, Constants, Contacts, Crypto, DocumentPicker, Easing, Facebook, FacebookAds, FaceDetector, FileSystem, Font, GestureHandler, GL, GLView, GoogleSignIn, Google, Gyroscope, Haptic, Haptics, Icon, ImageManipulator, ImagePicker, IntentLauncher, IntentLauncherAndroid, KeepAwake, LinearGradient, LocalAuthentication, Localization, Location, Magnetometer, MagnetometerUncalibrated, MailComposer, MapView, MediaLibrary, Pedometer, Permissions, Print, PublisherBanner, Random, ScreenOrientation, SecureStore, Segment, Sensors, Sharing, SMS, Speech, SQLite, Svg, takeSnapshotAsync, TaskManager, Transition, Transitioning, Video, WebBrowser, WebView, } from './removed';
