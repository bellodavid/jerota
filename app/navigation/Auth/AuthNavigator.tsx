import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { AuthRoutes } from 'navigation/types/auth';

import { UserSelection } from 'screens/Auth';

const { Group, Navigator, Screen } = createStackNavigator<AuthRoutes>();

export default function AuthNavigator(): React.ReactElement {
  return (
    <Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
        headerTitle: '',
      }}>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="UserSelection" component={UserSelection} />
      </Group>
    </Navigator>
  );
}
