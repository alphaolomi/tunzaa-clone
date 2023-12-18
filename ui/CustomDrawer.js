import { View, Text } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#aa18ea" }}
      >
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <Text>CustomDrawer</Text>
    </View>
  );
};

export default CustomDrawer;
