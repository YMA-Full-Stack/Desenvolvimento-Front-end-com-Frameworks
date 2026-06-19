import React, { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  VStack
} from "native-base";

import styles from "../styles";
import Guard from "../components/guard";

function Docs({ docs, adicionarDoc, logado, navigation }) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [foto, setFoto] = useState("");

  if (!logado) {
    return <Guard navigation={navigation} />;
  }

  async function abrirCamera() {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão", "É necessário permitir o acesso à câmera.");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  async function abrirGaleria() {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão", "É necessário permitir o acesso à galeria.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.5
    });

    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  }

  function salvar() {
    if (titulo.trim() === "" || tipo.trim() === "") {
      Alert.alert("Atenção", "Informe o título e o tipo do documento.");
      return;
    }

    adicionarDoc(titulo, tipo, foto);

    setTitulo("");
    setTipo("");
    setFoto("");

    Alert.alert("Documento", "Documento registrado com sucesso.");
  }

  return (
    <Box safeArea style={styles.tela}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <VStack space={4}>
          <Heading>Documentos</Heading>

          <Text style={styles.textoSuave}>
            Guarde imagens de documentos, orientações ou comprovantes
            relacionados aos atendimentos.
          </Text>

          <Box style={styles.card}>
            <VStack space={4}>
              <Input
                placeholder="Título do documento"
                value={titulo}
                onChangeText={setTitulo}
              />

              <Input
                placeholder="Tipo do documento"
                value={tipo}
                onChangeText={setTipo}
              />

              <HStack space={3}>
                <Button flex={1} colorScheme="blue" onPress={abrirCamera}>
                  Câmera
                </Button>

                <Button
                  flex={1}
                  variant="outline"
                  colorScheme="blue"
                  onPress={abrirGaleria}
                >
                  Galeria
                </Button>
              </HStack>

              {foto !== "" && (
                <Image
                  source={{ uri: foto }}
                  alt="Imagem selecionada"
                  style={styles.imagem}
                />
              )}

              <Button colorScheme="blue" onPress={salvar}>
                Salvar documento
              </Button>
            </VStack>
          </Box>

          {docs.map(function (item) {
            return (
              <Box key={item.id} style={styles.card}>
                <Heading size="md">{item.titulo}</Heading>

                <Text mt={2}>
                  <Text bold>Tipo: </Text>
                  {item.tipo}
                </Text>

                <Text>
                  <Text bold>Registrado em: </Text>
                  {item.sistema}
                </Text>

                {item.foto !== "" && (
                  <Image
                    source={{ uri: item.foto }}
                    alt="Imagem do documento"
                    style={styles.imagemLista}
                  />
                )}
              </Box>
            );
          })}
        </VStack>
      </ScrollView>
    </Box>
  );
}

export default Docs;