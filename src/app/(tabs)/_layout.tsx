import { useGroceryStore } from '@/src/store/grocery-store';
import { useAuth } from '@clerk/expo';
import { Ionicons } from "@expo/vector-icons";
import { Redirect } from 'expo-router';
import { Icon, Label, NativeTabs, VectorIcon } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "nativewind";
import { useEffect } from 'react';

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  const { loadItems, items } = useGroceryStore();


  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  const tabTintColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";

  useEffect(() => {
    loadItems();
  }, []);

  if (!isLoaded) {
    return null
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />
  }

  return (
    <NativeTabs tintColor={tabTintColor}>

      <NativeTabs.Trigger name="index">
        <Label>List</Label>
        <Icon
          sf={{
            default: "list.bullet.clipboard",
            selected: "list.bullet.clipboard.fill",
          }}
          androidSrc={{
            default: <VectorIcon family={Ionicons} name="list-outline" />,
            selected: <VectorIcon family={Ionicons} name="list" />,
          }}
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <Icon
          sf={{ default: "plus.circle", selected: "plus.circle.fill" }}
          androidSrc={{
            default: <VectorIcon family={Ionicons} name="add-circle-outline" />,
            selected: <VectorIcon family={Ionicons} name="add-circle" />,
          }}
        />
        <Label>Planner</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insight">
        <Icon
          sf={{ default: "chart.bar", selected: "chart.bar.fill" }}
          androidSrc={{
            default: <VectorIcon family={Ionicons} name="analytics-outline" />,
            selected: <VectorIcon family={Ionicons} name="analytics" />,
          }}
        />
        <Label>Insights</Label>

      </NativeTabs.Trigger>
    </NativeTabs>
  )
}