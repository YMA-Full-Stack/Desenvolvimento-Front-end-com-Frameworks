import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  ScrollView,
  Text,
  VStack
} from "native-base";

import styles from "../styles";

function Details({ route, navigation, logado, adicionarAgenda }) {
  const prof = route.params ? route.params.prof : null;

  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  if (!prof) {
    return (
      <Box safeArea style={styles.tela}>
        <Center flex={1}>
          <Box width="100%" style={styles.card}>
            <VStack space={4}>
              <Heading>Profissional não encontrado</Heading>

              <Text style={styles.textoSuave}>
                Volte para a lista e selecione um profissional.
              </Text>

              <Button
                colorScheme="blue"
                onPress={function () {
                  navigation.navigate("Profs");
                }}
              >
                Voltar
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    );
  }

  function salvarAgendamento() {
    if (!logado) {
      Alert.alert(
        "Login necessário",
        "Entre com sua conta para criar um agendamento."
      );
      navigation.navigate("Login");
      return;
    }

    if (data.trim() === "" || hora.trim() === "") {
      Alert.alert("Atenção", "Informe a data e o horário.");
      return;
    }

    adicionarAgenda(prof.nome, data, hora);

    Alert.alert("Agenda", "Agendamento salvo com sucesso.");
    navigation.navigate("Agenda");
  }

  return (
    <Box safeArea style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <VStack space={4}>
          <Box style={styles.card}>
            <VStack space={3}>
              <Heading>{prof.nome}</Heading>

              <Text>
                <Text bold>Área: </Text>
                {prof.area}
              </Text>

              <Text>
                <Text bold>Cidade: </Text>
                {prof.cidade}
              </Text>

              <Text>
                <Text bold>Contato: </Text>
                {prof.contato}
              </Text>
            </VStack>
          </Box>

          <Box style={styles.card}>
            <VStack space={4}>
              <Heading size="md">Agendar atendimento</Heading>

              <Input
                placeholder="Data desejada"
                value={data}
                onChangeText={setData}
              />

              <Input
                placeholder="Horário desejado"
                value={hora}
                onChangeText={setHora}
              />

              <Button colorScheme="blue" onPress={salvarAgendamento}>
                Salvar agendamento
              </Button>
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Details;