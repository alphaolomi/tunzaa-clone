import { View, Text } from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import MyButton from "../ui/MyButton";
import { useNavigation } from "@react-navigation/native";

const JipangeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
        <StatusBar style="light" backgroundColor={Colors.primaryColor} />
        <View
          style={{ backgroundColor: Colors.primaryColor }}
          className="flex flex-row justify-center items-center pt-10 pb-6"
        >
          <Text className=" text-white text-lg font-semibold">Arifa</Text>
        </View>
      </View>
      <View
        style={{
          height: "100%",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text className=" text-xl text-gray-400 text-center w-[300px]">
          Hakuna bidhaa kwenye mipango yako
        </Text>
        <EvilIcons name="search" size={64} color={Colors.primaryColor} />
        <View className="w-full px-6 mt-6">
          <MyButton onPress={() => navigation.goBack()} title="Weka bidhaa" />
        </View>
      </View>
    </View>
  );
};

export default JipangeScreen;
