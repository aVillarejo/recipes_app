import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View, Platform } from 'react-native'
import { BlurView } from '@react-native-community/blur'

import { SIZES, COLORS, FONTS, icons } from '../constants'

const RecipeCardDetails = ({ recipeItem }) => {
  const { duration, isBookmark, name, serving } = recipeItem
  return (
    <View style={{ flex: 1 }}>
      {/* Name and Bookmark */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            width: '70%',
            color: COLORS.white,
            ...FONTS.h3,
            fontSize: 18
          }}
        >
          {name}
        </Text>
        <Image
          source={isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            height: 20,
            width: 20,
            marginRight: SIZES.base,
            tintColor: COLORS.darkGreen
          }}
        />
      </View>
      {/* Serving */}
      <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
        {duration} | {serving} Serving
      </Text>
    </View>
  )
}

const RecipeCardInfo = ({ recipeItem }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        blurType='dark'
        style={styles.recipeCardContainer}
      >
        {/* <Text style={{ color: 'white' }}>{recipeItem.name}</Text> */}
        <RecipeCardDetails recipeItem={recipeItem} />
      </BlurView>
    )
  } else {
    <View
      style={[styles.recipeCardContainer, { backgroundColor: COLORS.transparentDarkGray }]}
    >
      <RecipeCardDetails recipeItem={recipeItem} />
    </View>
  }
}

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  const { category, image } = recipeItem
  return (
    <TouchableOpacity
      style={[styles.defaultContainerStyle, containerStyle]}
      onPress={onPress}
    >
      <Image
        source={image}
        resizeMode='cover'
        style={{
          width: 250,
          height: 350,
          // width: 250,
          // height: 350,
          borderRadius: SIZES.radius
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4
          }}
        >
          {category}
        </Text>
      </View>
      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
  defaultContainerStyle: {
    height: 350,
    width: 250,
    marginTop: SIZES.radius,
    marginRight: 20,
    borderRadius: SIZES.radius
  },
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius
  }
})
