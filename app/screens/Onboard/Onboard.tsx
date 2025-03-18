// components/WelcomeScreen.tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeroImage, SwipeButton } from './Components';
import { Logo } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthRoutes } from 'navigation/types/auth';

// Define the navigation prop type
type OnboardNavigationProp = StackNavigationProp<AuthRoutes, 'UserSelection'>;

interface WelcomeScreenProps {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  // Use the typed navigation
  const navigation = useNavigation<OnboardNavigationProp>();

  const handleComplete = () => {
    // Now TypeScript knows 'UserSelection' is a valid route
    navigation.navigate('UserSelection');
  };

  return (
    <View style={styles.container}>
      <HeroImage />

      <View style={styles.contentContainer}>
        <View style={styles.logoWrapper}>
          <Logo height={70} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            The One App Where You Can Play, Stream And Earn.
          </Text>
        </View>

        <SwipeButton onComplete={handleComplete} />

        <View style={styles.paginationContainer}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    padding: 20,
  },
  logoWrapper: {
    paddingHorizontal: 0,
    marginLeft: -10,
    alignItems: 'flex-start',
  },
  textContainer: {
    marginVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 42,
  },
  paginationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  paginationIndicator: {
    width: 50,
    height: 4,
    backgroundColor: 'white',
    borderRadius: 2,
  },
});

export default WelcomeScreen;
