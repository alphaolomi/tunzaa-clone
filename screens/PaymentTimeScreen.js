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

const itemsSelect = [
  { name: "Kila siku", id: 0, isSelected: false },
  { name: "Baada ya siku 3", id: 1, isSelected: false },
  { name: "Baada ya siku 5", id: 2, isSelected: false },
  { name: "Kila wiki", id: 3, isSelected: false },
  { name: "Kila mwezi", id: 4, isSelected: false },
  { name: "Jipange", id: 5, isSelected: false },
];

const PaymentTimeScreen = () => {
  const { params: item } = useRoute();

  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState(null);

  const selectHandler = (id, index) => {
    console.log(id, index);
    setSelectedTime(id);
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
          title="Muda wa Malipo"
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
                source={require("../assets/plan_payment.png")}
              />
              <View className=" flex-1 mx-3">
                <Text>
                  Unatakiwa kukamilisha malipo kabla ya {item.payTime}
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: Colors.yellow, fontWeight: "500" }}>
                    Badili tarehe
                  </Text>
                </TouchableOpacity>
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
                source={require("../assets/time.png")}
              />
              <View className=" flex-1 mx-3">
                <Text className=" font-normal">Malipo yako</Text>
                <Text className=" font-light text-black">
                  Ungependa malipo kufanya kila baada ya muda gani?
                </Text>
              </View>
            </View>
            <View className=" mt-4 flex-row flex-wrap">
              {itemsSelect.map((interest, i) => (
                <TouchableOpacity
                  key={interest.id}
                  onPress={() => selectHandler(interest.id, i)}
                  style={{
                    backgroundColor:
                      selectedTime === i ? "white" : Colors.darkGray,
                  }}
                  className="  py-3 px-3 m-2 flex-row w-fit rounded-xl"
                >
                  <Text
                    style={{ color: selectedTime === i ? "black" : "white" }}
                  >
                    {interest.name}
                  </Text>
                </TouchableOpacity>
              ))}
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
          onPress={() =>
            ToastAndroid.show("To be implemented!", ToastAndroid.SHORT)
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

export default PaymentTimeScreen;
