import * as React from 'react';
import { Button, View, Image, ImageBackground, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function CustomDrawer(props) {
  const [show,setShow] = React.useState(false)
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView 
      contentContainerStyle={{backgroundColor:'#fff'}}
      {...props}>
        <ImageBackground 
        source={require('./assets/bg-sku.png')} 
        style={{padding:20,marginTop:-70,height:300}} 
        >
          <Image 
          source={require('./assets/icon.png')}
          style={{width:80,height:80,borderRadius:50,marginTop:100}} />
          <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>John Doe</Text>
        </ImageBackground>
      <DrawerItemList {...props}/>
      <TouchableOpacity onPress={() => setShow(!show)}>
      <View style={{flexDirection:'row',paddingLeft:20,paddingTop:10}}>
      <FontAwesome5 name="language" size={24} color="black" />
        <Text style={{paddingLeft:5,paddingRight:5}}>Languages</Text>
        <Entypo name="plus" size={14} color="black" />
      </View>
      </TouchableOpacity>
     {show && <View style={{paddingLeft:20}}>
      <DrawerItem label={'uz'} onPress={() => Alert.alert('Got it')} />
      <DrawerItem label={'ru'} onPress={() => Alert.alert('Got it')} />
      <DrawerItem label={'en'} onPress={() => Alert.alert('Got it')} />
      <DrawerItem label={'es'} onPress={() => props.navigation.closeDrawer()} />
      </View>}
    </DrawerContentScrollView>
    
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        drawerLabelStyle:{
          marginLeft:-20
        }
      }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon:({size,color}) => <AntDesign name="home" size={size} color={color} />,
          headerShown:true
        }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{
          drawerIcon:({size,color}) => <AntDesign name="setting" size={size} color={color} />,
          headerShown:true
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}