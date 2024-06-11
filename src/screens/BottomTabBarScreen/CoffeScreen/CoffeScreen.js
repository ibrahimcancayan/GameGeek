import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import {
  Ionicons,
  SimpleLineIcons,
  AntDesign,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";
import Story from "./Story";
import CommentModal from "../../../Components/CommentModal/CommentModal";

const { width, height } = Dimensions.get("window");

const data = [
  {
    id: "1",
    name: "Phoenix new update skils",
    image: require("../../../../assets/assets/images/phoenix.png"),
  },
  {
    id: "1",
    name: "Phoenix new update skils",
    image: require("../../../../assets/assets/images/phoenix.png"),
  },
  {
    id: "1",
    name: "Phoenix new update skils",
    image: require("../../../../assets/assets/images/phoenix.png"),
  },
];

const CoffeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [comments, setComments] = useState(data.map(() => []));
  const [commentsCount, setCommentsCount] = useState(data.map(() => 0));
  const onComment = (comment) => {
    // Yorum kaydetme işlemleri

    // Yorumu ilgili indeksteki yorumlar dizisine ekle
    const newComments = [...comments];
    newComments[index].push(comment);
    setComments(newComments);

    // Yorum sayısını 1 artır
    const newCommentsCount = [...commentsCount];
    newCommentsCount[index]++;
    setCommentsCount(newCommentsCount);

    setIsModalVisible(false);
  };

  const [likes, setLikes] = useState(data.map(() => false));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);

    Animated.sequence([
      Animated.timing(animatedValues[index], {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedValues = useRef(data.map(() => new Animated.Value(1))).current;

  const LETTER_COLORS = {
    G: styles.letterG,
    a: styles.letterA,
    m: styles.letterM,
    e: styles.letterE,
    K: styles.letterK,
    " ": {},
  };

  const logoText = "Game Geek";

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>
          {logoText.split("").map((letter, index) => (
            <Text
              key={index}
              style={[styles.letter, LETTER_COLORS[letter] || styles.letter2]}
            >
              {letter}
            </Text>
          ))}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
          style={styles.shape}
        >
          {/* <Ionicons name="person" size={30} color="#000000" /> */}
          <Image
            style={styles.image}
            source={{ uri: "https://i.pravatar.cc/150?img=58" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scroll}
            >
              <Story />
            </ScrollView>
          </View>
          <View style={styles.cardContainer}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              {data.map((item, index) => (
                <View key={item.id} style={styles.card}>
                  <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage} source={item.image} />
                  </View>
                  <View style={styles.cardInfoContainer}>
                    <Text style={styles.cardText}>{item.name}</Text>
                  </View>
                  <View style={styles.cardPayContainer}>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                      <View style={styles.iconContainer}>
                        <EvilIcons name="comment" size={35} color="#000000" />
                        <Text style={styles.likesCount}>
                          {comments[index].length} 
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => handleLike(index)}
                    >
                      <View style={styles.iconContainer}>
                        <Animated.View
                          style={[
                            styles.iconWrapper,
                            {
                              transform: [{ scale: animatedValues[index] }],
                            },
                          ]}
                        >
                          <AntDesign
                            name={likes[index] ? "heart" : "hearto"}
                            size={24}
                            color={likes[index] ? "red" : "black"}
                          />
                        </Animated.View>
                        <Text style={styles.likesCount}>
                          {likes[index] ? "1" : "0"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </ScrollView>
            <CommentModal
              visible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              onComment={onComment}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CoffeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFFFE",
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.03,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height: height * 0.1,
    width: width,
    alignSelf: "center",
    backgroundColor: "#FCFFFE",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: width,
    height: height,
  },
  shape: {
    width: width * 0.15,
    height: height * 0.075,
    borderRadius: 50,
    backgroundColor: "#1DA1F2",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    width: width,
    flexDirection: "row",
    marginTop: height * 0,
    // borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    width: width * 0.3,
    height: height * 0.01,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: width * 0.02,
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedButton: {
    backgroundColor: "#00623B",
  },
  selectedButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardContainer: {
    width: width,
    backgroundColor: "#FCFFFE",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.95,
    height: height * 0.6,
    borderRadius: 20,
    backgroundColor: "#FCFFFE",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: height * 0.01,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardImageContainer: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 20,
    backgroundColor: "#F3F1ED",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  cardImage: {
    width: width * 0.85,
    height: height * 0.45,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  cardInfoContainer: {
    width: width * 0.75,
    backgroundColor: "#FCFFFE",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginRight: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    textAlignVertical: "center",
  },
  cardPayContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: width * 0.5,
    backgroundColor: "#FCFFFE",
    alignSelf: "flex-start",
    borderRadius: 50,
  },
  cardPayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00623B",
    marginTop: height * 0.01,
    marginRight: height * 0.18,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.1,
    height: height * 0.06,
    alignSelf: "center",
  },
  likesCount: {
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },

  iconWrapper: {
    width: width * 0.1,
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: width * 0.1,
    height: height * 0.06,
  },
  letter: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  letterG: {
    color: "#ef4d3e",
  },
  letterA: {
    color: "#f78012",
  },
  letterM: {
    color: "#f9b00b",
  },
  letterE: {
    color: "#a45885",
  },
  letterK: {
    color: "#2975b9",
  },
  letter2: {
    color: "#01beca",
  },
  image: {
    width: width * 0.14,
    height: height * 0.07,
    borderRadius: 50,
  },
});
