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
import Colors from "../constants/Colors";
import MyButton from "../ui/MyButton";
import { StatusBar } from "expo-status-bar";
import MyButtonStroked from "../ui/MyButtonStroked";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { API_KEY } from "@env";

const SigninScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSignin = async () => {
    setSubmitting(true);
    setError(null);

    if (!phoneNumber || !password) {
      setError("* Fill all the fields");
      setSubmitting(false);
      return;
    }

    // fetch(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: "+255" + phoneNumber + "@tunzaaclone.com",
    //       password: password,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .catch((err) => {
    //     console.log(err);
    //     alert("Authentication failed, please try again!");
    //   })
    //   .then((res) => res.json())
    //   .then((parsedRes) => {
    //     if (!parsedRes.idToken) {
    //       // alert("Error occured: " + parsedRes.error.message);
    //     } else {
    //       ToastAndroid.show("Success!", ToastAndroid.SHORT);

    //       navigation.navigate("Home");
    //     }
    //   });

    setSubmitting(false);
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
        <Text
          className="text-center mb-4"
          style={{ color: Colors.primaryColor, fontWeight: 500 }}
        >
          Jisajili au ingia kuendelea
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
              className="h-14 w-3/4 bg-white"
              onChangeText={(newTx) => setPhoneNumber(newTx)}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View
          style={{
            borderColor: error && "red",
            borderWidth: error && 0.7,
          }}
          className="w-full px-3 my-3 bg-white rounded-lg "
        >
          <Text style={{ color: Colors.primaryColor }}>Weka nenosiri</Text>

          <View className="flex-row justify-between items-center">
            <TextInput
              style={{}}
              className="h-14 w-3/4"
              onChangeText={(newTx) => setPassword(newTx)}
              secureTextEntry
            />
            <View>
              <AntDesign name="lock" size={24} color={Colors.primaryColor} />
            </View>
          </View>
        </View>
        {error && (
          <Text className=" text-red-600 text-sm font-light transition duration-700  ">
            {error}
          </Text>
        )}
      </View>
      <View className="w-full px-6">
        <View className="w-full px-3 mb-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("Forgotpassword")}
            className="flex-row items-center gap-3"
          >
            <Text
              style={{ color: Colors.primaryColor }}
              className=" text-right w-full font-light  text-[16px]"
            >
              Umesahau nenosiri?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className=" w-full px-6">
        <MyButton
          submiting={submitting}
          onPress={handleSignin}
          title="Ingia Tunzaa"
        />
      </View>
      <View className=" justify-center items-center my-3">
        <Text className="text-gray-500 text-[16px] font-light">au</Text>
      </View>
      <View className=" w-full px-6">
        <MyButtonStroked
          onPress={() => {
            navigation.navigate("Signup");
          }}
          title="Huna akaunti? Jiunge"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className=" justify-center items-center mt-4"
      >
        <Text className="text-gray-500 text-[16px] font-light">Ruka</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;
