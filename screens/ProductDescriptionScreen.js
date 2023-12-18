import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ToolbarMain from "../ui/ToolbarMain";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";

const ProductDescriptionScreen = () => {
  const { params: item } = useRoute();

  const buyNowHandler = () => {};

  const inInstallmentHandler = () => {};
  return (
    <View>
      <ScrollView
        style={{
          backgroundColor: Colors.secondaryColor,
        }}
        className="flex  "
      >
        <View>
          <StatusBar style="light" backgroundColor={Colors.primaryColor} />
          <View
            style={{ backgroundColor: Colors.primaryColor }}
            className="flex flex-row justify-between items-center pt-8"
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className=" m-2 p-2"
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <Text className=" text-white text-lg font-semibold">Bidhaa</Text>
            <TouchableOpacity className=" p-2 mr-1">
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{
              width: "100%",
              height: 320,
              resizeMode: "cover",
            }}
            source={{ uri: item.item.imgUrl }}
          />
          <View className=" px-8 mt-5">
            <View className=" flex flex-row justify-between">
              <Text className=" w-3/4 text-lg font-normal">
                {item.item.title}
              </Text>
              <View className="flex flex-row gap-2">
                <Feather name="heart" size={24} color="gray" />
                <AntDesign name="sharealt" size={24} color="gray" />
              </View>
            </View>
          </View>
          <View className=" px-8 mt-3">
            <Text
              style={{
                color: Colors.primaryColor,
                fontWeight: "700",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Tsh {item.item.price}
            </Text>
          </View>
          <View className=" px-8 mt-3">
            <View className="flex-row gap-3">
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  resizeMode: "cover",
                }}
                source={{ uri: item.item.imgUrl }}
              />
              <View>
                <Text className=" font-semibold">Mkuki na Nyota</Text>
                <Text className="font-light text-xs">Kigambon</Text>
              </View>
            </View>

            <Text
              style={{
                color: Colors.primaryColor,
                marginTop: 10,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Maelezo
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                fontWeight: 400,
                marginBottom: 100,
              }}
              className=" text-justify"
            >
              {item.item.descriptions}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className=" absolute bottom-0 flex-row justify-evenly items-center bg-white pt-3 px-6 pb-4">
        <TouchableOpacity
          onPress={buyNowHandler}
          className="bg-green-500  py-3 px-6 rounded-full justify-center items-center"
        >
          <Text className=" text-sm font-semibold text-white">Nunua Sasa</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.primaryColor,
            fontSize: 14,
            fontWeight: "bold",
          }}
          className="mx-6"
        >
          au
        </Text>
        <TouchableOpacity
          onPress={inInstallmentHandler}
          style={{ backgroundColor: Colors.primaryColor }}
          className="bg-green-500 py-3 px-6 rounded-full justify-center items-center"
        >
          <Text className=" text-sm font-semibold text-white">Lipa Kidogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDescriptionScreen;
