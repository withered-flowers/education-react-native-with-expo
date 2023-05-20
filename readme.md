# Education React Native with Expo

## Table of Content

- [Disclaimer](#dislaimer)
- [Requirements](#Requirements)
- [Apa itu React Native](#apa-itu-react-native)
- [React Native - Manual vs Framework](#react-native---manual-vs-framework)
- [RN Framework - Expo](#rn-framework---expo)
- [Let's Demo](#lets-demo)
  - [Create RN Project via Expo](#create-rn-project-via-expo)
  - [RN Project - Struktur Folder](#rn-project---struktur-folder)
  - [RN Component](#rn-component)
  - [RN Styling - Flex](#rn-styling---flex)
  - [RN Component - Image](#rn-component---image)
  - [RN Component - ScrollView vs FlatList](#rn-component---scrollview-vs-flatlist)

## Disclaimer

- Pada pembelajaran ini, development aplikasi akan menggunakan Smartphone mandiri, bukan via Emulator

## Requirements

- Sudah menginstall NodeJS LTS (Pada saat tulisan ini, LTS = 18.x)
- Sudah menginstall aplikasi `Expo Go` pada Smartphone yang digunakan (cari di Play Store (Android) / App Store (iOS))
- Pastikan Laptop / PC menggunakan jaringan yang sama dengan Smartphone (No VPN / Magic magic lainnya !)

## Apa itu React Native?

- https://reactnative.dev/

`Belajarnya Sekali, Nulisnya dimana mana !` adalah jargon dari `React Native` ini.

Memungkinkan developer untuk menuliskan kode native untuk Android, iOS, dan Web untuk React dengan (katanya) sekali tulis saja !

Tapi... kode yang ditulis WAJIB menggunakan Component dasar untuk yang bisa digunakan untuk Android / iOS / Web a.k.a tidak bisa menggunakan tag HTML standar yang "biasa" digunakan untuk React di web !

```js
const App = () => {
  return (
    <>
      <p>Halo Dunia dari Web React Umumnya, Tapi ga jalan di React Native</p>
    </>
  );
};

export default App;
```

```js
import { View, Text } from "react-native";

const RNApp = () => {
  return (
    <View>
      <Text>Halo Dunia dari React Native App, ini baru jalan !</Text>
    </View>
  );
};

export default RNApp;
```

## React Native - Manual vs Framework

Nah dalam membuat Aplikasi React Native ini, apabila kita menggunakan React Native saja (Manual), maka kita akan membuat semuanya secara mandiri, dalam artian:

- Membuat code dari react-native
- Membundle Appsnya menjadi Aplikasi untuk Mobile (Android / iOS)
- Membuat Project untuk Android / iOS untuk bisa mengikat React Native (butuh untuk instalasi Android Studio + SDK / XCode untuk iOS di Mac)
- Menjalankan (deploy) Aplikasi React Native ke dalam Android / iOS

Hal ini tentunya merepotkan bukan ???

Oleh karena itu, kita disini akan belajar untuk menggunakan Framework React Native yang akan mempercepat proses development aplikasi berbasis React Native kita, yaitu Expo !

## RN Framework - Expo

Expo merupakan suatu "Framework" yang lengkap yang akan mengakomodir kita sebagai developer untuk me-managed dari konfigurasi, developer tools, hingga publish apps ke App Store / Play Store (apabila kita menggunakan workflow yang managed dari si Expo-nya).

Intinya bila menggunakan "Full Expo", maka kita bisa:

- Menggunakan expo package untuk bisa menggunakan package tambahan bawaan expo (Component tertentu, Pembaca Sensor Tertentu, dll)
- Mendapatkan Developer Experience yang bisa membuat kita develop aplikasi dengan cepat via `Expo Go`
- dan masih banyak lainnya lagi.

Karena kita ingin mendevelop dan ingin bisa mempublikasi dengan cepat, maka kita akan mencoba develop aplikasi Mobile via Expo pada pembelajaran kali ini !

- https://expo.dev/
- https://docs.expo.dev/archive/managed-vs-bare/

Disclaimer:

- Ingat bahwa kita menggunakan Managed Workflow (`Full Expo`) sehingga akan ada limitasi yang didapatkan (https://docs.expo.dev/faq/#limitations)

## Let's Demo

Tanpa ba bi bu lagi, mari sekarang kita mencoba untuk langsung membuat aplikasi sederhana dengan menggunakan Expo yah !

```
SANGAT DISARANKAN UNTUK MENGGUNAKAN NPM, JANGAN MENGGUNAKAN YARN / PNPM APABILA TIDAK INGIN REPOT AKAN KONFIGURASI TAMBAHAN !
```

### Create RN Project via Expo

Untuk membuat Project dengan Expo, Langkah-langkahnya adalah sebagai berikut:

1. Membuka Folder dimana project akan dibuat
1. Ketik perintah di bawah ini untuk membuat project:

   ```sh
   # Apabila ingin langsung membuat di folder, gunakan perintah
   # npx create-expo-app .

   npx create-expo-app nama-project-untuk-react-native
   ```

1. Menunggu sebentar hingga template berhasil di clone, dan package selesai terinstall

1. Setelah selesai pindah ke folder project tersebut dan jalankan perintah

   ```sh
   npm run start
   ```

1. Pada saat aplikasi sudah berjalan, maka akan muncul sebuah QR Code yang bisa discan, **scan QR Code ini dengan aplikasi Expo Go pada Smartphone Anda**

1. Setelah di scan, maka Aplikasi dapat berjalan pada Smartphone yang dimiliki dan kita pun akan siap untuk mendevelop aplikasi berbasis React Native !

### RN Project - Struktur Folder

Sebelum kita mendevelop aplikasi lebih lanjut, mari kita melihat terlebih dahulu struktur folder template yang diberikan:

```
> root-folder-project
  > .expo <-- berisi file khusus untuk expo, tidak perlu diutak-atik
  > assets <-- berisi assets yang dibutuhkan dalam project (gambar, etc)
  > .gitignore
  > app.json <-- berisi konfigurasi yang bisa dikustom (splash image, etc)
  > App.js <-- File utama yang diberikan (seharusnya jsx)
  > babel.config.js <-- YA ! RN MASIH MENGGUNAKAN BABEL, BUKAN VITE !
  > package-lock.json
  > package.json
```

1. Karena sekarang kita mengetahui bahwa `App.js` merupakan suatu Component, mari kita rename file `App.js` menjadi `App.jsx` kemudian save yah.

1. Maka secara otomatis, Smartphone kita akan merefresh dan tetap berjalan "secara wireless"

1. Sekarang mari kita coba untuk membuka file `App.jsx`, kemudian ganti kode di dalam Component `Text` menjadi sebagai berikut:

   ```jsx
   import { StatusBar } from "expo-status-bar";
   import { StyleSheet, Text, View } from "react-native";

   export default function App() {
     return (
       <View style={styles.container}>
         {/* Ganti di baris ini */}
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         <StatusBar style="auto" />
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "#fff",
       alignItems: "center",
       justifyContent: "center",
     },
   });
   ```

1. Save dan lihatlah pada Smartphone Anda, apakah Textnya berubah?

1. Sekarang perhatikan juga untuk CSS yang digunakan di sini. Untuk CSS yang dibuat di sini,

   **Tidak bisa langsung menggunakan file .css kemudian menggunakan class CSS yang standar.**

   Tapi harus selalu dibuat dalam suatu "Component" yang bernama `StyleSheet` dan dibuat dengan `StyleSheet.create`

   DISCLAIMER:

   **Untuk StyleSheet di sini pun menjadi berbeda, Bootstrap maupun Tailwind TIDAK BISA DIGUNAKAN SECARA LANGSUNG DI REACT NATIVE**

   Umumnya sekarang styling yang bisa digunakan di sini sudah dalam bentuk UI Component:

   - https://reactnativepaper.com/
   - https://reactnativeelements.com/
   - https://nativebase.io/
   - https://akveo.github.io/react-native-ui-kitten/

1. Sedangkan untuk Component apa saja yang ada di dalam React Native (selain `Text` dan `View`), bisa kita baca di:

   - https://reactnative.dev/docs/components-and-apis
   - (Expo Component) https://docs.expo.dev/versions/latest/

1. Tapi kak itu kan banyak banget... kalau _pengen tau_ yang penting / core nya dulu, baca dimana yah?

   - https://reactnative.dev/docs/intro-react-native-components#core-components
   - https://reactnative.dev/docs/components-and-apis

### RN Component

Setelah membaca dokumentasi yang banyak di atas itu, sekarang saat nya kita mencoba untuk mengunakan Component bawaan dari React Native ke dalam Aplikasi kita yah !

Langkah-langkahnya adalah sebagai berikut:

1. Buka kembali file `App.jsx` yang sudah ada, kemudian modifikasi kodenya menjadi sebagai berikut:

   ```jsx
   // Ceritanya StatusBar ini sekarang warnya juga putih, jadi kita comment saja
   // import { StatusBar } from "expo-status-bar";
   import { Button, StyleSheet, Text, View } from "react-native";

   export default function App() {
     const buttonOnPressHandler = () => {
       // Untungnya console log masih ada yah...
       console.log("Halo Dunia");
     };

     return (
       // <View style={styles.container}>
       // Mari kita coba menggunakan View tanpa styles terlebih dulu
       <View>
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         {/* Mari kita coba menggunakan Component lain selain Text */}
         {/* Button ini tidak menggunakan onClick lagi yah */}
         {/* Ingat ini component yang Mobile First, jadi eventnya PASTI BERBEDA ! */}
         <Button
           title="Cobain Button"
           color="blue"
           onPress={buttonOnPressHandler}
         />
         {/* <StatusBar style="auto" /> */}
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "#fff",
       alignItems: "center",
       justifyContent: "center",
     },
   });
   ```

1. Save kode yang sudah dimodifikasi tadi dan jalankan, kita lihat hasilnya seperti apa?

   Ya ! tampilan kita akan menjadi "nabrak" dengan batasan UI yang ada yah, sehingga kesannya `tidak ada padding dan margin-nya !`

   Lalu cara kita "mengakali" hal ini jadinya bagaimana?

   Mari kita coba lihat dokumentasi berikut:

   - https://reactnative.dev/docs/safeareaview

   Pada saat membaca dokumentasi yang ada, perhatikan baik baik, kegunaannya ini jelas, bisa me-render View yang "aman" dari "nabrak" batasan UI yang ada, TAPI ini hanya berjalan untuk iOS pada versi 11+ saja, dan hanya pada iOS saja !

   Artinya akan ada Component yang berjalan untuk OS tertentu saja, hal ini harus sangat diperhatikan ketika kita menggunakan React Native yah !

   Solusinya dari Expo pun sebenarnya ada, mari kita lihat dokumentasi berikut:

   - https://docs.expo.dev/versions/latest/sdk/safe-area-context/

   Nah apabila menggunakan ini, maka kita bisa mendapatkan Component yang bisa digunakan untuk Android / iOS / Web nih !

   Maka kita akan coba untuk menggunakannya yah.

1. Matikan aplikasi dengan `CTRL + C` terlebih dahulu, kemudian install package expo dengan perintah berikut:

   ```sh
   npx expo install react-native-safe-area-context
   ```

1. Kemudian jalankan ulang lagi expo dengan perintah:

   ```sh
   npm run start
   ```

1. Selanjutnya kita akan memodifikasi Kode yang digunakan agar tidak menabrak di Android / iOS dengan menggunakan package yang diinstall tadi yah

1. Buka kembali file `App.jsx` dan modifikasi kode menjadi seperti berikut:

   ```jsx
   // Ceritanya StatusBar ini sekarang warnya juga putih, jadi kita comment saja
   // import { StatusBar } from "expo-status-bar";
   import { Button, StyleSheet, Text, View } from "react-native";
   import {
     SafeAreaView as SafeAreaViewCtx,
     SafeAreaProvider,
   } from "react-native-safe-area-context";

   export default function App() {
     const buttonOnPressHandler = () => {
       // Untungnya console log masih ada yah...
       console.log("Halo Dunia");
     };

     return (
       // <View style={styles.container}>
       // Mari kita coba menggunakan View tanpa styles terlebih dulu

       // Sekarang mari kita coba bungkus dengan SafeAreaView
       <SafeAreaProvider>
         <SafeAreaViewCtx>
           <View>
             <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
             <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
             <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
             {/* Mari kita coba menggunakan Component lain selain Text */}
             {/* Button ini tidak menggunakan onClick lagi yah */}
             {/* Ingat ini component yang Mobile First, jadi eventnya PASTI BERBEDA ! */}
             <Button
               title="Cobain Button"
               color="blue"
               onPress={buttonOnPressHandler}
             />
             {/* <StatusBar style="auto" /> */}
           </View>
         </SafeAreaViewCtx>
       </SafeAreaProvider>
     );
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: "#fff",
       alignItems: "center",
       justifyContent: "center",
     },
   });
   ```

1. Save dan jalankan kembali, maka pada aplikasi Android / iOS sekarang sudah tidak menabrak "dinding" lagi.

Nah setelah kita mulai mengerti bagaimana Component bekerja secara "cross platform" di dalam React Native, saatnya kita belajar tentang styling di dalam React Native yah !

### RN Styling - Flex

Mari kita coba untuk mempelajari styling di dalam React Native ini sekaligus belajar bagaimana membuat flexbox dalam React Native.

1. Mari kita ubah kode `App.jsx` yang kita miliki lagi untuk bisa menggunakan backgroundColor ala standar CSS pada component `View` yang ada yah !

   ```jsx
   ...

   export default function App() {
     ...

     return (
       <SafeAreaProvider>
         <SafeAreaViewCtx>
           {/* Mari kita coba tambahkan backgroudColor CSS standar di sini, apakah jalan? */}
           <View style={{ backgroundColor: "yellow" }}>
           ...
           </View>
         </SafeAreaViewCtx>
       <SafeAreaProvider>
     )
   }
   ```

1. Save kode yang sudah dimodifikasi dan coba jalankan, apakah bisa berjalan?

1. Wah ternyata bisa yah, tapi sayangnya, tidak semua stylenya bisa berjalan dengan baik dan lancar untuk ketiga alam yang ada yah (Android / iOS / Web), khususnya untuk `Flexbox`, karena cara kerjanya berbeda dengan flex yang umumnya ada di Web yah.

   Mari kita coba untuk membaca dokumentasi yang disediakan untuk membuat Flexbox ini yah:

   - https://reactnative.dev/docs/flexbox

1. Setelah membaca dan mencoba dari webnya, kita sekarang akan mencoba untuk membuatnya secara mandiri yah.

1. Modifikasi kode `App.jsx` sehingga menjadi seperti di bawah ini

   ```jsx
   // Ceritanya StatusBar ini sekarang warnya juga putih, jadi kita comment saja
   // import { StatusBar } from "expo-status-bar";
   import { Button, StyleSheet, Text, View } from "react-native";
   import {
     SafeAreaView as SafeAreaViewCtx,
     SafeAreaProvider,
   } from "react-native-safe-area-context";

   // Ini tidak kita gunakan yah.
   const FirstPage = () => {
     const buttonOnPressHandler = () => {
       // Untungnya console log masih ada yah...
       console.log("Halo Dunia");
     };

     return (
       // Mari kita coba tambahkan backgroudColor CSS standar di sini, apakah jalan?
       <View style={{ backgroundColor: "yellow" }}>
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
         {/* Mari kita coba menggunakan Component lain selain Text */}
         {/* Button ini tidak menggunakan onClick lagi yah */}
         {/* Ingat ini component yang Mobile First, jadi eventnya PASTI BERBEDA ! */}
         <Button
           title="Cobain Button"
           color="blue"
           onPress={buttonOnPressHandler}
         />
         {/* <StatusBar style="auto" /> */}
       </View>
     );
   };

   // Ini yang akan kita gunakan
   const SecondPage = () => {
     return (
       // Marti kita coba menuliskan kode ini dan lihat, hasil kotaknya menjadi seperti apa yah !
       <View style={styles.customContainer}>
         <View style={styles.greenBox}>
           <View style={styles.blueBox} />
           <View style={styles.orangeBox} />
           <View style={styles.redBox} />
           <View style={styles.purpleBox} />
         </View>
         <View style={styles.redBox} />
       </View>
     );
   };

   export default function App() {
     return (
       <SafeAreaProvider>
         <SafeAreaViewCtx>
           <SecondPage />
         </SafeAreaViewCtx>
       </SafeAreaProvider>
     );
   }

   const styles = StyleSheet.create({
     /* Yang ini tidak digunakan lagi yah */
     // container: {
     //   flex: 1,
     //   backgroundColor: "#fff",
     //   alignItems: "center",
     //   justifyContent: "center",
     // },

     /* Kita mulai membuat custom style kita dari sini */
     customContainer: {
       flex: 1,
       padding: 20,
       minHeight: "90%",
     },
     greenBox: {
       flex: 1,
       backgroundColor: "darkgreen",
       padding: 20,
       flexDirection: "row",
       minWidth: "100%",
     },
     redBox: {
       flex: 1,
       backgroundColor: "red",
     },
     blueBox: {
       flex: 1,
       backgroundColor: "blue",
     },
     orangeBox: {
       flex: 1,
       backgroundColor: "orange",
     },
     purpleBox: {
       flex: 2,
       backgroundColor: "purple",
     },
   });
   ```

1. Save kode di atas, dan coba lihat kembali apa jadinya yah ! Ternyata `Flexbox` yang ada di dalam sini cukup berbeda dengan yang ada di Web yah. Flex disini menyatakan:

   > Berapa jumlah tempat yang secara "fleksibel" akan termakan oleh Component-nya?

   > Secara Otomatis, React Native akan menghitung berapa jumlah tempat yang tersedia, dan untuk masing masing Component yang ada, berapa jumlah tempat yang akan dimakan.

   Hal ini tentu menjadi berbeda dengan yang ada pada Web yah.

Selanjutnya kita akan mencoba untuk mempelajari bagaimana cara menggunakan Image di dalam React Native yah !

### RN Component - Image

Untuk bisa menggunaan Image, tentunya tag yang digunakan bukan standard dari HTML lagi yah seperti `<img>` ataupun `<picture>`

Melainkan menggunakan Component bawaan dari React native, yaitu `<Image>`.

Untuk dokumentasinya bisa dibaca pada halaman berikut:

- https://reactnative.dev/docs/images

Nah untuk mencobanya, mari kita akan mencoba untuk melakukan hal berikut:

1. Misalnya kita akan menggunakan 2 Image dari 2 tempat yang berbeda:

   - Dari file lokal yang dimiliki (`/assets/adaptive-icon.png`)
   - Dari remote url, sebuah gambar Icon React (`https://reactjs.org/logo-og.png`)

   Disclaimer:

   - Dalam best practicenya, untuk `Image` WAJIB setel `width` dan `height` nya !
   - Dalam best practicenya, untuk `Image` dari remote url WAJIB menggunakan `https`

1. Mari kita mencoba modifikasi kodenya untuk menambahkan image berikut yah dengan memodifikasi file `App.jsx` pada bagian `SecondPage` dan StyleSheet:

   ```jsx
   // StyleSheet
   const styles = StyleSheet.create({
     /* Yang ini tidak digunakan lagi yah */
     // container: {
     //   flex: 1,
     //   backgroundColor: "#fff",
     //   alignItems: "center",
     //   justifyContent: "center",
     // },

     /* Kita mulai membuat custom style kita dari sini */
     customContainer: {
       flex: 1,
       padding: 20,
       minHeight: "90%",
     },
     greenBox: {
       flex: 1,
       backgroundColor: "darkgreen",
       padding: 20,
       flexDirection: "row",
       minWidth: "100%",
     },
     redBox: {
       flex: 1,
       backgroundColor: "red",
     },
     blueBox: {
       flex: 1,
       backgroundColor: "blue",
     },
     orangeBox: {
       flex: 1,
       backgroundColor: "orange",
     },
     purpleBox: {
       flex: 2,
       backgroundColor: "purple",
     },
     imageLogo: {
       height: 80,
       width: 80,
     },
   });
   ```

   ```jsx
   // Ini yang akan kita gunakan
   const SecondPage = () => {
     return (
       // Marti kita coba menuliskan kode ini dan lihat, hasil kotaknya menjadi seperti apa yah !
       <View style={styles.customContainer}>
         <View style={styles.greenBox}>
           <View style={styles.blueBox} />
           <View style={styles.orangeBox} />
           <View style={styles.redBox} />
           <View style={styles.purpleBox} />
         </View>
         <View style={styles.redBox}>
           {/* Image pertama dengan width dan height dan lokal image */}
           <Image
             source={require("./assets/favicon.png")}
             style={styles.imageLogo}
           />

           {/* Image kedua didapat dari remote url */}
           <Image
             source={{ uri: "https://reactjs.org/logo-og.png" }}
             style={styles.imageLogo}
           />
         </View>
       </View>
     );
   };
   ```

1.

### RN Component - ScrollView vs FlatList
