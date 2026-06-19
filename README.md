# MindCare - Entrega Final

Projeto desenvolvido para a disciplina **Desenvolvimento Front-end com Frameworks**, como parte da entrega final do **Projeto de Bloco**.

## Sobre o projeto

O **MindCare** é uma plataforma de apoio à saúde mental criada para simular a conexão entre pacientes e profissionais.

A entrega é composta por uma aplicação web principal, desenvolvida em **React** e **TypeScript**, e por uma versão mobile complementar, desenvolvida em **React Native/Expo** com **NativeBase**.

O objetivo do projeto é demonstrar o desenvolvimento de uma aplicação front-end organizada, responsiva, com navegação, consumo de dados externos, autenticação, persistência de informações, testes automatizados e adaptação para dispositivos móveis.

## Links do projeto

Repositório GitHub:

```txt
https://github.com/YMA-Full-Stack/Desenvolvimento-Front-end-com-Frameworks
```

Aplicação web no CodeSandbox:

```txt
https://codesandbox.io/p/sandbox/desenvolvimento-front-end-com-frameworks-at-rrdcwh
```

Versão mobile no Expo Snack:

```txt
https://snack.expo.dev/@yma_full-stack/desenvolvimento_front-end_com_frameworks_at
```

## Aplicação web

A aplicação web foi desenvolvida com **React**, **TypeScript**, **React Router**, **Firebase Authentication**, **Firestore** e **CSS**.

Ela permite que o usuário realize cadastro, login, consulte profissionais, visualize detalhes, crie agendamentos, acompanhe sua agenda, registre documentos e envie mensagens.

## Funcionalidades da versão web

* Cadastro de usuário
* Login com e-mail e senha
* Login com Google
* Perfil do usuário autenticado
* Lista de profissionais
* Busca dinâmica de profissionais
* Página de detalhes do profissional
* Agendamento de sessão
* Agenda do usuário
* Registro de documentos
* Envio de mensagens
* Rotas protegidas
* Consumo de API pública
* Uso do Firebase Authentication
* Uso do Firestore
* Layout responsivo
* Testes com React Testing Library

## Versão mobile

A versão mobile complementar foi criada em **React Native/Expo** utilizando **NativeBase**.

Ela tem como objetivo atender aos requisitos mobile da entrega final, incluindo navegação entre telas, componentes mobile, interação por gesto, recurso do celular e tratamento de diferenças entre iOS e Android.

## Funcionalidades da versão mobile

* Tela inicial do MindCare
* Tela de login
* Lista de profissionais
* Tela de agenda
* Tela de documentos
* Navegação entre telas
* Componentes visuais com NativeBase
* Simulação de autenticação
* Gesto em card mobile
* Uso de recurso do celular para imagem
* Tratamento de diferenças entre iOS e Android com Platform.OS

## Tecnologias utilizadas

### Web

* React
* TypeScript
* React Router
* Firebase Authentication
* Firestore
* CSS
* React Testing Library

### Mobile

* React Native
* Expo
* NativeBase
* React Navigation
* Expo Image Picker
* Platform API

## Estrutura da aplicação web

```txt
src/
├── components/
│   ├── cards.tsx
│   ├── footer.tsx
│   ├── guard.tsx
│   └── header.tsx
│
├── pages/
│   ├── about.tsx
│   ├── agenda.tsx
│   ├── details.tsx
│   ├── docs.tsx
│   ├── home.tsx
│   ├── login.tsx
│   ├── mobile.tsx
│   ├── msgs.tsx
│   ├── profile.tsx
│   ├── profs.tsx
│   ├── register.tsx
│   └── schedule.tsx
│
├── services/
│   └── firebase.ts
│
├── tests/
│   ├── cards.test.tsx
│   ├── guard.test.tsx
│   └── mobile.test.tsx
│
├── App.tsx
├── index.tsx
├── styles.css
└── types.ts
```

## Como executar a aplicação web

Instale as dependências:

```txt
npm install
```

Execute o projeto:

```txt
npm start
```

## Como rodar os testes da aplicação web

Execute:

```txt
npm test
```

## Testes realizados

Foram criados testes automatizados com **React Testing Library** para validar partes importantes da aplicação.

Os testes cobrem:

* Renderização do card de profissional
* Ações dos botões do card
* Proteção de rotas internas
* Renderização da página mobile
* Alternância entre informações de Android e iOS

Resultado obtido nos testes:

```txt
6 passed
0 failed
```

## API utilizada

Os dados dos profissionais são consumidos da API pública:

```txt
https://jsonplaceholder.typicode.com/users
```

Essa API foi utilizada para simular uma base externa de profissionais cadastrados.

## Banco de dados e autenticação

A aplicação web utiliza o **Firebase Authentication** para cadastro, login com e-mail e senha, login com Google e controle de usuário autenticado.

Também utiliza o **Firestore** para salvar informações internas do usuário, como:

* Agendamentos
* Documentos
* Mensagens

## Responsividade

A aplicação web possui layout responsivo, com adaptação para diferentes tamanhos de tela.

Foram utilizados componentes reutilizáveis, organização por páginas, CSS separado e media queries para melhorar a experiência em dispositivos menores.

## Observação final

O projeto foi desenvolvido de forma incremental, seguindo as etapas da disciplina e os requisitos da entrega final.

A aplicação web representa a versão principal do sistema, enquanto a versão mobile complementar em Expo/NativeBase foi criada para demonstrar os requisitos específicos de app mobile, navegação, recursos do celular, gestos e diferenças entre iOS e Android.
