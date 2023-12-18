import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ToolbarMain from "../ui/ToolbarMain";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import OrderOnprogress from "../components/OrderOnprogress";
import OrderComplete from "../components/OrderComplete";
import OrderGift from "../components/OrderGift";

const OrderScreen = () => {
  const navigation = useNavigation();
  const [tabNum, setTabNum] = useState(1);

  const tabPressHandler = (num) => {};
  return (
    <View style={{ backgroundColor: Colors.secondaryColor }}>
      <View>
        <StatusBar style="light" backgroundColor={Colors.primaryColor} />
        <View
          style={{ backgroundColor: Colors.primaryColor }}
          className="flex flex-row justify-center items-center pt-10 pb-6"
        >
          <Text className=" text-white text-lg font-semibold">Oda</Text>
        </View>
      </View>
      <View className="flex-row mt-6 justify-evenly border-b border-gray-200">
        <TouchableOpacity onPress={() => setTabNum(1)} className="">
          <Text
            style={{
              color: tabNum === 1 ? Colors.primaryColor : "gray",
              fontWeight: "600",
            }}
          >
            Zinazoendelea
          </Text>
          {tabNum === 1 && (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                height: 4,
                marginTop: 15,
                borderTopRightRadius: 6,
                borderTopLeftRadius: 6,
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabNum(2)} className="">
          <Text
            style={{
              color: tabNum === 2 ? Colors.primaryColor : "gray",
              fontWeight: "600",
            }}
          >
            Zilizokamilika
          </Text>
          {tabNum === 2 && (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                height: 4,
                marginTop: 15,
                borderTopRightRadius: 6,
                borderTopLeftRadius: 6,
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabNum(3)} className="">
          <Text
            style={{
              color: tabNum === 3 ? Colors.primaryColor : "gray",
              fontWeight: "600",
            }}
          >
            Zawadi
          </Text>
          {tabNum === 3 && (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                height: 4,
                marginTop: 15,
                borderTopRightRadius: 6,
                borderTopLeftRadius: 6,
              }}
            />
          )}
        </TouchableOpacity>
      </View>

      {tabNum === 1 && <OrderOnprogress />}
      {tabNum === 2 && <OrderComplete />}
      {tabNum === 3 && <OrderGift />}
    </View>
  );
};

export default OrderScreen;
