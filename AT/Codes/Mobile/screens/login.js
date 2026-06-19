import React, { useState } from "react";
import { Alert } from "react-native";
import { Box, Button, Center, Heading, Input, Text, VStack } from "native-base";

import styles from "../styles";

function Login({ navigation, setLogado }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (email.trim() === "" || senha.trim() === "") {
      Alert.alert("Atenção", "Informe e-mail e senha para continuar.");
      return;
    }

    setLogado(true);
    Alert.alert("Login", "Login realizado com sucesso.");
    navigation.navigate("Home");
  }

  return (
    <Box safeArea style={styles.tela}>
      <Center flex={1}>
        <Box width="100%" style={styles.card}>
          <VStack space={4}>
            <Heading>Login</Heading>

            <Text style={styles.textoSuave}>
              Entre para acessar sua agenda, documentos e informações salvas.
            </Text>

            <Input
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <Button colorScheme="blue" onPress={entrar}>
              Entrar
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}

export default Login;