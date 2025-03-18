// App.tsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button } from 'components/Element';
import UserOptionCard from './Components/UserOptionCard';

export default function UserSelection() {
  const [selectedOption, setSelectedOption] = useState<'user' | 'creator' | null>('user');

  const handleContinue = () => {
    console.log(`Continuing as: ${selectedOption}`);
    // Add navigation logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Continue as:</Text>

        <UserOptionCard
          title="A User"
          description="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc"
          isSelected={selectedOption === 'user'}
          onSelect={() => setSelectedOption('user')}
        />

        <UserOptionCard
          title="A Creator"
          description="Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc"
          isSelected={selectedOption === 'creator'}
          onSelect={() => setSelectedOption('creator')}
        />

        <Button title="Continue" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
