// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   Dimensions,
//   Image,
//   Pressable,
// } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import HomeIcontwo from "../../../../assets/images/item1-bg-path.png";

// const { width } = Dimensions.get("window");
// const CIRCLE_RADIUS = width * 0.3;
// const ICON_SIZE = 120;
// const CENTER_CARD_SIZE = 100;

// const DATA = [
//   {
//     id: "1",
//     icon: "home",
//     text: "Intoduction",
//     screen: "intoduction",
//     image: HomeIcontwo,
//   },
//   {
//     id: "2",
//     icon: "user",
//     screen: "profile",
//     text: "Profile",
//     image: HomeIcontwo,
//   },
//   {
//     id: "3",
//     icon: "cog",
//     screen: "settings",
//     text: "Settings",
//     image: HomeIcontwo,
//   },
//   {
//     id: "4",
//     icon: "bell",
//     screen: "notifications",
//     text: "Notifications",
//     image: HomeIcontwo,
//   },
//   {
//     id: "5",
//     icon: "envelope",
//     screen: "messages",
//     text: "Messages",
//     image: HomeIcontwo,
//   },
//   {
//     id: "6",
//     icon: "calendar",
//     screen: "calendar",
//     text: "Calendar",
//     image: HomeIcontwo,
//   },
//   {
//     id: "7",
//     icon: "heart",
//     screen: "favorites",
//     text: "Favorites",
//     image: HomeIcontwo,
//   },
//   {
//     id: "8",
//     icon: "globe",
//     screen: "explore",
//     text: "Explore",
//     image: HomeIcontwo,
//   },
// ];

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground
//       source={{
//         uri: "https://images.unsplash.com/photo-1598300053656-485b40e1a48b",
//       }}
//       style={styles.background}
//     >
//       <View style={styles.circleContainer}>
//         <View style={styles.centerCard}>
//           <Image
//             source={{ uri: "https://your-logo-url.com/logo.png" }}
//             style={styles.centerLogo}
//           />
//         </View>

//         {DATA.map((item, index) => {
//           const angle = index * ((2 * Math.PI) / DATA.length);
//           const x = CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE / 2;
//           const y = CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE / 2;
//           const rotation = (angle * 180) / Math.PI + 90;

//           return (
//             <Pressable
//               key={item.id}
//               style={{
//                 position: "absolute",
//                 left: x,
//                 top: y,
//               }}
//               onPress={() => navigation.navigate(item.screen)}
//             >
//               <ImageBackground
//                 source={item.image}
//                 style={styles.iconBackground}
//                 imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
//               >
//                 <View style={styles.iconContainer}>
//                   <FontAwesome5 name={item.icon} size={20} color="black" />
//                   <Text style={styles.cardText}>{item.text}</Text>
//                 </View>
//               </ImageBackground>
//             </Pressable>
//           );
//         })}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   circleContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     width: width,
//     height: width,
//     justifyContent: "center",
//     alignItems: "center",
//     transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
//   },
//   centerCard: {
//     width: CENTER_CARD_SIZE,
//     height: CENTER_CARD_SIZE,
//     backgroundColor: "black",
//     borderRadius: CENTER_CARD_SIZE / 2,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     zIndex: 10,
//     elevation: 6,
//     borderWidth: 2,
//     borderColor: "white",
//   },
//   centerLogo: {
//     width: CENTER_CARD_SIZE * 0.6,
//     height: CENTER_CARD_SIZE * 0.6,
//     borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
//   },
//   iconBackground: {
//     width: ICON_SIZE,
//     height: ICON_SIZE,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: ICON_SIZE / 2,
//     overflow: "hidden",
//   },
//   cardText: {
//     color: "black",
//     fontSize: 10,
//     fontWeight: "bold",
//     marginTop: 4,
//     textAlign: "center",
//   },
//   iconContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import BgPathLight from "../../../../assets/images/item1-bg-path.png";
import BgPathDark from "../../../../assets/images/item2-bg-path.png";

import introductionIcons from "../../../../assets/images/introductionIcons.png";
import amliyatIcons from "../../../../assets/images/amliyatIcons.png";
import bookicon from "../../../../assets/images/bookicon.png";
import istakhraIcon from "../../../../assets/images/istakhraIcon.png";
import rohanidokanIcon from "../../../../assets/images/rohanidokanIcon.png";
import rohanielajIcon from "../../../../assets/images/rohanielajIcon.png";
import tawizatusmaniyaIcon from "../../../../assets/images/tawizatusmaniyaIcon.png";
import wazafIcon from "../../../../assets/images/wazafIcon.png";

