// components/UserOptionCard.tsx
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

type UserOptionCardProps = {
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
};

const UserOptionCard: React.FC<UserOptionCardProps> = ({
  title,
  description,
  isSelected,
  onSelect,
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.card, 
        isSelected && styles.selectedCard
      ]} 
      onPress={onSelect}
      activeOpacity={0.8}
    >
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.radioContainer}>
        <View style={styles.radioOuter}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedCard: {
    borderColor: '#4CAF50',
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  radioContainer: {
    marginLeft: 10,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
});

export default UserOptionCard;