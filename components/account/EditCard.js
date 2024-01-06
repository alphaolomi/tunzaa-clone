import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

import { EvilIcons } from "@expo/vector-icons";
import ToolbarMain from "../../ui/ToolbarMain";
import { interests } from "../../constants/data";
import ButtonSelect from "../../ui/ButtonSelect";
import MyButton from "../../ui/MyButton";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import Checkbox from "expo-checkbox";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

const genderData = [
  { label: "Mme", value: "1" },
  { label: "Mke", value: "2" },
];

const EditCard = ({ onPress }) => {
  const screenheight = Dimensions.get("window").height;
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmailName] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const [gender, setGender] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [isChecked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView
      style={{ height: "auto", maxHeight: screenheight, paddingBottom: 20 }}
    >
      <ToolbarMain onPress={onPress} title="Rekebisha Akaunti" />
      <ScrollView>
        <View className=" mx-8">
          <View className="w-full px-3 mt-6 bg-white  rounded-lg">
            <Text style={{ color: Colors.primaryColor }}>Jina la Kwanza</Text>
            <View className="">
              <TextInput
                style={{ color: Colors.primaryColor }}
                value="Isaya"
                className=" mb-3 w-3/4 bg-white font-semibold"
                onChangeText={(newTx) => setPhoneNumber(newTx)}
              />
            </View>
          </View>

          <View className="w-full px-3 mt-6 bg-white  rounded-lg">
            <Text style={{ color: Colors.primaryColor }}>Jina la Mwisho </Text>
            <View className="">
              <TextInput
                style={{ color: Colors.primaryColor }}
                value="Isaya"
                className=" mb-3 w-3/4 bg-white font-semibold"
                onChangeText={(newTx) => setPhoneNumber(newTx)}
              />
            </View>
          </View>

          <View
            style={{ marginTop: 2 }}
            className="flex-row items-center w-full gap-3"
          >
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? Colors.primaryColor : undefined}
            />
            <View>
              <View className="flex-row">
                <Text
                  style={{ color: Colors.primaryColor }}
                  className="text-gray-500 text-[16px] font-semibold"
                >
                  Badili namba ya simu
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full px-3 mt-6 bg-white  rounded-lg">
            <Text style={{ color: Colors.primaryColor }}>Namba ya simu</Text>
            <View className="">
              <TextInput
                style={{ color: Colors.primaryColor }}
                value="+255 755915464"
                className=" mb-3 w-3/4 bg-white font-semibold"
                onChangeText={(newTx) => setPhoneNumber(newTx)}
              />
            </View>
          </View>
          <View
            style={{ marginTop: 2 }}
            className="flex-row items-center w-full gap-3"
          >
            <View className="flex-row">
              <Text
                style={{ color: Colors.darkGray }}
                className="text-gray-500 text-[16px] font-semibold"
              >
                Taarifa za ziada
              </Text>
            </View>
          </View>
          <View className="w-full px-3 mt-6 bg-white  rounded-lg">
            <Text style={{ color: Colors.primaryColor }}>Barua pepe</Text>
            <View className="">
              <TextInput
                style={{ color: Colors.primaryColor }}
                value="isayaexavey@gmail.com"
                className=" mb-3 w-3/4 bg-white font-semibold"
                onChangeText={(newTx) => setPhoneNumber(newTx)}
              />
            </View>
          </View>
          <View className="w-full px-3 mt-6 bg-white  rounded-lg">
            <Text style={{ color: Colors.primaryColor }}>
              Tarehe ya kuzaliwa
            </Text>

            {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
            <Pressable
              className=" flex-row justify-between"
              onPress={showDatepicker}
            >
              <Text
                style={{ color: Colors.primaryColor }}
                className=" mb-3 w-3/4 bg-white font-semibold"
              >
                {`${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`}
              </Text>
              <SimpleLineIcons
                name="calendar"
                size={16}
                color={Colors.primaryColor}
              />
            </Pressable>

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                onChange={onChange}
              />
            )}
          </View>

          <View className="w-full px-3 mt-6 bg-white  rounded-lg">
            <Text style={{ color: Colors.primaryColor }}>Jinsia</Text>
            <View className="">
              <Dropdown
                style={styles.dropdown}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={genderData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={gender}
                onChange={(item) => {
                  setGender(item.value);
                }}
              />
            </View>
          </View>
        </View>
        <View className=" mx-8 my-6">
          <MyButton title="Wasilisha" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditCard;

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.primaryColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
