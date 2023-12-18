import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import Colors from "../constants/Colors";
import MyButton from "../ui/MyButton";
import { StatusBar } from "expo-status-bar";
import MyButtonStroked from "../ui/MyButtonStroked";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../utils/auth";
import { AntDesign } from "@expo/vector-icons";

const SignupScreen = () => {
  const [isChecked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation();
  const handleSignup = async () => {
    setSubmitting(true);
    setError(null);

    if (!phoneNumber || !password) {
      setError("* Tafadhali jaza");
      setSubmitting(false);
      return;
    }

    if (!isChecked) {
      setError("* Tafadhali kubaliana na masharti");
      setSubmitting(false);
      return;
    }
    setSubmitting(true);

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoBnp6O9noa_c0Oux_r3wSXOYH0a8VmNY`,
      {
        method: "POST",
        body: JSON.stringify({
          email: "+255" + phoneNumber + "@tunzaaclone.com",
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .catch((err) => {
        console.log(err);
        alert("Authentication failed, please try again!");
      })
      .then((res) => res.json())
      .then((parsedRes) => {
        // console.log(parsedRes);
        if (!parsedRes.idToken) {
          alert("Error occured: " + parsedRes.error.message);
        } else {
          ToastAndroid.show("Success! Log in now", ToastAndroid.SHORT);

          updateInfo(
            "+255" + phoneNumber + "@tunzaaclone.com",
            parsedRes.localId
          );

          navigation.goBack();
        }
      });

    setSubmitting(false);
  };

  const updateInfo = async ({ email, userId }) => {
    await fetch(
      `https://silabu-6818b-default-rtdb.firebaseio.com/users/${userId}/.json`,
      {
        method: "POST",
        body: JSON.stringify({ email: email, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
        </View>
      </View>
      <View className="w-full px-6">
        <View
          style={{
            borderColor: error && "red",
            borderWidth: error && 0.7,
          }}
          className="w-full px-3 my-6 bg-white  rounded-lg"
        >
          <Text style={{ color: Colors.primaryColor }}>Namba ya simu</Text>
          <View className="flex-row items-center gap-3">
            <Text style={{ color: Colors.primaryColor, fontWeight: 800 }}>
              +255
            </Text>
            <TextInput
              style={{}}
              className="h-14 bg-white"
              onChangeText={(newTx) => setPhoneNumber(newTx)}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View className="w-full px-6">
        <View
          style={{
            borderColor: error && "red",
            borderWidth: error && 0.7,
          }}
          className="w-full px-6 my-3 bg-white rounded-lg "
        >
          <Text style={{ color: Colors.primaryColor }}>Weka nenosiri</Text>

          <View className="flex-row justify-between items-center">
            <TextInput
              className="h-14 w-3/4"
              onChangeText={(newTx) => setPassword(newTx)}
              secureTextEntry
            />
            <View>
              <AntDesign name="lock" size={24} color={Colors.primaryColor} />
            </View>
          </View>
        </View>
      </View>

      <View className="w-full px-6">
        <View className="w-full px-3 my-3">
          <View className="flex-row items-center gap-3">
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? Colors.primaryColor : undefined}
            />
            <View>
              <View className="flex-row">
                <Text className="text-gray-500 text-[16px] font-light">
                  Nakubaliana na
                </Text>
                <Text
                  style={{ color: Colors.primaryColor }}
                  className="  text-[16px]"
                >
                  {" "}
                  sheria{" "}
                </Text>
                <Text className="text-gray-500 text-[16px] font-light">
                  {" "}
                  na
                </Text>
              </View>
              <View className="flex-row">
                <Text
                  style={{ color: Colors.primaryColor }}
                  className="text-[16px]"
                >
                  masharti{" "}
                </Text>
                <Text className="text-gray-500 text-[16px] font-light">
                  ya tunzaa
                </Text>
              </View>
            </View>
          </View>
          {error && (
            <Text className=" text-red-600 text-sm font-light transition duration-700  ">
              {error}
            </Text>
          )}
        </View>
      </View>
      <View className=" w-full px-6">
        <MyButton
          onPress={handleSignup}
          submiting={submitting}
          title="Endelea"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className=" justify-center items-center mt-4"
      >
        <Text className="text-gray-500 text-[16px] font-light">Rudi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
