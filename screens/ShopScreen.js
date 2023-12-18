import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { items } from "../constants/data";

const ShopScreen = () => {
  const { params: shop } = useRoute();
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDescription", { item })}
        className=" m-1 bg-white w-[160px] border border-gray-300 rounded-xl justify-center items-center"
      >
        <Image
          className=" rounded-t-xl"
          style={{
            width: "100%",
            height: 100,
            // borderTopLeftRadius: 12,
            // borderTopRightRadius: 12,
            resizeMode: "cover",
          }}
          source={{ uri: item.imgUrl }}
        />

        <Text
          style={{
            color: Colors.darkGray,
            height: 35,
            marginVertical: 5,
            fontSize: 12,
            marginHorizontal: 6,
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            color: Colors.primaryColor,
            fontWeight: "700",

            fontSize: 16,
            marginBottom: 8,
          }}
        >
          Tsh {item.price}
        </Text>
        <View className="flex flex-row justify-between w-full">
          <View />
          <View className="flex flex-row m-3 gap-3">
            <Feather name="heart" size={24} color="gray" />
            <AntDesign name="sharealt" size={24} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="flex  ">
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />

      <View
        style={{ backgroundColor: Colors.primaryColor }}
        className="flex flex-row justify-between items-center pt-8"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" m-2 p-2"
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Image
        style={{
          width: "100%",
          height: 180,
          borderBottomLeftRadius: 40,
          resizeMode: "cover",
        }}
        source={require("../assets/tunzaa.png")}
      />
      <View className="flex-row">
        <View className="mx-3 -mt-10 h-[80px] w-[80px] rounded-full bg-white p-0.5">
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 40,
              resizeMode: "contain",
            }}
            source={require("../assets/tunzaa.png")}
          />
        </View>
        <Text className=" font-semibold text-lg">Tigo Shop</Text>
      </View>
      <View className="justify-center items-center mb-60">
        <FlatList
          keyExtractor={(item) => item.id}
          alwaysBounceVertical
          contentContainerStyle={{ flexGrow: 1 }}
          data={items}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>

      {/* <ScrollView className=" mx-3 mt-5">
        <View style={{}}>
          <View
            style={{
              flexDirection: "row",

              flexWrap: "wrap",
            }}
          >
            {items.map((item, i) => (
              <TouchableOpacity
                style={{ width: "47%" }}
                key={i}
                onPress={() =>
                  navigation.navigate("ProductDescription", { item })
                }
                className=" m-1 bg-white border border-gray-300 rounded-xl justify-center items-center"
              >
                <View></View>
                <Image
                  className=" rounded-t-xl"
                  style={{
                    width: "100%",
                    height: 100,
                    resizeMode: "cover",
                  }}
                  source={{ uri: item.imgUrl }}
                />

                <Text
                  style={{
                    color: Colors.darkGray,
                    height: 35,
                    marginVertical: 5,
                    fontSize: 12,
                    marginHorizontal: 6,
                  }}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontWeight: "700",

                    fontSize: 16,
                    marginBottom: 8,
                  }}
                >
                  Tsh {item.price}
                </Text>
                <View className="flex flex-row justify-between w-full">
                  <View />
                  <View className="flex flex-row m-3 gap-3">
                    <Feather name="heart" size={24} color="gray" />
                    <AntDesign name="sharealt" size={24} color="gray" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView> */}
      <View className=" px-8 mt-3"></View>
    </View>
  );
};

export default ShopScreen;
