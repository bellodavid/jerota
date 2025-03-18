import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { OnboardRoutes } from 'navigation/types/auth';

import { Onboard } from 'screens/Onboard';

const { Group, Navigator, Screen } = createStackNavigator<OnboardRoutes>();

export default function AuthNavigator(): React.ReactElement {
  return (
    <Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
        headerTitle: '',
      }}>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="Onboard" component={Onboard} />
      </Group>
    </Navigator>
  );
}
