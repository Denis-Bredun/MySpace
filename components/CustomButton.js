import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.customButton} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;