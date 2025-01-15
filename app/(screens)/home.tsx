import React from "react";
import { StyleSheet, Text, View, FlatList, ListRenderItem } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FONT_SIZE } from "@/constants/Const";
import { Colors } from "@/constants/Colors";
import { Switch } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { TypeMission } from "@/types/index";

const gradientColor = {
  start: "#018ABE",
  end: "#45C1CD",
};

const avatar = require("@/assets/images/avatar.png");

export default function Home() {
  return (
    <View>
      {/* Header */}
      <LinearGradient
        colors={[gradientColor.start, gradientColor.end]}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.userInfo}>
          {/* Họ tên user */}

          <Text style={[styles.colorHeader, styles.fontMedium]}>
            <Text style={styles.textBase}>Xin chào {"\n"}</Text>

            <Text style={styles.textXl}>Nguyễn Hồng Phúc</Text>
          </Text>
          {/* Avatar */}
          <View>
            <Image source={avatar} style={styles.avatar} />
          </View>
        </View>
      </LinearGradient>

      <View style={styles.container}>
        {/* Body */}
        <View style={styles.body}>
          {/* Mission */}
          <View style={styles.boxContainer}>
            <View style={styles.headerBox}>
              <Text style={[styles.textNomal, styles.fontMedium]}>
                Việc cần làm
              </Text>
              <Switch />
            </View>

            <View></View>
          </View>
          {/* Order / agent registration */}
          {/* Order management */}
        </View>

        {/* Footer */}
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textNomal: {
    fontSize: FONT_SIZE.normal,
  },
  textBase: {
    fontSize: FONT_SIZE.textBase,
  },
  textXl: {
    fontSize: FONT_SIZE.textXl,
  },
  fontMedium: {
    fontWeight: "500",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    height: 139,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  userInfo: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorHeader: {
    color: "white",
  },

  avatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 25,
  },
  body: {
    marginTop: -30,
    width: "100%",
  },
  boxContainer: {
    borderRadius: 8,
    backgroundColor: "white",
  },
  headerBox: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: Colors.light.colors.outline,
  },
});
