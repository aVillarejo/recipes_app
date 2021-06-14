import React from 'react'
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { CustomButton } from '../components'
import { images, COLORS, SIZES, FONTS } from '../constants'

const RenderHeader = () => {
  return (
    <View
      style={{ height: SIZES.height > 700 ? '65%' : '60%' }}
    >
      <ImageBackground
        source={images.loginBackground}
        style={{ flex: 1, justifyContent: 'flex-end' }}
        resizeMode='cover'
      >
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={{ height: 200, justifyContent: 'flex-end', paddingHorizontal: SIZES.padding }}
        >
          <Text
            style={{
              width: '80%',
              color: COLORS.white,
              ...FONTS.largeTitle,
              lineHeight: 45
            }}
          >
            Cooking a Delicious Food Easily
          </Text>

        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

const Login = ({ navigation }) => {
  const renderDetails = () => {
    return (
      <View style={{
        flex: 1,
        paddingHorizontal: SIZES.padding
      }}
      >
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: '70%',
            color: COLORS.gray,
            ...FONTS.body3
          }}
        >
          Discover more than 1200 food recipes in your hands and cooking it easily!
        </Text>

        {/* Buttons */}
        <View style={{
          flex: 1,
          justifyContent: 'center'
        }}
        >
          <CustomButton
            buttonText='Login'
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace('Home')}
          />
          <CustomButton
            buttonText='Sing Up'
            buttonContainerStyle={{
              borderColor: COLORS.darkLime,
              borderWidth: 1,
              marginTop: SIZES.radius
            }}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>

    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      {/* Header */}
      <RenderHeader />
      {renderDetails()}
      {/* Details and Form */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black
  }
})

export default Login
