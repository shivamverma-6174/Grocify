import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "title" | "link" | "default";
};

export function ThemedText({
  type = "default",
  style,
  children,
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      {...rest}
      style={[
        styles.base,
        type === "title" && styles.title,
        type === "link" && styles.link,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: "#000",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
