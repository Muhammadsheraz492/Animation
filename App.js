import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Circle = ({ onPress, animatedValue }) => {
const inputRange=[0,0.001,0.5,0.501,1];

  return (
    <Animated.View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40, padding: 8, alignItems: "center",backgroundColor:animatedValue.interpolate({
      inputRange,
      outputRange:['gold','gold','gold','#444','#444']
    }) }}>
      <Animated.View style={[style.Circle, {
        backgroundColor:animatedValue.interpolate({
          inputRange,
          outputRange:['#444','#444','gold','gold','gold']
        }), 
        transform: [{
          perspective: 400
        },
        {
          rotateY: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '-90deg', '-180deg']
          })
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 8, 1]
          })
        },{
          translateX:animatedValue.interpolate({
            inputRange:[0,0.5,1],
            outputRange: [1, 12, 1]
          })
        }
        ]
      }]}>
        <TouchableOpacity
          onPress={onPress}
        >
          <AntDesign name='arrowright' size={28} color={"#fff"} />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}
const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current
  const [index,setindex]=React.useState(0)
  const animation=(toValue)=>
  Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      useNativeDriver: false
    })
  
  const onPress = () => {
    // console.log(animatedValue)
    // console.log("jdc");
    setindex(index===1?0:1)
    animation(index===0?1:0).start()
    // console.log(animatedValue);
  }
  return (
    <View style={style.container}>
      <Circle onPress={onPress} animatedValue={animatedValue} />
    </View>
  )
}

export default App;
const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"gold"
  },
  Circle: {
    backgroundColor: "#444",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center"
  }
})
