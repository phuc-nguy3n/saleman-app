import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { FONT_SIZE } from "@/constants/Const";
import { Button, TextInput } from "react-native-paper";

const Logo = require("@/assets/images/logo.png");

const themeTextInput = {
  colors: {
    primary: "#9AA7AA",
  },
};

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={Logo} style={styles.image} />
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text
          style={[
            {
              fontSize: 18,
              marginBottom: 24,
            },
            styles.color,
            styles.medium,
          ]}
        >
          Đăng nhập
        </Text>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            mode="outlined"
            label="Mã công ty"
            placeholder="Nhập mã..."
            right={<TextInput.Affix />}
            theme={themeTextInput}
          />

          <TextInput
            mode="outlined"
            label="Số điện thoại"
            placeholder="Nhập sđt..."
            right={<TextInput.Affix />}
            theme={themeTextInput}
          />

          <TextInput
            mode="outlined"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu..."
            secureTextEntry={true}
            right={<TextInput.Icon icon="eye" />}
            theme={themeTextInput}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.box}>
          <Text
            style={[
              {
                textAlign: "right",
                fontSize: FONT_SIZE.normal,
              },
              styles.medium,
              styles.color,
            ]}
          >
            Quên mật khẩu
          </Text>
        </View>

        <Button
          style={{
            borderRadius: 8,
            backgroundColor: Colors.light.colors.primary,
            marginVertical: 8,
          }}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Đăng nhập
        </Button>

        <View style={{ marginTop: 12 }}>
          <Text
            style={[
              styles.color,
              { fontWeight: "400", fontSize: FONT_SIZE.normal },
            ]}
          >
            Đăng ký trở thành nhân viên bán hàng với Megasop ?{" "}
            <Text style={styles.underline}>Đăng kí ngay</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 114,
    height: 67,
  },
  header: {
    marginBottom: 32,
  },
  body: {
    justifyContent: "center",
    width: "100%",
  },
  color: {
    color: Colors.light.colors.primary,
  },
  form: {
    gap: 16,
  },
  footer: {
    marginTop: 8,
    width: "100%",
  },
  box: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  medium: {
    fontWeight: "500",
  },
  underline: {
    textDecorationLine: "underline",
  },
});
