import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Input, Button, Icon, Text } from "react-native-elements";
// import { View, Text } from "../../components/Themed";
import window from "../../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import background from "../background";

import {
	useFonts,
	OpenSans_300Light,
	OpenSans_300Light_Italic,
	OpenSans_400Regular,
	OpenSans_400Regular_Italic,
	OpenSans_600SemiBold,
	OpenSans_600SemiBold_Italic,
	OpenSans_700Bold,
	OpenSans_700Bold_Italic,
	OpenSans_800ExtraBold,
	OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";

function InitialScreen() {
	let [fontsLoaded, error] = useFonts({
		OpenSans_300Light,
		OpenSans_300Light_Italic,
		OpenSans_400Regular,
		OpenSans_400Regular_Italic,
		OpenSans_600SemiBold,
		OpenSans_600SemiBold_Italic,
		OpenSans_700Bold,
		OpenSans_700Bold_Italic,
		OpenSans_800ExtraBold,
		OpenSans_800ExtraBold_Italic,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.body}>
			<View style={styles.container}>
				<Text style={styles.header}>Forgot your Password?</Text>
				<Text style={styles.subHeader}>
					Enter your registered email below to recieve password reset instruction
				</Text>
				
                <Icon
                    name="clinic-medical"
                    type="font-awesome-5"
                    color="rgba(255, 85, 62, 255)"
                    size={190}
                    containerStyle={styles.clinicIconContainer}
                    style={styles.clinicIcon}
                    tvParallaxProperties={undefined}
                />
				<Icon
					raised
					reverse
					name="paper-plane"
					type="font-awesome"
					size={30}
					style={styles.planeIcon}
                    containerStyle={styles.planeIconContainer}
					tvParallaxProperties={undefined}
				/>

				<Input
					containerStyle={styles.userEmailContainer}
					placeholder="EMAIL"
					leftIcon={
						<Icon
							type="font-awesome-5"
							name="envelope"
							size={20}
							color="grey"
							tvParallaxProperties={undefined}
						/>
					}
				/>
				<Text style={{ top: "4%", fontFamily: "OpenSans_700Bold", }}>
					Remember password?{" "}
					<Text style={{ color: "rgba(255, 85, 62, 255)", }} onPress={() => {}}>
						Login.
					</Text>
				</Text>

				<Button
					buttonStyle={styles.sendButton}
					containerStyle={styles.sendContainer}
					titleStyle={styles.sendTitle}
					title="SEND"
					type="clear"
					onPress={() => {}}
					ViewComponent={LinearGradient}
					linearGradientProps={{
						colors: ["rgba(2, 139, 250, 255)", "rgba(255, 85, 62, 255)"],
						start: { x: 0, y: 0.1 },
						end: { x: 1, y: 0.9 },
					}}
				/>
			</View>
		</View>
	);
}

const windowSize = window.window;

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: "row",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: windowSize.height,
	},
	header: {
		bottom: "10%",
		fontFamily: "OpenSans_800ExtraBold",
		fontSize: 26,
		color: "black",
	},
	subHeader: {
		// marginBottom: "10%",
		bottom: "10%",
		textAlign: "center",
		fontFamily: "OpenSans_700Bold",
		color: "grey",
		fontSize: 15,
        width: "80%",
	},
	planeIcon: {},
    planeIconContainer:{
		bottom: 45,
        left: 70,
    },
	clinicIcon: {},
    clinicIconContainer:{},
	userEmailContainer: {
        top: "5%",
		width: "85%",
	},
	sendButton: {
		backgroundColor: "#ffF",
		width: "100%",
	},
	sendContainer: {
        top: "5%",
		margin: 10,
		width: "55%",
		borderRadius: 30,
	},
	sendTitle: {
		fontFamily: "OpenSans_800ExtraBold",
		padding: 10,
		color: "#fff",
		fontSize: 20,
	},
});

export default InitialScreen;