const { width, height } = Dimensions.get("window");

// Dynamically adjust sizes
const ICON_SIZE_WIDTH = width * 0.27; // 18% of screen width
const ICON_SIZE_HEIGHT = height * 0.2; // 10% of screen height
const CENTER_CARD_SIZE = width * 0.4; // 35% of screen width
const CIRCLE_RADIUS = width * 0.3; // Circular menu radius

const DATA = [
  {
    id: "3",
    icon: istakhraIcon,
    screen: "settings",
    text: "فری استخارہ",
    image: BgPathLight,
  },
  {
    id: "4",
    icon: rohanielajIcon,
    screen: "notifications",
    text: "روحانی علاج",
    image: BgPathDark,
  },
  {
    id: "5",
    icon: tawizatusmaniyaIcon,
    screen: "messages",
    text: "تعویذات عثمانیہ",
    image: BgPathLight,
  },
  {
    id: "6",
    icon: amliyatIcons,
    screen: "calendar",
    text: "عملیات کورس",
    image: BgPathDark,
  },
  {
    id: "7",
    icon: rohanidokanIcon,
    screen: "favorites",
    text: "روحانی دکان",
    image: BgPathLight,
  },
  {
    id: "8",
    icon: bookicon,
    screen: "explore",
    text: "کتب",
    image: BgPathDark,
  },
  {
    id: "2",
    icon: introductionIcons,
    text: "تعارف",
    screen: "introduction",
    image: BgPathLight,
  },
  {
    id: "1",
    icon: wazafIcon,
    screen: "profile",
    text: "وظائف",
    image: BgPathDark,
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../../../assets/images/background.png")}
      style={styles.background}
    >
      <View style={styles.circleContainer}>
        <View style={styles.centerCard}>
          <Image
            source={require("../../../../assets/images/ss.png")}
            style={styles.centerLogo}
          />
        </View>

        {DATA.map((item, index) => {
          const angle = index * ((2 * Math.PI) / DATA.length);
          const x =
            CIRCLE_RADIUS * Math.cos(angle) + width / 2 - ICON_SIZE_WIDTH / 2;
          const y =
            CIRCLE_RADIUS * Math.sin(angle) + width / 2 - ICON_SIZE_HEIGHT / 2;
          const rotation = (angle * 180) / Math.PI + 90;

          return (
            <Pressable
              key={item.id}
              style={{ position: "absolute", left: x, top: y }}
              onPress={() => navigation.navigate(item.screen)}
            >
              <ImageBackground
                source={item.image}
                style={[
                  styles.iconBackground,
                  { width: ICON_SIZE_WIDTH, height: ICON_SIZE_HEIGHT },
                ]}
                resizeMode="contain" // Ensures original shape
                imageStyle={{ transform: [{ rotate: `${rotation}deg` }] }}
              >
                <View style={styles.iconContainer}>
                  <Image
                    source={item.icon}
                    style={{
                      width: ICON_SIZE_WIDTH * 0.2,
                      height: ICON_SIZE_WIDTH * 0.2,
                      // resizeMode: "contain",
                    }}
                  />

                  <Text
                    style={[
                      styles.cardText,
                      { fontSize: ICON_SIZE_WIDTH * 0.11 },
                    ]}
                  >
                    {item.text}
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          );
        })}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: width,
    height: width,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: -width / 2 }, { translateY: -width / 2 }],
  },
  centerCard: {
    width: CENTER_CARD_SIZE,
    height: CENTER_CARD_SIZE,
    backgroundColor: "white",
    borderRadius: CENTER_CARD_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 10,
    elevation: 6,
    borderWidth: 6,
    borderColor: "#F9F6F2",
  },
  centerLogo: {
    width: CENTER_CARD_SIZE * 0.56,
    height: CENTER_CARD_SIZE * 0.7,
    // borderRadius: (CENTER_CARD_SIZE * 0.6) / 2,
  },
  iconBackground: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#6C472D",
    fontWeight: "bold",
    textAlign: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
