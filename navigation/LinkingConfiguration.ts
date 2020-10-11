import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeScreen: {
            screens: {
              Home: 'one',
            },
          },
          FindScreen: {
            screens: {
              Pesquisa: 'two',
            },
          },
          PedidosScreen: {
            screens: {
              Home: 'thre',
            },
          },
          PerfilScreen: {
            screens: {
              Perfil: 'four',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
