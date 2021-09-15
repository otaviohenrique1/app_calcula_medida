import React from 'react';
import { CalculaMedidaPage } from './CalculaMedidaPage';
import { createStackNavigator } from "@react-navigation/stack";
import { MenuPage } from './MenuPage';
import { TeoremaPitagoras } from './TeoremaPitagoras';
import { PerimetroCirculo } from './PerimetroCirculo';

export type RootStackParamList = { 
  CalculaMedida: undefined;
  Menu: undefined;
  TeoremaPitagoras: undefined;
  PerimetroCirculo: undefined;
}

export function Rotas() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Menu" component={MenuPage} />
      <Stack.Screen name="CalculaMedida" component={CalculaMedidaPage} />
      <Stack.Screen name="TeoremaPitagoras" component={TeoremaPitagoras} />
      <Stack.Screen name="PerimetroCirculo" component={PerimetroCirculo} />
    </Stack.Navigator>
  );
}