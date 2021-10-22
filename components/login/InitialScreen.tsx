import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
// import { View, Text } from "../../components/Themed";
import window from "../../constants/Layout";
import { LinearGradient } from "expo-linear-gradient";
import background from "../background";
// import LinearGradient from 'react-native-linear-gradient';
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
import { Input, Button } from "react-native-elements";

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
			{/* <LinearGradient
				style={styles.background}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 1, y: 0.5 }}
				colors={["blue", "orange"]}
			/> */}
			<View style={styles.container}>
				<Image style={styles.logo} source={require("../../assets/images/Transparent-logo.png")} />
				{/* <Text style={styles.logoText}>Child Connect</Text> */}

				<Button
					buttonStyle={styles.loginButton}
					containerStyle={styles.loginContainer}
					titleStyle={styles.loginTitle}
					title="LOGIN"
					type="clear"
					onPress={() => {}}
					ViewComponent={LinearGradient}
					linearGradientProps={{
						colors: ["rgba(2, 139, 250, 255)", "rgba(255, 85, 62, 255)"],
						start: { x: 0, y: 0.1 },
						// start: { x: 0, y: 0.5 },
						end: { x: 1, y: 0.9 },
					}}
				/>
				{/* <Text>Or Register with us if you do not have an account</Text> */}
				<Button
					buttonStyle={styles.signUpButton}
					containerStyle={styles.signUpContainer}
					titleStyle={styles.signUpTitle}
					title="SIGN UP"
					type="outline"
					onPress={() => {}}
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
	logo: {
		left: 16,
		bottom: 95,
		height: "50%",
		width: windowSize.width,
	},
	logoText: {
		bottom: 85,
		color: "#fff",
		// fontFamily: "OpenSans_300Light",
	},
	loginButton: {
		backgroundColor: "#fff",
		width: "100%",
	},
	loginContainer: {
		margin: 10,
		width: "55%",
		borderRadius: 30,
		// backgroundColor: "blue",
	},
	loginTitle: {
		fontFamily: "OpenSans_800ExtraBold",
		padding: 10,
		color: "#fff",
		fontSize: 20,
	},
	signUpButton: {
		backgroundColor: "#fff",
	},
	signUpContainer: {
		margin: 10,
		width: "55%",
		borderRadius: 26,
		borderWidth: 2,
		borderColor: "rgba(2, 139, 245, 255)",
		// height: "5%",
		// backgroundColor: "blue",
	},
	signUpTitle: {
		color: "#000",
		fontFamily: "OpenSans_800ExtraBold",
		fontSize: 20,
	},
});

export default InitialScreen;
