import React, { useEffect, useRef, useState } from 'react'
import {
  Animated,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { BlurView } from '@react-native-community/blur'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { Viewers } from '../components'

const RecipeCreatorCardDetail = ({ recipe }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {/* Porfile photo */}
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20
        }}
      >
        <Image
          source={recipe?.author?.profilePic}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20
          }}
        />
      </View>

      {/* Labels */}
      <View
        style={{
          flex: 1,
          marginHorizontal: 20
        }}
      >

        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          Recipe by:
        </Text>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
          {recipe?.author?.name}
        </Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1
        }}
        onPress={() => console.log('View Profile')}
      >
        {/* Icon */}
        <Image
          source={icons.rightArrow}
          style={{ width: 15, height: 15, tintColor: COLORS.lightGreen1 }}
        />
      </TouchableOpacity>
    </View>
  )
}

const RecipeCreatorCardInfo = ({ recipe }) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        blurType='dark'
        style={{
          flex: 1,
          borderRadius: SIZES.radius
        }}
      >
        <RecipeCreatorCardDetail recipe={recipe} />
      </BlurView>
    )
  } else {
    <View
      style={{
        flex: 1,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.transparentBlack5
      }}
    >
      <RecipeCreatorCardDetail recipe={recipe} />
    </View>
  }
}

const Recipe = ({ navigation, route }) => {
  const [recipe, setRecipe] = useState(null)
  const HEADER_HEIGHT = 350
  const scrollY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    setRecipe(route.params.recipe)
  }, [])

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10
        }}
      >
        {/* Screen Overlay */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1]
            })
          }}
        />

        {/* Header Bar Title */}
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1]
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray2,
              ...FONTS.body4
            }}
          >
            Recipre By
          </Text>
          <Text
            style={{
              color: COLORS.white2,
              ...FONTS.h3
            }}
          >
            {recipe?.author?.name}
          </Text>
        </Animated.View>

        {/* Back Button  */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{ width: 15, height: 15, tintColor: COLORS.lightGray }}
          />
        </TouchableOpacity>

        {/* Bookmark  */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 35,
            width: 35
          }}
          onPress={() => console.log('Bookmark')}
        >
          <Image
            source={recipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.darkGreen
            }}
          />
        </TouchableOpacity>

      </View>
    )
  }

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: -1000,
          overflow: 'hidden',
          paddingTop: 1000
        }}
      >
        {/* Image Background */}
        <Animated.Image
          source={recipe?.image}
          resizeMode='contain'
          style={{
            width: '200%',
            height: HEADER_HEIGHT,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                })
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75]
                })
              }
            ]
          }}
        />

        {/* Recipe Creator Card */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          <RecipeCreatorCardInfo
            recipe={recipe}
          />
        </Animated.View>
      </View>
    )
  }

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: 'center'
        }}
      >
        {/* Recipe */}
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center'
          }}
        >
          <Text style={{ ...FONTS.h2 }}>
            {recipe?.name}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: COLORS.lightGray2,
              ...FONTS.body4
            }}
          >
            {recipe?.duration} | {recipe?.serving} Serving
          </Text>
        </View>

        {/* Viewers */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
        >
          <Viewers
            viewersList={recipe?.viewers}
          />
        </View>
      </View>
    )
  }

  const renderIngredientHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding
        }}
      >
        {/* Title */}
        <Text
          style={{ flex: 1, ...FONTS.h3, fontFamily: 'Roboto-Medium' }}
        >
          Ingredients
        </Text>
        {/* Ingredient */}
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4
          }}
        >
          {recipe?.ingredients.length} item
        </Text>
      </View>
    )
  }
  const listHeaderComponent = () => {
    return (
      <View>
        {/* Header */}
        {renderRecipeCardHeader()}

        {/* Info */}
        {renderRecipeInfo()}

        {/* Ingredient Title */}
        {renderIngredientHeader()}
      </View>
    )
  }
  const listFooterComponent = () => {
    return <View style={{ marginBottom: 100 }} />
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          marginVertical: 5
        }}
      >
        {/* Icon */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            borderRadius: 5,
            backgroundColor: COLORS.lightGray
          }}
        >
          <Image
            source={item.icon}
            style={{
              width: 32,
              height: 32
            }}
          />
        </View>

        {/* description */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              ...FONTS.body3
            }}
          >
            {item.description}
          </Text>
        </View>

        {/* quantity */}
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              ...FONTS.body3
            }}
          >
            {item.quantity}
          </Text>
        </View>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      <Animated.FlatList
        data={recipe?.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ], { useNativeDriver: true })}
        renderItem={renderItem}
      />
      {/* Header Bar */}
      {renderHeaderBar()}
    </View>
  )
}

export default Recipe
