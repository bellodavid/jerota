// components/HeroImage.tsx
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

interface HeroImageProps {}

const HeroImage: React.FC<HeroImageProps> = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../../assets/images/onboard/mirror_image.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.8,
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  image: {
    width: width * 0.8,
    height: width * 2,
    alignSelf: 'flex-end',
  },
});

export default HeroImage;
