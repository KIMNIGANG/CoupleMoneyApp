import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import QRCode from "react-native-qrcode-generator";
import { useState } from "react/cjs/react.development";
import { AdMobBanner } from "expo-ads-admob";

const adUnitID = Platform.select({
  ios: "ca-app-pub-3940256099942544/2934735716",
  android: "ca-app-pub-3940256099942544/6300978111",
});

const deletePartnerUid = () => {
  firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        const partnerUid = doc.data().partnerUid;
        if (partnerUid == null) {
          return;
        } else {
          firebase
            .firestore()
            .collection("users")
            .doc(partnerUid)
            .get()
            .then((doc) => {
              if (!doc.exists) {
                console.log("No such document!");
              } else {
                doc.data().partnerUid.update("");
              }
            });
        }
      }
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });
};

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

const deleteAccount = () => {
  const user = firebase.auth().currentUser;
  user
    .delete()
    .then(function () {
      deletePartnerUid;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Slide3 = ({ uid }) => {
  const [signOutAsk, setSignOutAsk] = useState(false);
  const [deleteAsk, setDeleteAsk] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <View style={styles.account}>
          <Text style={styles.text}>Hello Kang</Text>
        </View>
        <View style={styles.idCode}>
          <Text style={styles.text}>Your ID Code</Text>
          <QRCode value={uid} bgColor="black" fgColor="#CBE7F6" />
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
                <Text style={styles.modalText}>You Sure?</Text>
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
                  If you delete your Account, your data will lose. You Sure?
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
                    deleteAccount();
                  }}
                >
                  <Text style={styles.textStyle}>Sure</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

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
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upContainer: {
    width: "100%",
    height: "30%",
  },
  middleContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  downContainer: {
    alignItems: "center",
    width: "100%",
    height: "30%",
    marginBottom: 30,
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

  loginButton: {
    marginBottom: 10,
    width: 250,
    height: 50,
    backgroundColor: "#CBE7F6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
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
    marginBottom: 10,
  },
  account: {
    height: "30%",
  },
});
