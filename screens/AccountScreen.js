import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";

import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
  EvilIcons,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import MyButton from "../ui/MyButton";
import { useNavigation } from "@react-navigation/native";
import InterestCard from "../components/account/InterestCard";
import ToolbarMain from "../ui/ToolbarMain";
import EditCard from "../components/account/EditCard";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";

const AccountScreen = () => {
  const screenheight = Dimensions.get("window").height;
  const [shownCard, setShownCard] = useState(null);
  const [editCard, setEditCard] = useState(null);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const takePhoto = async () => {
    try {
      const cameraResp = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!cameraResp.canceled) {
        // const { uri } = cameraResp.assets[0];
        const source = { uri: cameraResp.assets[0].uri };
        setImage(source);
      }
    } catch (e) {
      Alert.alert("Error Uploading Image " + e.message);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView
      style={{ height: "auto", maxHeight: screenheight, paddingBottom: 20 }}
      className="flex-1 "
    >
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />

      {!shownCard && !editCard && (
        <View>
          <View
            style={{ backgroundColor: Colors.primaryColor }}
            className="flex flex-row justify-center items-center pt-10 pb-6"
          >
            <Text className=" text-white text-lg font-semibold">Akaunti</Text>
          </View>
        </View>
      )}

      <View>
        {shownCard === "interest" && (
          <InterestCard onPress={() => setShownCard(null)} />
        )}
        {editCard === "edit" && (
          <EditCard
            onPress={() => {
              setEditCard(null);
            }}
          />
        )}
        {!shownCard && !editCard && (
          <ScrollView alwaysBounceVertical style={{ flexDirection: "column" }}>
            <View className=" pt-4   mt-6 bg-white mx-4 rounded-xl">
              <View className="justify-evenly flex-row">
                <TouchableOpacity
                  onPress={logoutHandler}
                  style={{ backgroundColor: Colors.primaryColor }}
                  className=" h-8 w-8 rounded-full justify-center items-center rotate-180"
                >
                  <Ionicons name="log-out-outline" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={takePhoto}
                  className=" w-24 h-24 rounded-full bg-gray-200 items-end"
                >
                  <Image
                    // source={require("../assets/tunzaa_logo.png")}
                    source={
                      image
                        ? { uri: image.uri }
                        : require("../assets/tunzaa_logo.png")
                    }
                    style={{
                      width: 96,
                      height: 96,
                      borderRadius: 48,
                    }}
                  />
                  <View className=" absolute mt-4 ml-16 w-6 h-6 rounded-full justify-center items-center bg-white">
                    <Ionicons
                      name="add-circle-outline"
                      size={20}
                      color={Colors.primaryColor}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setEditCard("edit")}
                  style={{ backgroundColor: Colors.primaryColor }}
                  className=" h-8 w-8 rounded-full justify-center items-center"
                >
                  <MaterialIcons name="edit" size={20} color="white" />
                </TouchableOpacity>
              </View>
              <View className=" items-center my-4">
                <Text
                  style={{ color: Colors.primaryColor, fontWeight: "bold" }}
                >
                  {user?.user?.email}
                </Text>
              </View>
              <View
                style={{ backgroundColor: Colors.primaryColor }}
                className=" items-start px-4 rounded-b-xl"
              >
                <TouchableOpacity
                  onPress={() => setShownCard("interest")}
                  className=" flex-row bg-green-500 px-3 my-4 justify-center items-center rounded-full"
                >
                  <Ionicons name="add" size={18} color="white" />
                  <Text className="text-white text-xs my-1">
                    ongeza maslahi
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className=" mt-4 bg-white mx-4 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center">
                <View className="flex-row items-center my-2 mx-2">
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={Colors.primaryColor}
                  />
                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 12,
                      width: 40,
                      marginHorizontal: 6,
                    }}
                  >
                    Barua pepe
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 12,
                  }}
                >
                  {user?.user?.email}
                </Text>
              </View>
            </View>

            <View className=" mt-3 bg-white mx-4 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center">
                <View className="flex-row items-center my-3 mx-2">
                  <Feather name="phone" size={20} color={Colors.primaryColor} />
                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 12,
                      marginHorizontal: 6,
                    }}
                  >
                    Namba ya Simu
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 12,
                  }}
                >
                  {user?.user?.email.substring(
                    0,
                    user?.user?.email.indexOf("@")
                  )}
                </Text>
              </View>
            </View>
            <View className=" mt-3 bg-white mx-4 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center">
                <View className="flex-row items-center my-3 mx-2">
                  <SimpleLineIcons
                    name="calendar"
                    size={20}
                    color={Colors.primaryColor}
                  />
                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 12,
                      marginHorizontal: 6,
                    }}
                  >
                    Tarehe ya kuzaliwa
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 12,
                  }}
                ></Text>
              </View>
            </View>
            <View className=" mt-3 bg-white mx-4 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center">
                <View className="flex-row items-center my-3 mx-2">
                  <MaterialCommunityIcons
                    name="gender-male"
                    size={20}
                    color={Colors.primaryColor}
                  />

                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 12,
                      marginHorizontal: 6,
                    }}
                  >
                    Jinsia
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 12,
                  }}
                ></Text>
              </View>
            </View>
            <Text
              style={{
                color: Colors.darkGray,
                fontSize: 16,
                marginHorizontal: 16,
                marginTop: 8,
              }}
            >
              Taarifa ya uwasilishaji
            </Text>

            <View className=" mt-3 bg-white mx-4 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center">
                <View className="flex-row items-center my-3 mx-2">
                  <EvilIcons
                    name="location"
                    size={20}
                    color={Colors.primaryColor}
                  />

                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 12,
                      marginHorizontal: 6,
                    }}
                  >
                    Mahali pa kueletewa
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 12,
                  }}
                ></Text>
              </View>
            </View>
            <View className=" mt-3 bg-white mx-4 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center">
                <View className="flex-row items-center my-3 mx-2">
                  <Feather
                    name="message-circle"
                    size={20}
                    color={Colors.primaryColor}
                  />

                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 12,
                      marginHorizontal: 6,
                    }}
                  >
                    Maelezo ya ziada
                  </Text>
                </View>

                <Text
                  style={{
                    color: Colors.darkGray,
                    fontSize: 12,
                  }}
                ></Text>
              </View>
            </View>

            <View className=" mt-3 bg-white mx-4 h-24 rounded-lg">
              <View className="flex-row justify-between mx-2 pr-2 items-center"></View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
