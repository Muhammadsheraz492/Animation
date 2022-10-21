import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, SafeAreaView, An, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import profile from './Assets/profile.png'
import Search from './Assets/search.png'
import Settings from './Assets/settings.png'
import Home from './Assets/home.png'
import Notification from './Assets/bell.png'
import Logout from './Assets/logout.png'
import Menu from './Assets/menu.png'
import photo from './Assets/photo.jpg'
import close from './Assets/close.png'
const App = () => {
  const [currentTab, setCurrentTab] = useState("Home")
  const [showMenu,setShowMenu]=useState(false);
  const offsetValue=useRef(new Animated.Value(0)).current
  const scaleValue=useRef(new Animated.Value(1)).current
  const closeButtonOffset=useRef(new Animated.Value(0)).current
  return (
    <SafeAreaView style={style.container}>
      <View style={{ justifyContent: "flex-start",padding:15}}>
      
      <Image
          style={{ width: 60, height: 60, borderRadius: 10, }}
          source={profile}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20
          }}
        >Muhammad Sheraz</Text>
        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: "white"
          }}>View Profile</Text>
        </TouchableOpacity>
        <View  style={{flexGrow:1,marginTop:50}}>
       {TabBtn(currentTab,setCurrentTab,"Home",Home,scaleValue,offsetValue,closeButtonOffset,setShowMenu,showMenu)}
       {TabBtn(currentTab,setCurrentTab,"Search",Search,scaleValue,offsetValue,closeButtonOffset,setShowMenu,showMenu)}
       {TabBtn(currentTab,setCurrentTab,"Notification",Notification,scaleValue,offsetValue,closeButtonOffset,setShowMenu,showMenu)}
       {TabBtn(currentTab,setCurrentTab,"Settings",Settings,scaleValue,offsetValue,closeButtonOffset,setShowMenu,showMenu)}
        </View>
        <View>
        {TabBtn(currentTab,setCurrentTab,"Logout",Logout)}

        </View>
      </View>
     
      <Animated.View style={{ flexGrow: 1, backgroundColor: "#fff", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, paddingHorizontal: 10,borderRadius:showMenu?15:0, paddingVertical: 20,
    transform:[
      {scale:scaleValue},
      {translateX:offsetValue}
    ]
    }}>
      <Animated.View  style={{transform:[
        {translateY:closeButtonOffset}
      ]}}>

        <TouchableOpacity
        onPress={()=>{
          Animated.timing(scaleValue,{
            toValue:showMenu?1:0.88,
            duration:300,
            useNativeDriver:false
          }).start()
          Animated.timing(offsetValue,{
            toValue:showMenu?1:230,
            duration:300,
            useNativeDriver:false
          }).start()
          Animated.timing(closeButtonOffset,{
            toValue:showMenu?5:0,
            duration:300,
            useNativeDriver:false
          }).start()
          setShowMenu(!showMenu)
        }}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: "black",  }}
            source={showMenu? close:Menu}
          />
        </TouchableOpacity>
        <Text  style={{fontSize:30,fontWeight:"bold",color:"black",paddingTop:20}}>{currentTab}</Text>
           <Image  
           source={{uri:'https://scontent.flhe13-1.fna.fbcdn.net/v/t1.6435-9/106128993_736062463851618_1920375277792560599_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeELxIah-UvTk3eMA3Oc1hP5ke11cuZ0cB-R7XVy5nRwH2QCqm4ZEaqEQNj2xOvgQsquloZ62FkDul-yawFdPdur&_nc_ohc=BWikChEik54AX9xC1WL&_nc_ht=scontent.flhe13-1.fna&oh=00_AT9H6BQf23moQ9sxIiXM2EGObrISGezXYyOKgUpPDM44rQ&oe=63780A72'}}
           style={{width:"100%",height:300,borderRadius:15,marginTop:20}}
           />
           <Text  style={{fontSize:18,fontWeight:"bold",paddingTop:15,paddingBottom:8}}>Muhammad Sheraz</Text>

           <Text style={{}}>My name is sheraz and my github id is muhammadshiraz492 you can search on google </Text>
           </Animated.View>
     
      </Animated.View>
   
    </SafeAreaView>
  )
}

const TabBtn = (currentTab, setCurrentTab, title, image,scaleValue,offsetValue,closeButtonOffset,setShowMenu,showMenu) => {
  return (
    <TouchableOpacity onPress={() => {
      if (title == "Logout") {
    alert("This  is logout Btn")
      } else {
        setCurrentTab(title)
        Animated.timing(scaleValue,{
          toValue:showMenu?1:0.88,
          duration:300,
          useNativeDriver:false
        }).start()
        Animated.timing(offsetValue,{
          toValue:showMenu?1:230,
          duration:300,
          useNativeDriver:false
        }).start()
        Animated.timing(closeButtonOffset,{
          toValue:showMenu?5:0,
          duration:300,
          useNativeDriver:false
        }).start()
        setShowMenu(!showMenu)
      }
    }}
    >
      <View style={{
        flexDirection: "row", alignItems: "center",
        backgroundColor: currentTab == title ? "#fff" : "transparent",
        paddingVertical: 8,
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>
        <Image
          style={{
            width: 25, height: 25,
            tintColor: currentTab == title ? "#5359D1" : "#fff"
          }}
          source={image}

        />
        <Text style={{
          fontSize: 15, fontWeight: "bold", paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "#fff"
        }}>{title}</Text>
      </View>

    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5359D1",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  }
})

export default App