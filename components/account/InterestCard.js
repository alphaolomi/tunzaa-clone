import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { EvilIcons } from "@expo/vector-icons";
import ToolbarMain from "../../ui/ToolbarMain";
import { interests } from "../../constants/data";
import ButtonSelect from "../../ui/ButtonSelect";
import MyButton from "../../ui/MyButton";
import { useNavigation } from "@react-navigation/native";

const InterestCard = ({ onPress }) => {
  const [itemsSelect, setItemsSelect] = useState(interests);
  //   const [shownCard, setShownCard] = useState(true);
  const navigation = useNavigation();

  const selectHandler = (tapped, index) => {
    const updateItem = { ...itemsSelect[index], isSelected: !tapped };
    const newItemsSelect = [...itemsSelect];
    newItemsSelect[index] = updateItem;
    setItemsSelect(newItemsSelect);
    // const onlySelected = newItemsSelect.filter((s) => s.isSelected === true);
  };

  return (
    <View>
      <ToolbarMain onPress={onPress} title="Maslahi" />
      <View className="items-center">
        <Image
          style={{
            width: 160,
            height: 110,
            resizeMode: "contain",
          }}
          source={require("../../assets/tunzaa_logo.png")}
        />
      </View>

      <Text className=" text-center mb-4">
        Tafadhali chagua vipaumbele vyako
      </Text>
      <View className=" flex-row flex-wrap mx-8">
        {itemsSelect.map((interest, i) => (
          <ButtonSelect
            key={interest.id}
            title={interest.name}
            selected={interest.isSelected}
            onPress={() => selectHandler(interest.isSelected, i)}
          />
        ))}
      </View>

      <View className=" mx-8 my-6">
        <MyButton title="Wasilisha" />
      </View>
    </View>
  );
};

export default InterestCard;
