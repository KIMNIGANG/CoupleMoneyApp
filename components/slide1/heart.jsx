import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";

const colors = {
  transparent: "transparent",
  white: "#fff",
  heartColor: "#e92f3c",
  textPrimary: "#515151",
  black: "#000",
};

const card = {
  photo: {
    uri:
      "https://instagram.fqyy1-1.fna.fbcdn.net/vp/3c9a078e2ca06b6f23495a58f4d5790e/5D38A6B6/t51.2885-15/e35/56706298_321117518554648_5665440507722377382_n.jpg?_nc_ht=instagram.fqyy1-1.fna.fbcdn.net",
  },
  key: "pkarniej",
};

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);

class HeartIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };

    this.lastPress = 0;
  }

  handleLargeAnimatedIconRef = (ref) => {
    this.largeAnimatedIcon = ref;
  };

  handleSmallAnimatedIconRef = (ref) => {
    this.smallAnimatedIcon = ref;
  };

  animateIcon = () => {
    const { liked } = this.state;
    this.largeAnimatedIcon.stopAnimation();

    if (liked) {
      this.largeAnimatedIcon
        .bounceIn()
        .then(() => this.largeAnimatedIcon.bounceOut());
      this.smallAnimatedIcon.pulse(200);
    } else {
      this.largeAnimatedIcon
        .bounceIn()
        .then(() => {
          this.largeAnimatedIcon.bounceOut();
          this.smallAnimatedIcon.bounceIn();
        })
        .then(() => {
          if (!liked) {
            this.setState((prevState) => ({ liked: !prevState.liked }));
          }
        });
    }
  };

  handleOnPress = () => {
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const doublePressDelay = 400;

    if (delta < doublePressDelay) {
      this.animateIcon();
    }
    this.lastPress = time;
  };

  handleOnPressLike = () => {
    this.smallAnimatedIcon.bounceIn();
    this.setState((prevState) => ({ liked: !prevState.liked }));
  };

  render() {
    const { liked } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOnPress}>
          <AnimatedIcon
            ref={this.handleLargeAnimatedIconRef}
            name="heart"
            color={colors.white}
            duration={500}
            delay={200}
          />
          <Image source={card.photo} resizeMode="cover" />
          <TouchableOpacity onPress={this.handleOnPressLike}>
            <AnimatedIcon
              ref={this.handleSmallAnimatedIconRef}
              name={liked ? "heart" : "hearto"}
              color={liked ? colors.heartColor : colors.textPrimary}
              size={22}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: "12%",
  },
});

export default HeartIcon;
