import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated, TouchableOpacity ,Image} from 'react-native'
import React, { useRef, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Circle = ({ onPress, animatedValue ,Value}) => {
const inputRange=[0,0.001,0.5,0.501,1];
const move=()=>Animated.timing(Value,{
  toValue:{x:100,y:100,height:100},
  duration:1000,
  useNativeDriver:false
}).start()
  return (
    <Animated.View style={{ flex: 1, paddingBottom: 40, padding: 8, alignItems: "center",backgroundColor:animatedValue.interpolate({
      inputRange,
      outputRange:['gold','gold','gold','#444','#444']
    }) }}>
        <Animated.View  style={Value.getLayout()}>
        <TouchableWithoutFeedback
        onPress={move}
        >
        <Animated.Image 
        style={{width:100,height:100,borderRadius:100}}
        source={{uri:"https://scontent-mct1-1.xx.fbcdn.net/v/t1.6435-9/87094355_651599595631239_4089146733689307136_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGURv6d2WgFgVD301BVGqKkGNo4BdPLZzYY2jgF08tnNuD7Si_rdGrNdaLWyUA_SgqoOWWyYsKwMf0J_YvVX4UI&_nc_ohc=lvj1bnf6ILMAX9pPBQK&_nc_ht=scontent-mct1-1.xx&oh=00_AT8kkQ4gzA2IeMEsR8Y_aka4yNexCyrZMtWW8aYe7fhY_w&oe=6372DA47"}} />
        </TouchableWithoutFeedback>
        </Animated.View>
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
  const Value=useState(new Animated.ValueXY({
    x:0,
    y:0,
    
  }))[0]
  const move=(toValue)=>Animated.timing(Value,{
    toValue,
    duration:1000,
    useNativeDriver:false
  })
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
    move(index==0?{x:0,y:100,left:40}:{x:0,y:0}).start()
    // console.log(animatedValue);
  }
  return (
    <View style={style.container}>
      <Circle onPress={onPress} animatedValue={animatedValue} Value={Value}/>
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
    position:"absolute",
    bottom:0,
    backgroundColor: "#444",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: "center",
    marginBottom:30
  }
})
