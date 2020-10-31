import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.js";
import ChooseScreen from "./screens/ChooseScreen.js";
import UploadDocuments from "./screens/UploadDocuments.js";
import PassportForm from "./screens/PassportForm.js";
import ChooseScreen from "./screens/SelectApplication.js";
import LicenseForm from "./screens/LicenseForm.js";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Select" component={ChooseScreen} />
                <Stack.Screen name="Upload" component={UploadDocuments} />
                <Stack.Screen name="PassportForm" component={PassportForm} />
                <Stack.Screen name="LicenseForm" component={LicenseForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
