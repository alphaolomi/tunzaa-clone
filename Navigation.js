import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import {
  SimpleLineIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import JipangeScreen from "./screens/JipangeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import AccountScreen from "./screens/AccountScreen";
import MoreMenuScreen from "./screens/MoreMenuScreen";
import ProductDescriptionScreen from "./screens/ProductDescriptionScreen";
import { useState, useEffect } from "react";
import OrderScreen from "./screens/OrderScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import ForgotpasswordScreen from "./screens/ForgotpasswordScreen";
import Colors from "./constants/Colors";
import SettingScreen from "./screens/SettingScreen";
import { useSelector } from "react-redux";
import ShopScreen from "./screens/ShopScreen";

const Tab = createBottomTabNavigator();

const BotttomTabs = () => {
  const [loggedIn, setLogged] = useState(false);
  const navigation = useNavigation();

  const user = useSelector((state) => state.user);
  useEffect(() => {
    setLogged(user.isAuthenticated);
  }, [user.isAuthenticated]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          paddingTop: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: {
            color: Colors.primaryColor,
            marginBottom: 8,
            letterSpacing: 0.8,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="home" size={24} color="blue" />
            ) : (
              <SimpleLineIcons name="home" size={24} color="gray" />
            ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={OrderScreen}
        listeners={{
          tabPress: (e) => {
            if (!loggedIn) {
              e.preventDefault();
              navigation.navigate("Signin");
            }
          },
        }}
        options={{
          tabBarLabel: "Oda",
          headerShown: false,
          tabBarLabelStyle: {
            color: Colors.primaryColor,
            marginBottom: 8,
            letterSpacing: 0.8,
          },

          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="handbag" size={24} color="blue" />
            ) : (
              <SimpleLineIcons name="handbag" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        listeners={{
          tabPress: (e) => {
            if (!loggedIn) {
              e.preventDefault();
              navigation.navigate("Signin");
            }
          },
        }}
        options={{
          tabBarLabel: "Notification",
          headerShown: false,
          tabBarLabelStyle: {
            color: Colors.primaryColor,
            marginBottom: 8,
            letterSpacing: 0.8,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications-outline" size={24} color="blue" />
            ) : (
              <Ionicons name="notifications-outline" size={24} color="gray" />
            ),
        }}
      />

      <Tab.Screen
        name="Jipange"
        component={JipangeScreen}
        listeners={{
          tabPress: (e) => {
            if (!loggedIn) {
              e.preventDefault();
              navigation.navigate("Signin");
            }
          },
        }}
        options={{
          tabBarLabel: "Jipange",
          headerShown: false,
          tabBarLabelStyle: {
            color: Colors.primaryColor,
            marginBottom: 8,
            letterSpacing: 0.8,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="heart" size={24} color="blue" />
            ) : (
              <Feather name="heart" size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        listeners={{
          tabPress: (e) => {
            if (!loggedIn) {
              e.preventDefault();
              navigation.navigate("Signin");
            }
          },
        }}
        options={{
          tabBarLabel: "Account",
          headerShown: false,
          tabBarLabelStyle: {
            color: Colors.primaryColor,
            marginBottom: 8,
            letterSpacing: 0.8,
          },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="md-person-outline" size={24} color="blue" />
            ) : (
              <Ionicons name="md-person-outline" size={24} color="gray" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BotttomTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MoreMenu"
          component={MoreMenuScreen}
          options={{
            presentation: "modal",
            gestureDirection: "horizontal",
            animation: "slide_from_left",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescriptionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={ForgotpasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
