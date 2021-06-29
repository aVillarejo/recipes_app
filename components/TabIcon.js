import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { COLORS } from '../constants'

const TabIcon = ({ focused, icon }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={
        [
          styles.iconStyle,
          { tintColor: focused ? COLORS.darkGreen : COLORS.lightLime }
        ]
      }
      />
      {focused &&
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 5,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          backgroundColor: COLORS.darkGreen
        }}
        />}
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 50
  },
  iconStyle: {
    width: 25,
    height: 25
  },
  activeTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    borderWidth: 1,
    backgroundColor: COLORS.darkGreen
  }
})
