import React from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  ScrollView,
  Text,
  VStack
} from "native-base";

import styles from "../styles";

function Home({ navigation, logado, sair }) {
  return (
    <Box safeArea style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <VStack space={5}>
          <Box style={styles.topo}>
            <Heading color="white">MindCare</Heading>

            <Text mt={2} style={styles.textoClaro}>
              Cuidado, organização e acompanhamento em saúde mental.
            </Text>

            {logado && (
              <Badge mt={4} colorScheme="success" style={styles.badge}>
                Usuário conectado
              </Badge>
            )}
          </Box>

          <Box style={styles.card}>
            <Heading size="md">Sobre o app</Heading>

            <Text mt={3} style={styles.textoSuave}>
              O MindCare reúne ações importantes para o uso no celular, como
              consulta de profissionais, organização da agenda, registro de
              documentos e acesso a informações do atendimento.
            </Text>
          </Box>

          <VStack space={3}>
            {!logado && (
              <Button
                colorScheme="blue"
                onPress={function () {
                  navigation.navigate("Login");
                }}
              >
                Entrar
              </Button>
            )}

            {logado && (
              <Button variant="outline" colorScheme="blue" onPress={sair}>
                Sair da conta
              </Button>
            )}

            <Button
              colorScheme="blue"
              onPress={function () {
                navigation.navigate("Profs");
              }}
            >
              Ver profissionais
            </Button>

            <Button
              colorScheme="blue"
              onPress={function () {
                navigation.navigate("Agenda");
              }}
            >
              Minha agenda
            </Button>

            <Button
              colorScheme="blue"
              onPress={function () {
                navigation.navigate("Docs");
              }}
            >
              Documentos
            </Button>

            <Button
              colorScheme="blue"
              onPress={function () {
                navigation.navigate("Mobile");
              }}
            >
              Uso no celular
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Home;