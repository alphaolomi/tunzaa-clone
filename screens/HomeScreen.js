import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { items } from "../constants/data";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [products, setProducts] = useState(items);
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.secondaryColor,
        height: "100%",
      }}
    >
      <StatusBar style="light" backgroundColor={Colors.darkGray} />
      <Toolbar />
      <View style={{ paddingBottom: 100 }}>
        <View className="flex-row items-center  -mt-6  space-x-3 px-4 pb-2 ">
          <View className="flex-row flex-1 items-center p-3 rounded-xl bg-white border border-gray-300">
            <TextInput
              placeholder="Tafuta na Tunzaa"
              className="ml-2 flex-1"
              keyboardType="default"
            />
          </View>
          <View
            className={`p-3 rounded-lg bg-white items-center justify-center border border-gray-300 `}
          >
            <Feather name="sliders" size={24} color={Colors.primaryColor} />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <View>
            <View className=" flex-row mx-6 mt-3 justify-between">
              <View>
                <Text style={{ color: Colors.lightGray }}>Biashara</Text>
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontWeight: "500",
                  }}
                >
                  Tazama Zote
                </Text>
              </View>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                padding: 10,
              }}
              horizontal
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Shop", {
                    shop: "tunzaa",
                  })
                }
                className="mx-1.5"
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/tunzaa.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Shop", {
                    shop: "tigo",
                  })
                }
                className="mx-1.5"
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/tigo.jpeg")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Shop", {
                    shop: "cloudsfm",
                  })
                }
                className="mx-1.5"
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/cloudsfm.jpeg")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Shop", {
                    shop: "tunzaa",
                  })
                }
                className="mx-1.5"
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/tunzaa.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Shop", {
                    shop: "mkuki",
                  })
                }
                className="mx-1.5"
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/mkuki.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Shop", {
                    shop: "tunzaa",
                  })
                }
                className="mx-1.5"
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 14,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/tunzaa.png")}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: "row",

                flexWrap: "wrap",
              }}
              className=" mx-2"
            >
              {items.map((item, i) => (
                <TouchableOpacity
                  style={{ width: "47%" }}
                  key={i}
                  onPress={() =>
                    navigation.navigate("ProductDescription", { item })
                  }
                  className=" m-1 bg-white border border-gray-300 rounded-xl justify-center items-center"
                >
                  <View></View>
                  <Image
                    className=" rounded-t-xl"
                    style={{
                      width: "100%",
                      height: 100,
                      resizeMode: "cover",
                    }}
                    source={{ uri: item.imgUrl }}
                  />

                  <Text
                    style={{
                      color: Colors.darkGray,
                      height: 35,
                      marginVertical: 5,
                      fontSize: 12,
                      marginHorizontal: 6,
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontWeight: "700",

                      fontSize: 16,
                      marginBottom: 8,
                    }}
                  >
                    Tsh {item.price}
                  </Text>
                  <View className="flex flex-row justify-between w-full">
                    <View />
                    <View className="flex flex-row m-3 gap-3">
                      <Feather name="heart" size={24} color="gray" />
                      <AntDesign name="sharealt" size={24} color="gray" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
