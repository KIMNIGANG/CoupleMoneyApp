import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { QrScanner } from "./qrscanner";
import QRCode from "react-native-qrcode-generator";

export const Nopartner = ({ uid }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scanner}>
        <QrScanner />
      </View>
      <View style={styles.downContainer}>
        <Text style={styles.text}>Your ID Code</Text>
        <QRCode value={uid} bgColor="black" fgColor="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
  },
  downContainer: {
    position: "absolute",
    marginTop: "30%",
  },
  qrcode: {
    width: 30,
    height: 30,
  },
  scanner: {
    width: "100%",
    height: "50%",
  },
  text: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,

    color: "black",

    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Georgia",
      },
      android: {
        fontSize: 15,
        fontFamily: "serif",
      },
      default: {
        fontSize: 17,
        fontFamily: "serif",
      },
    }),
  },
});
