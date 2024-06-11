import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import {
    Ionicons,
  } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");


export default function ProfileScreen({ navigation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John");
  const [surname, setSurname] = useState("Doe");
  const [username, setUsername] = useState("johndoe");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const handleSave = () => {
    // Düzenlenen bilgileri kaydetmek için burada bir API çağrısı yapılabilir
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
            <Ionicons name="chevron-back" size={30} color="#000000" />
        </TouchableOpacity>
        <View style={styles.headerBackground}>
          <Image
            style={styles.headerImage}
            source={{ uri: 'https://i.pravatar.cc/150?img=58' }}
          />
        </View>
        <Text style={styles.headerTitle}>
          {name} {surname}
        </Text>
        <Text style={styles.headerSubtitle}>@{username}</Text>
      </View>
      <View style={styles.content}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.editInput}
              value={name}
              onChangeText={setName}
              placeholder="İsim"
            />
            <TextInput
              style={styles.editInput}
              value={surname}
              onChangeText={setSurname}
              placeholder="Soyisim"
            />
            <TextInput
              style={styles.editInput}
              value={username}
              onChangeText={setUsername}
              placeholder="Kullanıcı Adı"
            />
            <TextInput
              style={styles.editInput}
              value={bio}
              onChangeText={setBio}
              placeholder="Bio"
              multiline
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Kaydet</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Bio</Text>
              <Text style={styles.sectionText}>{bio}</Text>
            </View>
            <TouchableOpacity
              style={styles.section}
              onPress={() => setIsEditing(true)}>
              <Text style={styles.sectionTitle}>Düzenle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.section}>
              <Text style={styles.sectionTitle}>Yardım</Text>
              <Text style={styles.sectionText}>Sıkça Sorulan Sorular</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate("SplashScreen")}
            style={styles.section}>
              <Text style={styles.sectionTitle}>Çıkış Yap</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#f87813",
    paddingTop: height*0.1,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerBackground: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  headerImage: {
    width: width * 0.25,
    height: height * 0.12,
    borderRadius: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  backButton: {
    position: "absolute",
    left: width*0.05,
    top: height *0.07  ,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: width*0.05,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: height *0.02,
    marginBottom: height *0.03,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: height *0.02,
  },
    sectionText: {
    fontSize: 16,
    color: "#000",
    },
    editInput: {
    fontSize: 16,
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: height *0.04,
    },
    saveButton: {
    backgroundColor: "#f87813",
    padding: width*0.04,
    borderRadius: 16,
    },
    saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    },

    
});
