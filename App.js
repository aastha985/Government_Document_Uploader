import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import ChooseScreen from "./screens/SelectApplication";
import UploadDocuments from "./screens/UploadDocuments";
import PassportForm from "./screens/PassportForm";
import LicenseForm from "./screens/LicenseForm";
import { Provider as PaperProvider } from "react-native-paper";
import Successful from "./screens/Successful";
import SeeDocuments from "./screens/SeeDocuments";

const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="See" component={SeeDocuments} />
                    <Stack.Screen name="Select" component={ChooseScreen} />
                    <Stack.Screen name="Upload" component={UploadDocuments} />
                    <Stack.Screen
                        name="PassportForm"
                        component={PassportForm}
                    />
                    <Stack.Screen name="LicenseForm" component={LicenseForm} />
                    <Stack.Screen name="Successful" component={Successful} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
