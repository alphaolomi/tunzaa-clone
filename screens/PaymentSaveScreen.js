import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import ToolbarMain from "../ui/ToolbarMain";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import ButtonSelect from "../ui/ButtonSelect";

const PaymentSaveScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <ScrollView
        style={{
          backgroundColor: Colors.primaryColor,
        }}
      >
        <StatusBar style="light" backgroundColor={Colors.primaryColor} />
        <ToolbarMain title="Muda wa kumaliza" />

        <View className="p-5 h-full mb-8">
          <View className=" border border-neutral-400 py-8 px-6 rounded-3xl justify-center items-center">
            <View className="flex-row justify-between bg-neutral-200 rounded-2xl items-center">
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "cover",
                }}
                className="rounded-l-2xl"
                source={require("../assets/plan_payment.png")}
              />
              <View className=" flex-1 mx-3">
                <TouchableOpacity>
                  <Text style={{ color: Colors.yellow, fontWeight: "500" }}>
                    Badili tarehe
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className=" bottom-0 flex-row justify-evenly items-center gap-6 bg-white pt-3 px-6 pb-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" bg-neutral-300  py-3 px-6 rounded-full justify-center items-center"
        >
          <Text className=" flex-1 text-sm font-semibold text-neutral-700">
            Rudi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Payment", { item })}
          style={{ backgroundColor: Colors.primaryColor }}
          className=" flex-row flex-1 py-3 px-6 rounded-full justify-center items-center"
        >
          <Text className=" text-sm font-semibold text-white mx-6">
            Endelea
          </Text>
          <Feather color="white" name="arrow-right" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSaveScreen;
