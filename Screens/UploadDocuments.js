import React from "react";
import { View, ScrollView } from "react-native";
import { RadioButton, Text, Appbar, Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import primaryColors from "./primaryColors";
import BigImage from "./screens/BigImage.js";

export default function UploadDocuments({ navigation }) {
    const [value, setValue] = React.useState("first");
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result.uri);
    };
    return (
        <View>
            <Appbar.Header
                style={{ backgroundColor: primaryColors.headerColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Chopse a document to upload" />
            </Appbar.Header>
            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    marginBottom: "5%",
                    paddingTop: 20,
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" />
                <RadioButton.Group
                    onValueChange={(value) => setValue(value)}
                    value={value}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="first"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Passport
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="second"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Aadhaar
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="third"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                PAN Card
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="fourth"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Driver's License
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="fifth"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Voter ID Card
                            </Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={{ paddingTop: 30 }}>
                    <Button
                        icon="check"
                        color="#fddb3a"
                        mode="contained"
                        onPress={() => navigation.navigate("LicenseForm")}
                        labelStyle={{ fontSize: 16, color: "white" }}
                        style={{
                            marginBottom: "5%",
                        }}
                    >
                        Upload an existing document
                    </Button>
                    <Button
                        icon="check"
                        color="#fddb3a"
                        mode="contained"
                        onPress={() => navigation.navigate("LicenseForm")}
                        labelStyle={{ fontSize: 16, color: "white" }}
                        style={{
                            marginBottom: "5%",
                        }}
                    >
                        Scan a new document
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
