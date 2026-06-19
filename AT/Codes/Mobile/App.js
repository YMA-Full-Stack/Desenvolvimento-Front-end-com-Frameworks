import "react-native-gesture-handler";

import React, { useState } from "react";
import { Alert, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NativeBaseProvider } from "native-base";

import Home from "./screens/home";
import Login from "./screens/login";
import Profs from "./screens/profs";
import Details from "./screens/details";
import Agenda from "./screens/agenda";
import Docs from "./screens/docs";
import Mobile from "./screens/mobile";

import { colors } from "./styles";

const Stack = createNativeStackNavigator();

function App() {
  const [logado, setLogado] = useState(false);
  const [agenda, setAgenda] = useState([]);
  const [docs, setDocs] = useState([]);

  function sair() {
    setLogado(false);
    Alert.alert("Conta", "Você saiu da conta.");
  }

  function adicionarAgenda(nomeProf, data, hora) {
    const novoAgendamento = {
      id: Date.now(),
      prof: nomeProf,
      data: data,
      hora: hora
    };

    setAgenda([...agenda, novoAgendamento]);
  }

  function adicionarDoc(titulo, tipo, foto) {
    const novoDoc = {
      id: Date.now(),
      titulo: titulo,
      tipo: tipo,
      foto: foto,
      sistema: Platform.OS
    };

    setDocs([...docs, novoDoc]);
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.principal
            },
            headerTintColor: colors.branco,
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        >
          <Stack.Screen name="Home" options={{ title: "MindCare Mobile" }}>
            {(props) => (
              <Home {...props} logado={logado} sair={sair} />
            )}
          </Stack.Screen>

          <Stack.Screen name="Login" options={{ title: "Login" }}>
            {(props) => <Login {...props} setLogado={setLogado} />}
          </Stack.Screen>

          <Stack.Screen name="Profs" options={{ title: "Profissionais" }}>
            {(props) => <Profs {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Details" options={{ title: "Detalhes" }}>
            {(props) => (
              <Details
                {...props}
                logado={logado}
                adicionarAgenda={adicionarAgenda}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Agenda" options={{ title: "Agenda" }}>
            {(props) => (
              <Agenda
                {...props}
                agenda={agenda}
                logado={logado}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Docs" options={{ title: "Documentos" }}>
            {(props) => (
              <Docs
                {...props}
                docs={docs}
                adicionarDoc={adicionarDoc}
                logado={logado}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Mobile" options={{ title: "Uso no celular" }}>
            {(props) => <Mobile {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;