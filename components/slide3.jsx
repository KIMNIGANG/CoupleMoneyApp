import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import QRCode from "react-native-qrcode-generator";
import { useState } from "react/cjs/react.development";
import { AdMobBanner } from "expo-ads-admob";
import { deletePartnerUid } from "../service/deletePartnerUid";
import { NativeModules } from "react-native";

const adUnitID = Platform.select({
  ios: "ca-app-pub-2841796582864445/6503681050",
  android: "ca-app-pub-2841796582864445/3932514147",
});

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

const deleteAccount = (pUid) => {
  const user = firebase.auth().currentUser;

  if (pUid !== "") {
    console.log(pUid);
    deletePartnerUid(pUid);
    setTimeout(() => {
      user
        .delete()
        .then(function () {})
        .catch(function (error) {
          console.log(error);
        });
    }, 3500);
  } else {
    setTimeout(() => {
      user
        .delete()
        .then(function () {})
        .catch(function (error) {
          console.log(error);
        });
    }, 3500);
  }
};

export const Slide3 = ({ uid, pUid }) => {
  const [signOutAsk, setSignOutAsk] = useState(false);
  const [deleteAsk, setDeleteAsk] = useState(false);
  const [deletePartnerAsk, setDeletePartnerAsk] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <View style={styles.account}>
          <Text style={styles.text}>
            {"Welcome to CoupleMoneyApp.\nThe Best way to do Dutch treat"}
          </Text>
        </View>
        <View style={styles.idCode}>
          <QRCode value={uid} bgColor="black" fgColor="white" />
          <Text style={styles.qrtext}>Share Your ID Code</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <AdMobBanner
          style={styles.admob}
          bannerSize="mediumRectangle"
          adUnitID={adUnitID}
          servePersonalizedAds="true"
        />
      </View>
      <View style={styles.downContainer}>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={signOutAsk}
            onRequestClose={() => {
              setSignOutAsk(!signOutAsk);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{"Sign Out\nYou Sure?"}</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setSignOutAsk(!signOutAsk)}
                >
                  <Text style={styles.textStyle}>No</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setSignOutAsk(!signOutAsk);
                    signOut();
                  }}
                >
                  <Text style={styles.textStyle}>Sure</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={deleteAsk}
            onRequestClose={() => {
              setDeleteAsk(!deleteAsk);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  {"If you delete your Account\nyour data will lose\nYou Sure?"}
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setDeleteAsk(!deleteAsk)}
                >
                  <Text style={styles.textStyle}>No</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setDeleteAsk(!deleteAsk);
                    deleteAccount(pUid);
                  }}
                >
                  <Text style={styles.textStyle}>Sure</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={deletePartnerAsk}
            onRequestClose={() => {
              setDeleteAsk(!deletePartnerAsk);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  {"Delete your Partner\nYou Sure?"}
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setDeletePartnerAsk(!deletePartnerAsk)}
                >
                  <Text style={styles.textStyle}>No</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setDeletePartnerAsk(!deletePartnerAsk);
                    if (pUid !== "") {
                      firebase
                        .firestore()
                        .collection("users")
                        .doc(firebase.auth().currentUser.uid)
                        .get()
                        .then((doc) => {
                          if (!doc.exists) {
                            console.log("No such document!");
                          } else {
                            firebase
                              .firestore()
                              .collection("users")
                              .doc(firebase.auth().currentUser.uid)
                              .update({
                                partnerUid: "",
                              });
                          }
                        })
                        .catch((err) => {
                          console.log("Error getting document", err);
                        });
                      setTimeout(() => {
                        NativeModules.DevSettings.reload();
                      }, 3500);
                    } else {
                      return;
                    }
                  }}
                >
                  <Text style={styles.textStyle}>Sure</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <TouchableOpacity
          onPress={() => setDeletePartnerAsk(true)}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Delete Partner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSignOutAsk(true)}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>SignOut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDeleteAsk(true)}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  upContainer: {
    justifyContent: "center",
    width: "100%",
    height: "30%",
    paddingBottom: 20,
  },
  middleContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  downContainer: {
    paddingTop: 20,
    alignItems: "center",
    width: "100%",
    height: "30%",
  },
  admob: {
    marginTop: 15,
    width: "100%",
    height: "100%",
    marginLeft: "29%",
  },
  text: {
    padding: 10,
    fontSize: 18,
    color: "black",
    textAlign: "center",
    ...Platform.select({
      ios: {
        fontSize: 23,
        fontFamily: "Georgia",
      },
      android: {
        fontSize: 19,
        fontFamily: "serif",
      },
      default: {
        fontSize: 17,
        fontFamily: "serif",
      },
    }),
  },
  qrtext: {
    padding: 10,
    fontSize: 18,
    color: "black",
    textAlign: "center",
    ...Platform.select({
      ios: {
        fontSize: 23,
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

  loginButton: {
    width: 250,
    margin: 5,
    height: 50,
    backgroundColor: "#ffc2c2",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "grey",
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
    width: "70%",
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  idCode: {
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "-12%",
  },
});
