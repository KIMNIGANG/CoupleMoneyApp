import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require("../../img/icon.png")} />

        <View style={styles.headMessage}>
          <Text style={styles.headText}>
            Life's greatest happiness is{"\n"}to be convinced we are loved.
          </Text>
          <Text style={styles.headAuthor}>Victor Hugo</Text>
        </View>

        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={["#CBE7F6", "#CBE7F6"]}
          style={styles.linear}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Get Start</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      {/* <View style={styles.footer}>
        <View style={styles.headMessage}>
          <Text style={styles.headText}>
            Life's greatest happiness is{"\n"}to be convinced we are loved.
          </Text>
          <Text style={styles.headAuthor}>Victor Hugo</Text>
        </View>
        <View style={styles.wall} />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {
              "Welcome to DoubleMoneyBook.\n\nDouble Money Book is a money book that using two person use.\n\n This App can make you more easier to do Dutch treat with your partner.\n "
            }
          </Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd7d7",
  },
  header: {
    flex: 1,
    backgroundColor: "#ffd7d7",
    alignItems: "center",
    justifyContent: "center",
  },
  headMessage: {
    width: "100%",
  },
  headText: {
    fontSize: 20,
    marginTop: "5%",
    marginLeft: "5%",
    ...Platform.select({
      ios: {
        fontFamily: "Georgia",
      },
      android: {
        fontFamily: "serif",
      },
      default: {
        fontFamily: "serif",
      },
    }),
  },
  headAuthor: {
    fontSize: 15,
    marginTop: "3%",
    marginLeft: "70%",
    marginBottom: 10,
    ...Platform.select({
      ios: {
        fontFamily: "Georgia",
      },
      android: {
        fontFamily: "serif",
      },
      default: {
        fontFamily: "serif",
      },
    }),
  },
  description: {
    height: "70%",
    width: "85%",
    justifyContent: "center",
  },
  descriptionText: {
    lineHeight: 25,
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
  footer: {
    flex: 0.7,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: "30%",
  },
  loginButton: {
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
  },
  loginText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: "3%",
    color: "white",
    ...Platform.select({
      ios: {
        fontFamily: "Georgia",
      },
      android: {
        fontFamily: "serif",
      },
      default: {
        fontFamily: "serif",
      },
    }),
  },
  icon: {
    marginTop: "6%",
    width: 350,
    height: 350,
  },
  wall: {
    width: "100%",
    height: 2,
    backgroundColor: "grey",
  },
});
