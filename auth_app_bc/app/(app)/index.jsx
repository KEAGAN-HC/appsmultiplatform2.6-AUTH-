import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <Text style={styles.subtitle}>
        Este es un mensaje de prueba para la página principal xd.
      </Text>
      <Link href="/sign-in" style={styles.linkText}>
        Ir a Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
  },
  linkText: {
    color: "blue",
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
