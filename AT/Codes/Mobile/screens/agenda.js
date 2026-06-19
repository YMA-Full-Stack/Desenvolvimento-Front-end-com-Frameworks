import React from "react";
import { Box, Heading, ScrollView, Text, VStack } from "native-base";

import styles from "../styles";
import Guard from "../components/guard";

function Agenda({ agenda, logado, navigation }) {
  if (!logado) {
    return <Guard navigation={navigation} />;
  }

  return (
    <Box safeArea style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <VStack space={4}>
          <Heading>Minha agenda</Heading>

          <Text style={styles.textoSuave}>
            Acompanhe os atendimentos que você organizou no MindCare.
          </Text>

          {agenda.length === 0 && (
            <Box style={styles.card}>
              <Text>Nenhum agendamento criado ainda.</Text>
            </Box>
          )}

          {agenda.map(function (item) {
            return (
              <Box key={item.id} style={styles.card}>
                <Heading size="md">{item.prof}</Heading>

                <Text mt={2}>
                  <Text bold>Data: </Text>
                  {item.data}
                </Text>

                <Text>
                  <Text bold>Horário: </Text>
                  {item.hora}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Agenda;