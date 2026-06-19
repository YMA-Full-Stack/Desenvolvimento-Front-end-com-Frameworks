import React, { useRef, useState } from "react";
import { PanResponder } from "react-native";
import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  ScrollView,
  Text,
  VStack
} from "native-base";

import styles from "../styles";
import { profissionais } from "../data/profs";

function Profs({ navigation }) {
  const [mensagemGesto, setMensagemGesto] = useState(
    "Deslize um card para ver uma dica."
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: function (_, gesto) {
        return Math.abs(gesto.dx) > 20;
      },

      onPanResponderRelease: function (_, gesto) {
        if (gesto.dx > 60) {
          setMensagemGesto("Dica: confira a cidade antes de escolher.");
        } else if (gesto.dx < -60) {
          setMensagemGesto("Dica: veja os detalhes antes de agendar.");
        } else {
          setMensagemGesto("Toque detectado. Deslize para trocar a dica.");
        }
      }
    })
  ).current;

  return (
    <Box safeArea style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <VStack space={4}>
          <Heading>Profissionais</Heading>

          <Text style={styles.textoSuave}>
            Consulte profissionais disponíveis e veja informações básicas antes
            de organizar um atendimento.
          </Text>

          <Badge colorScheme="info" style={styles.badge}>
            {mensagemGesto}
          </Badge>

          {profissionais.map(function (item) {
            return (
              <Box
                key={item.id}
                style={styles.card}
                {...panResponder.panHandlers}
              >
                <VStack space={2}>
                  <Heading size="md">{item.nome}</Heading>

                  <Text>
                    <Text bold>Área: </Text>
                    {item.area}
                  </Text>

                  <Text>
                    <Text bold>Cidade: </Text>
                    {item.cidade}
                  </Text>

                  <Text>
                    <Text bold>Contato: </Text>
                    {item.contato}
                  </Text>

                  <Divider my={2} />

                  <Button
                    colorScheme="blue"
                    onPress={function () {
                      navigation.navigate("Details", {
                        prof: item
                      });
                    }}
                  >
                    Ver detalhes
                  </Button>
                </VStack>
              </Box>
            );
          })}
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Profs;