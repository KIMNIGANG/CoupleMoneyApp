import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addPartnerUid } from "../../service/addPartnerUid";
import { NativeModules } from "react-native";

export const QrScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [wantScan, setWantScan] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (type < 256) {
      return;
    } else {
      addPartnerUid(data);
      setWantScan(false);
      setTimeout(() => {
        NativeModules.DevSettings.reload();
      }, 3500);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (wantScan) {
            setWantScan(false);
          } else {
            setWantScan(true);
          }
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Tab to Scan</Text>
      </TouchableOpacity>
      {wantScan && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.absoluteFillObject}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteFillObject: {
    position: "absolute",
    marginTop: "30%",
    width: "100%",
    height: "120%",
    zIndex: 2,
  },
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  loginButton: {
    width: "70%",
    marginLeft: "15%",
    marginTop: 10,
    height: 40,
    backgroundColor: "#CBE7F6",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    ...Platform.select({
      ios: {
        fontSize: 22,
        fontFamily: "Georgia",
      },
      android: {
        fontSize: 17,
        fontFamily: "serif",
      },
      default: {
        fontSize: 17,
        fontFamily: "serif",
      },
    }),
  },
});
