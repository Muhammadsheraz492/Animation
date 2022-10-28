import { View, Text, Animated, PanResponder, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'

const App = () => {
  const Next = useRef(new Animated.ValueXY()).current
  const [index,setindex]=useState(0)
  const ScaleValue = useRef(new Animated.Value(0)).current
  const Move=()=>{
    console.log("Allow"),
    setindex(index==0?1:0)
    Animated.timing(ScaleValue, {
     toValue: index==0?1:0,
     duration: 3000,
     useNativeDriver: false
   }).start()
  }
  const GetXY = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gesture) => {
        // console.log(gesture.moveX);
        console.log(gesture.dx)
        // console.log(gesture.moveY)
        Next.setOffset({
          x: Next.x._value,
          y: Next.y._value
        })
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: Next.x, dy: Next.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Next.flattenOffset();
      }

    })
  ).current


  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Pressable
      // style={{marginTop:10}}
        onPress={Move}
      >

        <Text  style={{paddingVertical:20}}>Now start Working</Text>
      </Pressable>
      <View style={{ marginTop: 10, width: "90%", alignSelf: "center" }}>
        <Animated.View style={{
          borderWidth: 1, borderRadius: 10, width: "100%", height: 40,
          transform: [
            { translateX:index==0?Next.x: ScaleValue.interpolate({
              inputRange:[0,0.5,1],
              outputRange:[0,200,300]
            }) },
          ]
        }}

          {...GetXY.panHandlers}
        >

        </Animated.View>

      </View>
    </View>
  )
}

export default App