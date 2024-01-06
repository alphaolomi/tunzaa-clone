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
import DateTimePicker from "@react-native-community/datetimepicker";

const PaymentScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [showTex, setShowText] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setShowText(false);
  };

  const showDatepicker = () => {
    setShow(true);
    setMode("date");
  };

  return (
    <View className="flex-1">
      <ScrollView
        style={{
          backgroundColor: Colors.primaryColor,
        }}
      >
        <StatusBar style="light" backgroundColor={Colors.primaryColor} />
        <ToolbarMain
          onPress={() => navigation.goBack()}
          title="Muda wa kumaliza"
        />

        <View className="p-5 h-full mb-8">
          <View className=" border border-neutral-400 py-8 px-6 rounded-3xl justify-center items-center">
            <Text className=" text-sm font-semibold text-white">
              Unakaribia Kulipi kwa awamu
            </Text>
            <Text className=" text-sm font-semibold text-white">
              <Text className=" text-xl font-semibold text-white">
                TSh {item.item.price}
              </Text>{" "}
              kwa ajili ya
            </Text>

            <View className="flex-row justify-between bg-neutral-200 rounded-2xl items-center">
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "cover",
                }}
                className="rounded-l-2xl"
                source={{ uri: item.item.imgUrl }}
              />
              <View className=" flex-1 mx-3">
                <Text>{item.item.title}</Text>
              </View>
            </View>
          </View>
          <View className=" mt-6 border border-neutral-400 py-8 px-6 rounded-3xl justify-center items-center">
            <View className="flex-row justify-between bg-white rounded-2xl items-center">
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
                <Text className=" font-normal">Jipimie</Text>
                <Text className=" font-light text-black">
                  Unategemea kufanikisha lengo lako lini?
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={showDatepicker}
              className=" flex-row px-4 py-2 mt-6 bg-neutral-100 rounded-xl justify-center items-center"
            >
              <Text
                style={{
                  color: Colors.primaryColor,
                  opacity: 0.8,
                }}
                className=" mx-4 text-lg"
              >
                {!showTex
                  ? `${date.getDate()}/${
                      date.getMonth() + 1
                    }/${date.getFullYear()}`
                  : "Weka tarehe"}
              </Text>

              <MaterialCommunityIcons
                name="calendar-blank-outline"
                size={24}
                style={{
                  opacity: 0.5,
                }}
                color={Colors.primaryColor}
              />

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={false}
                  onChange={onChange}
                />
              )}
            </TouchableOpacity>
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
          onPress={() =>
            navigation.navigate("PaymentTime", {
              item: item.item,
              payTime: `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`,
            })
          }
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

export default PaymentScreen;
