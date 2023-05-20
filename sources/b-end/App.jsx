// Ceritanya StatusBar ini sekarang warnya juga putih, jadi kita comment saja
// import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView as SafeAreaViewCtx,
  SafeAreaProvider,
} from "react-native-safe-area-context";

// Ini tidak kita gunakan yah.
// const FirstPage = () => {
//   const buttonOnPressHandler = () => {
//     // Untungnya console log masih ada yah...
//     console.log("Halo Dunia");
//   };

//   return (
//     // Mari kita coba tambahkan backgroudColor CSS standar di sini, apakah jalan?
//     <View style={{ backgroundColor: "yellow" }}>
//       <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
//       <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
//       <Text>Buka App.jsx dan mulai mengembangkan project ini !</Text>
//       {/* Mari kita coba menggunakan Component lain selain Text */}
//       {/* Button ini tidak menggunakan onClick lagi yah */}
//       {/* Ingat ini component yang Mobile First, jadi eventnya PASTI BERBEDA ! */}
//       <Button
//         title="Cobain Button"
//         color="blue"
//         onPress={buttonOnPressHandler}
//       />
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// };

// Ini yang akan kita gunakan
// const SecondPage = () => {
//   return (
//     // Marti kita coba menuliskan kode ini dan lihat, hasil kotaknya menjadi seperti apa yah !
//     <View style={styles.customContainer}>
//       <View style={styles.greenBox}>
//         <View style={styles.blueBox} />
//         <View style={styles.orangeBox} />
//         <View style={styles.redBox} />
//         <View style={styles.purpleBox} />
//       </View>
//       <View style={styles.redBox}>
//         {/* Image pertama dengan width dan height dan lokal image */}
//         <Image
//           source={require("./assets/favicon.png")}
//           style={styles.imageLogo}
//         />

//         {/* Image kedua didapat dari remote url */}
//         <Image
//           source={{ uri: "https://reactjs.org/logo-og.png" }}
//           style={styles.imageLogo}
//         />
//       </View>
//     </View>
//   );
// };

const ThirdPage = () => {
  // State yang akan berisi data tarikan dari eksternal
  const [data, setData] = useState("");

  // Standard useEffet untuk menarik data
  useEffect(
    () => {
      // IIFE untuk fetch data
      (async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const responseJson = await response.json();

        setData(responseJson);
      })();
    },
    // Deps list array kosong untuk tarik data 1x saja
    []
  );

  // Ini adalah fungsi yang akan menerima sebuah Object,
  // dimana salah satu propsnya bernama item
  const renderItem = ({ item }) => {
    // Kita akan render Item yang didapatkan di sini
    return (
      // Di sini kita akan mencoba untuk menggunakan TouchableOpacity
      // (Karena Button susah untuk di-styling)
      <TouchableOpacity
        style={styles.listButton}
        onPress={(event) => {
          console.log(item.id);
        }}
      >
        <Text style={styles.listText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    // Di sini kita akan mencoba menggunakan FlatList
    // harus ada required attributes:
    // - data = data yang akan diterima
    // - renderItem = Function Component yang akan dirender untuk setiap datum yang ditemukan
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaViewCtx>
        <ThirdPage />
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
  imageLogo: {
    height: 80,
    width: 80,
  },
  // Style Tambahan untuk List Item
  listButton: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "aquamarine",
    borderRadius: 8,
  },
  listText: {
    fontSize: 24,
  },
});
