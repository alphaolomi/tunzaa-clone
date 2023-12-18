import { View, Text, SafeAreaView, ScrollView, Switch } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ToolbarMain from "../ui/ToolbarMain";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const [enEnabled, setEnEnabled] = useState(false);
  const [swEnabled, setSwEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  const toggleENSwitch = () => {
    setEnEnabled((previousState) => !previousState);
    setSwEnabled((previousState) => !previousState);
  };

  const toggleSWSwitch = () => {
    setSwEnabled((previousState) => !previousState);
    setEnEnabled((previousState) => !previousState);
  };

  const toggleSMSSwitch = () => {
    setSmsEnabled((previousState) => !previousState);
  };
  const toggleEmailSwitch = () => {
    setEmailEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView>
      <ToolbarMain onPress={() => navigation.goBack()} title="Mipangilio" />
      <ScrollView>
        <View className=" mx-8">
          <View className="w-full flex-row  items-center  mt-6">
            <MaterialIcons
              name="translate"
              size={24}
              color={Colors.primaryColor}
            />
            <Text
              style={{
                color: Colors.primaryColor,
                fontSize: 18,
                marginHorizontal: 10,
              }}
            >
              Mipangilio ya Lugha
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.gray,
              height: 2,
              marginTop: 12,
            }}
          />

          <View>
            <View className="flex-row justify-between items-center">
              <Text
                style={{ color: Colors.darkGray }}
                className="text-gray-500 text-[16px] font-semibold"
              >
                English
              </Text>
              <View>
                <Switch
                  //  trackColor={{ false: "#aa18ea", true: "#7e5be5" }}
                  trackColor={{
                    false: Colors.lightGray,
                    true: Colors.primaryColor,
                  }}
                  thumbColor={enEnabled ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleENSwitch}
                  value={enEnabled}
                />
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text
                style={{ color: Colors.darkGray }}
                className="text-gray-500 text-[16px] font-semibold"
              >
                Kiswahili
              </Text>
              <View>
                <Switch
                  //  trackColor={{ false: "#aa18ea", true: "#7e5be5" }}
                  trackColor={{
                    false: Colors.lightGray,
                    true: Colors.primaryColor,
                  }}
                  thumbColor={swEnabled ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSWSwitch}
                  value={swEnabled}
                />
              </View>
            </View>
          </View>
        </View>
        <View className=" mx-8">
          <View className="w-full flex-row  items-center  mt-6">
            <Ionicons
              name="notifications"
              size={24}
              color={Colors.primaryColor}
            />
            <Text
              style={{
                color: Colors.primaryColor,
                fontSize: 18,
                marginHorizontal: 10,
              }}
            >
              Mipangilio ya arifa
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.gray,
              height: 2,
              marginTop: 12,
            }}
          />

          <View>
            <View className="flex-row justify-between items-center">
              <Text
                style={{ color: Colors.darkGray }}
                className="text-gray-500 text-[16px] font-semibold"
              >
                Pokea arifa kwa SMS
              </Text>
              <View>
                <Switch
                  //  trackColor={{ false: "#aa18ea", true: "#7e5be5" }}
                  trackColor={{
                    false: Colors.lightGray,
                    true: Colors.primaryColor,
                  }}
                  thumbColor={smsEnabled ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSMSSwitch}
                  value={smsEnabled}
                />
              </View>
            </View>
            <View className="flex-row justify-between items-center">
              <Text
                style={{ color: Colors.darkGray }}
                className="text-gray-500 text-[16px] font-semibold"
              >
                Pokea arifa kwa barua pepe
              </Text>
              <View>
                <Switch
                  //  trackColor={{ false: "#aa18ea", true: "#7e5be5" }}
                  trackColor={{
                    false: Colors.lightGray,
                    true: Colors.primaryColor,
                  }}
                  thumbColor={emailEnabled ? "white" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleEmailSwitch}
                  value={emailEnabled}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
