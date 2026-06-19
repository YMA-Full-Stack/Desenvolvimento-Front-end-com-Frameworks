import React from "react";
import { Platform } from "react-native";
import { Badge, Box, Heading, ScrollView, Text, VStack } from "native-base";

import styles from "../styles";

function Mobile() {
  let sistema = "Web Preview";

  if (Platform.OS === "ios") {
    sistema = "iOS";
  }

  if (Platform.OS === "android") {
    sistema = "Android";
  }

  return (
    <Box safeArea style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <VStack space={4}>
          <Heading>Uso no celular</Heading>

          <Box style={styles.card}>
            <VStack space={3}>
              <Heading size="md">Dispositivo atual</Heading>

              <Badge colorScheme="success" style={styles.badge}>
                {sistema}
              </Badge>

              <Text style={styles.textoSuave}>
                Algumas permissões e recursos podem mudar conforme o ambiente em
                que o app está sendo usado.
              </Text>
            </VStack>
          </Box>

          <Box style={styles.card}>
            <Heading size="md">Câmera e galeria</Heading>

            <Text mt={3} style={styles.textoSuave}>
              Na área de documentos, o usuário pode registrar uma imagem usando
              a câmera ou selecionar uma imagem já existente na galeria.
            </Text>
          </Box>

          <Box style={styles.card}>
            <Heading size="md">Comportamento por sistema</Heading>

            {Platform.OS === "ios" && (
              <Text mt={3} style={styles.textoSuave}>
                No iOS, permissões de câmera e galeria podem depender das
                configurações de privacidade do sistema.
              </Text>
            )}

            {Platform.OS === "android" && (
              <Text mt={3} style={styles.textoSuave}>
                No Android, o usuário normalmente escolhe entre câmera, galeria
                ou arquivos, dependendo das permissões concedidas.
              </Text>
            )}

            {Platform.OS === "web" && (
              <Text mt={3} style={styles.textoSuave}>
                No preview web, alguns recursos nativos podem funcionar de forma
                limitada. O teste completo pode ser feito pelo aplicativo Expo
                Go.
              </Text>
            )}
          </Box>

          <Box style={styles.card}>
            <Heading size="md">Interação por gesto</Heading>

            <Text mt={3} style={styles.textoSuave}>
              Na lista de profissionais, os cards reconhecem o movimento de
              deslizar para exibir dicas rápidas de uso.
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Mobile;