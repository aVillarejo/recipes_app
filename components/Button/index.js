import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS } from '../../constants'

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors = [],
  onPress
}) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={colors}
          style={[styles.defaultButtonContainerStyle, { ...buttonContainerStyle }]}
        >
          <Text style={styles.buttonTextStyle}>
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      style={[styles.defaultButtonContainerStyle, { ...buttonContainerStyle }]}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.h3
  },
  defaultButtonContainerStyle: {
    borderRadius: 20,
    paddingVertical: 18
  }
})

export default CustomButton
