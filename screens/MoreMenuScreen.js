import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MoreMenuScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.secondaryColor,
        height: "100%",
      }}
      className="flex mt-8 "
    >
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />
      <View className=" flex-row justify-between items-center">
        <View
          style={{
            backgroundColor: Colors.primaryColor,
            width: 190,
            height: 140,
            borderBottomRightRadius: 70,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: 40, resizeMode: "contain" }}
            source={require("../assets/tunzaa_text.png")}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} className=" m-6">
          <Feather name="x" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View className="m-6 gap-3">
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("Not implemented!", ToastAndroid.SHORT);
          }}
          className=" flex-row gap-4"
        >
          <Feather name="heart" size={24} color={Colors.primaryColor} />
          <Text>Alika Marafiki</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Setting")}
          className=" flex-row gap-4"
        >
          <EvilIcons name="gear" size={30} color={Colors.primaryColor} />
          <Text>Mipangilio</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
      />
      <View className=" mx-6 ">
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("Not implemented!", ToastAndroid.SHORT);
          }}
          className=" my-4 "
        >
          <Text className=" font-normal text-black">Kuhusu Tunzaa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("Not implemented!", ToastAndroid.SHORT);
          }}
          className=" my-4 "
        >
          <Text className=" font-normal text-black">Maswali na Majibu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("Not implemented!", ToastAndroid.SHORT);
          }}
          className=" my-4 "
        >
          <Text className=" font-normal text-black">Wasiliana na Tunzaa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            ToastAndroid.show("Not implemented!", ToastAndroid.SHORT);
          }}
          className=" my-2 "
        >
          <Text className=" font-normal text-black">Vigezo na Masharti</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MoreMenuScreen;
