import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const { width, height } = Dimensions.get("window");

const COMMENTS = [
  {
    id: 1,
    author: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "This is the first comment",
  },
  {
    id: 2,
    author: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "This is the second comment",
  },
];

const CommentModal = ({ visible, onClose }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(COMMENTS);

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }

    const newCommentObj = {
      id: comments.length + 1,
      author: "Me",
      avatar: "https://via.placeholder.com/50",
      text: newComment,
      timestamp: new Date().toLocaleTimeString(),
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  const renderCommentItem = ({ item }) => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const timestamp = new Date().setHours(hour, minute);
    const locale = "tr-TR";
    const options = {
      timeZone: "Europe/Istanbul",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };

    return (
      <View style={{}}>
        <Text style={styles.commentTimestamp}>
          {new Date(timestamp).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            locale,
            options,
          })}
          {"\t"}
          {new Date(timestamp).toLocaleTimeString(locale, options)}
        </Text>
        <View style={styles.commentItem}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.commentContent}>
            <Text style={styles.commentAuthor}>{item.author}</Text>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <TouchableOpacity style={styles.overlay} onPress={onClose} />
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Comments</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={25} color={"#676767"} />
          </TouchableOpacity>
        </View>
        <View style={styles.commentsContainer}>
          <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            ListEmptyComponent={() => (
              <Text style={styles.noCommentsText}>No comments yet.</Text>
            )}
          />
        </View>

        <View
          style={{ height: 1, backgroundColor: "#8f8f8f", marginVertical: 20 }}
        />
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Write a comment"
            multiline={true}
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity
            style={styles.commentButton}
            onPress={handleAddComment}
          >
            <Text style={styles.commentButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.5,
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: height * 0.03,
    borderTopWidth: 1,
    borderColor: "#8f8f8f",
    height: height * 0.6,
  },
  commentsContainer: {
    flex: 1,
    marginTop: height * 0.01,
  },
  noCommentsText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: height * 0.2,
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: width * 0.02,
    borderColor: "#8f8f8f",
  },
  commentInput: {
    flex: 1,
    height: height * 0.06,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingHorizontal: width * 0.02,
    marginRight: width * 0.02,
  },
  commentButton: {
    backgroundColor: "#ec4b3d",
    borderRadius: 20,
    width: width * 0.2,
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  commentButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
  },
  commentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  avatar: {
    width: width * 0.12,
    height: height * 0.06,
    borderRadius: 50,
    marginRight: width * 0.02,
  },
  commentContent: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: height * 0.015,
  },
  commentAuthor: {
    fontWeight: "bold",
    color: "#000000",
  },
  commentText: {
    color: "#000000",
  },
  commentTimestamp: {
    color: "#8f8f8f",
    fontSize: 12,
    marginTop: height * 0.01,
    textAlign: "right",
  },
});
