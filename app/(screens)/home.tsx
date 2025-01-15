import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FONT_SIZE } from "@/constants/Const";

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
        <View></View>

        {/* Footer */}
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  fontMedium: {
    fontWeight: "500",
  },
  textBase: {
    fontSize: FONT_SIZE.textBase,
  },
  textXl: {
    fontSize: FONT_SIZE.textXl,
  },
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 25,
  },
});
