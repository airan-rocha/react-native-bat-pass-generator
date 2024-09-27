import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyle';
import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>Bat Pass Generator</Text>
        <Image 
            source={batLogo}
            style={styles.logo}
        />
    </>
  );
}