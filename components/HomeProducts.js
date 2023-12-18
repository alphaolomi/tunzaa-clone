import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { items } from "../constants/data";
import Colors from "../constants/Colors";

const HomeProducts = () => {
  const renderItem = ({ item }) => {
    return (
      <View className=" m-1 p-4 bg-white w-[160px] border border-gray-300 rounded-xl justify-center items-center">
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            resizeMode: "contain",
          }}
          source={require("../assets/tunzaa_text.png")}
        />
        <Text
          style={{
            color: Colors.darkGray,
            marginHorizontal: 14,
            marginVertical: 5,
            fontSize: 12,
          }}
        >
          Tunzaa
        </Text>

        <TouchableOpacity className=" p-1 mt-2 bg-white border border-gray-300 rounded-full justify-center items-center">
          <Text
            style={{
              color: Colors.primaryColor,
              fontWeight: "500",
              marginHorizontal: 14,

              fontSize: 12,
            }}
          >
            Tembelea
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default HomeProducts;
