import { StyleSheet } from "react-native";

export const colors = {
  fundo: "#f2f5f7",
  principal: "#243746",
  texto: "#263238",
  textoClaro: "#d9e2e8",
  textoSuave: "#546e7a",
  borda: "#dde5e8",
  branco: "#ffffff"
};

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: colors.fundo,
    padding: 20
  },

  scroll: {
    paddingBottom: 30
  },

  topo: {
    backgroundColor: colors.principal,
    padding: 24,
    borderRadius: 14
  },

  card: {
    backgroundColor: colors.branco,
    padding: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.borda
  },

  textoSuave: {
    color: colors.textoSuave,
    lineHeight: 22
  },

  textoClaro: {
    color: colors.textoClaro,
    lineHeight: 22
  },

  imagem: {
    height: 180,
    borderRadius: 10
  },

  imagemLista: {
    height: 150,
    borderRadius: 10,
    marginTop: 12
  },

  badge: {
    alignSelf: "flex-start"
  }
});

export default styles;