import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import { COLORS, SIZES, FONTS } from '../constants'

const CategoryCard = ({ containerStyle, categoryItem, onPress }) => {
  const { duration, image, name, serving } = categoryItem

  return (
    <TouchableOpacity
      style={[styles.defaultContainerStyle, containerStyle]}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.imageStyle}
        resizeMode='cover'
      />
      <View style={styles.detailsContainerStyle}>
        <Text style={styles.categoryNameStyle}>
          {name}
        </Text>
        <Text style={styles.categoryDetailsStyle}>
          {duration} | {serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  defaultContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.gray2
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius
  },
  detailsContainerStyle: {
    width: '65%',
    paddingHorizontal: 20
  },
  categoryNameStyle: {
    flex: 1,
    ...FONTS.h2
  },
  categoryDetailsStyle: {
    color: COLORS.gray,
    ...FONTS.body4
  }
})
