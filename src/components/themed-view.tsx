import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

export function ThemedView({ style, children, ...rest }: ViewProps) {
  return (
    <View {...rest} style={[styles.base, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
