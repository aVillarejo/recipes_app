import React from 'react'
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { COLORS, dummyData, SIZES, images, FONTS } from '../constants'
import { CategoryCard, TrendingCard } from '../components'
import icons from '../constants/icons'

const Home = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          height: 80,
          marginHorizontal: SIZES.padding
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>Hello Albert,</Text>
          <Text style={{ color: COLORS.gray, marginTop: 3, ...FONTS.body3 }}>What you want to cook today?</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log('Profile pressed')}
        >
          <Image
            source={images.profile}
            style={{ borderRadius: 20, width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const renderSearchBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          marginTop: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray
        }}
      >
        <Image
          source={icons.search}
          style={{ width: 20, height: 20, tintColor: COLORS.gray }}
        />
        <TextInput
          style={{ marginLeft: SIZES.radius, ...FONTS.body3, flex: 1 }}
          placeholder='Search Recipes' placeholderTextColor={COLORS.gray}
        />
      </View>
    )
  }
  const renderSeeRecipeCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen
        }}
      >
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={images.recipe}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius
          }}
        >
          <Text
            style={{ width: '70%', ...FONTS.body4 }}
          >
            You have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => console.log('See Recipes')}
          >
            <Text
              style={{ color: COLORS.darkGreen, textDecorationLine: 'underline', ...FONTS.h4 }}
            >
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const renderTrending = () => {
    return (
      <View
        style={{ marginTop: SIZES.padding }}
      >
        <Text
          style={{ marginHorizontal: SIZES.padding, ...FONTS.h2 }}
        >Trending Recipe
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TrendingCard
                recipeItem={item}
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 0
                }}
                onPress={() => navigation.navigate('Recipe', { recipe: item })}
              />
            )
          }}
        />
      </View>
    )
  }
  const renderCategoryHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding
        }}
      >
        {/* Section Title */}
        <Text
          style={{
            flex: 1,
            ...FONTS.h2
          }}
        >Category
        </Text>
        {/* View All */}
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4
            }}
          >View All
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* HEADER */}
            {renderHeader()}

            {/* SEARCH BAR */}
            {renderSearchBar()}

            {/* SEE RECIPE CARD */}
            {renderSeeRecipeCard()}

            {/* TRENDING SECTION */}
            {renderTrending()}

            {/* CATEGORY HEADER  */}
            {renderCategoryHeader()}
          </View>
}
        ListFooterComponent={<View style={{ marginBottom: 65 }} />}
        renderItem={({ item }) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{
                marginHorizontal: SIZES.padding
              }}
              onPress={() => navigation.navigate('Recipe', { recipe: item })}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Home
