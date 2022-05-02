import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import window from "../constants/Layout";


function background() {
	return (
		<LinearGradient
				style={styles.background}
				start={{ x: 0, y: 0.5 }}
				end={{ x: 1, y: 0.5 }}
				colors={["blue", "orange"]}
			/>
	);
}

const windowSize = window.window;
const styles = StyleSheet.create({
    background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: windowSize.height,
	},
});

export default background;
