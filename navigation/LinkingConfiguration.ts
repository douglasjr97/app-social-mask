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
              Home: 'two',
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
