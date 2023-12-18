import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Colors from "../constants/Colors";
import MyButton from "../ui/MyButton";
import { StatusBar } from "expo-status-bar";
import MyButtonStroked from "../ui/MyButtonStroked";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ForgotpasswordScreen = () => {
  const [isChecked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation();
  const handleSignin = () => {
    setSubmitting(true);
    setError(null);

    if (!phoneNumber) {
      setError("* Tafadhali jaza");
      setSubmitting(false);
      return;
    }
  };
  return (
    <View
      style={{ backgroundColor: Colors.secondaryColor }}
      className="h-full items-center"
    >
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />

      <View className="justify-center items-center w-full">
        <View>
          <Image
            style={{
              width: 160,
              height: 200,
              resizeMode: "contain",
            }}
            source={require("../assets/tunzaa_logo.png")}
          />
          {/* <Image
            style={{
              width: 160,
              height: 280,
              resizeMode: "contain",
              marginTop: -100,
            }}
            source={require("../assets/terms.png")}
          /> */}
        </View>
      </View>
      <View className="w-full px-6">
        <Text
          className="text-center mb-4"
          style={{ color: Colors.darkGray, fontWeight: 400 }}
        >
          Tutathibitisha nambari yako ya simu
        </Text>
        <View
          style={{
            borderColor: error && "red",
            borderWidth: error && 0.7,
          }}
          className="w-full px-3 my-3 bg-white  rounded-lg"
        >
          <Text style={{ color: Colors.primaryColor }}>Namba ya simu</Text>
          <View className="flex-row items-center gap-3">
            <Text style={{ color: Colors.primaryColor, fontWeight: 800 }}>
              +255
            </Text>
            <TextInput
              style={{}}
              keyboardType="numeric"
              className="h-14 w-3/4 bg-white"
              onChangeText={(newTx) => setPhoneNumber(newTx)}
            />
          </View>
        </View>

        {error && (
          <Text className=" text-red-600 text-sm font-light transition duration-700  ">
            {error}
          </Text>
        )}
      </View>

      <View className=" w-full px-6 mt-6">
        <MyButton onPress={handleSignin} title="Endelea" />
      </View>
    </View>
  );
};

export default ForgotpasswordScreen;
