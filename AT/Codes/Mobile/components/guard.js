import React from "react";
import { Box, Button, Center, Heading, Text, VStack } from "native-base";

import styles from "../styles";

function Guard({ navigation }) {
  return (
    <Box safeArea style={styles.tela}>
      <Center flex={1}>
        <Box width="100%" style={styles.card}>
          <VStack space={4}>
            <Heading>Acesso restrito</Heading>

            <Text style={styles.textoSuave}>
              Para acessar esta área, entre com sua conta no MindCare.
            </Text>

            <Button
              colorScheme="blue"
              onPress={function () {
                navigation.navigate("Login");
              }}
            >
              Ir para login
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}

export default Guard;