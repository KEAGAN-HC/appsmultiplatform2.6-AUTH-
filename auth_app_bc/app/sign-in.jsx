import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const router = useRouter();

  const VALID_EMAIL = "user@example.com";
  const VALID_PASS = "password123";

  function handleLogin() {
    if (!userEmail || !userPass) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    if (userEmail === VALID_EMAIL && userPass === VALID_PASS) {
      Alert.alert("Acceso Exitoso", "¡Bienvenido!", [
        { text: "OK", onPress: () => router.push("/") },
      ]);
    } else {
      Alert.alert("Error", "Las credenciales no son válidas.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INGRESE SUS CREDENCIALES</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        autoCapitalize="none"
        keyboardType="email-address"
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={userPass}
        onChangeText={setUserPass}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#ff9a78",
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    marginBottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
