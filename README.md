This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Splast Screen Set-Up on both platform
------------------------------------------

## Installation

First, you need to install the library in your React Native project using a package manager like npm or yarn:
```bash
npm install --save react-native-bootsplash && cd ios && pod install
```

# --- or ---

```bash
npx yarn add react-native-bootsplash && cd ios && pod install
```

Use below command in terminall but replace your image path on ```assets/images/logo_ss.png```(path will checking by root folder) and background color on ```#87CEEB```.
```bash
yarn react-native generate-bootsplash assets/images/logo_ss.png \
  --platforms=android,ios \
  --background=#87CEEB
```
  ![Screenshot 2024-02-27 at 5 07 41 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/00b1485c-d190-4b4b-88a4-8b24cc2d0f45)
  
  ![Screenshot 2024-02-27 at 5 08 37 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/673b02a4-ccc2-4e69-9ef8-761a5202fb5e)

## IOS SET-UP

Add some code in your ```ios/YourProjectName/AppDelegate.mm``` file.
```bash
#import "RNBootSplash.h"
```
![Screenshot 2024-02-27 at 5 18 10 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/68c8a22e-1721-43b5-afe4-45c845a5cdda)
```bash
// ⬇️ Add this before file @end
- (UIView *)createRootViewWithBridge:(RCTBridge *)bridge
                          moduleName:(NSString *)moduleName
                           initProps:(NSDictionary *)initProps {
  UIView *rootView = [super createRootViewWithBridge:bridge
                                          moduleName:moduleName
                                           initProps:initProps];

  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // ⬅️ initialize the splash screen

  return rootView;
}
```
![Screenshot 2024-02-27 at 5 24 07 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/b0346428-ba58-4c3f-9bfe-508849a8e91f)

### Android SET-UP

Add ```android:theme="@style/BootTheme"``` code in ```<activity>``` tag of `MainActivity` in ```android/app/src/main/AndroidManifest.xml``` file.

![Screenshot 2024-02-27 at 5 16 54 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/a9d33679-3674-44cd-a4da-7f9c2123033e)

Finally add code in ```android/app/src/main/java/com/yourprojectname/MainActivity.java``` file.
```bash
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;
```
![Screenshot 2024-02-27 at 5 29 54 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/3a1ab169-4cd1-4dc2-88d8-7616d48ee496)

If your react-native version is small than 0.73, add below code.
```bash
@Override
  protected void onCreate(Bundle savedInstanceState) {
    RNBootSplash.init(this, R.style.BootTheme); // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState); // or super.onCreate(null) with react-native-screens
  }
```
else add below code.
```bash
override fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this, R.style.BootTheme) // ⬅️ initialize the splash screen
    super.onCreate(null) // or super.onCreate(null) with react-native-screens
  }
```
![Screenshot 2024-02-27 at 5 30 00 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/64622e63-912e-47b1-977a-0e64a8865456)

# Hide Splash Screen

Use below code for hide splash screen.
```bash
BootSplash.hide()
```
![Screenshot 2024-02-27 at 5 32 23 PM](https://github.com/SavaliyaZeel/splashscreen/assets/158541274/2bb37b3a-6cee-4d52-a49c-38d7fa258cb3)
