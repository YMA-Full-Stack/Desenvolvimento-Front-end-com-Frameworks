# MindCare - Entrega Final

Projeto desenvolvido para a disciplina **Desenvolvimento Front-end com Frameworks**, como parte da entrega final do **Projeto de Bloco**.

## Sobre o projeto

O **MindCare** é uma aplicação web responsiva criada para simular uma plataforma de apoio à saúde mental, conectando pacientes e profissionais.

A aplicação permite que o usuário crie uma conta, faça login, consulte profissionais, visualize detalhes, realize agendamentos, acompanhe sua agenda, registre documentos e envie mensagens.

O projeto foi desenvolvido com foco em organização de componentes, navegação entre páginas, consumo de API pública, uso de autenticação, banco de dados e responsividade para diferentes tamanhos de tela.

## Ambiente de teste

https://codesandbox.io/p/sandbox/desenvolvimento-front-end-com-frameworks-at-rrdcwh

## Funcionalidades

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
* Página com diferenças entre iOS e Android
* Simulação de gesto mobile
* Recurso de celular para anexar imagem
* Testes com React Testing Library

## Tecnologias utilizadas

* React
* TypeScript
* React Router
* Firebase Authentication
* Firestore
* CSS
* React Testing Library

## Estrutura do projeto

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

## Como executar o projeto

Instale as dependências:

```txt
npm install
```

Execute o projeto:

```txt
npm start
```

## Como rodar os testes

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

O projeto utiliza o **Firebase Authentication** para cadastro, login com e-mail e senha, login com Google e controle de usuário autenticado.

Também utiliza o **Firestore** para salvar informações internas do usuário, como:

* Agendamentos
* Documentos
* Mensagens

## Responsividade e versão mobile

A aplicação possui layout responsivo para se adaptar a diferentes tamanhos de tela.

Também foi criada uma página específica para a versão mobile, contendo:

* Simulação de gesto por toque
* Diferenças de comportamento entre Android e iOS
* Uso de recurso do celular para anexar imagem na área de documentos

## Observação final

O projeto foi desenvolvido de forma incremental, seguindo as etapas da disciplina e os requisitos da entrega final. A proposta principal foi criar uma aplicação funcional, organizada e responsiva, utilizando React, TypeScript, Firebase e testes automatizados.
