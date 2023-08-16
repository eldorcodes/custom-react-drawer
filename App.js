import * as React from 'react';
import { Button, View, Image, ImageBackground, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';

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
        style={{padding:20}} 
        >
          <Image 
          source={require('./assets/icon.png')}
          style={{width:80,height:80,borderRadius:50}} />
        </ImageBackground>
      <DrawerItemList {...props}/>
     <DrawerItem label={'Options'} onPress={() => setShow(!show)} />
     {show && <View style={{paddingLeft:20}}>
      <DrawerItem label={'uz'} onPress={() => Alert.alert('Got it')} />
      <DrawerItem label={'ru'} onPress={() => Alert.alert('Got it')} />
      <DrawerItem label={'en'} onPress={() => Alert.alert('Got it')} />
      <DrawerItem label={'es'} onPress={() => Alert.alert('Got it')} />
      </View>}
    </DrawerContentScrollView>
    <View>
      <Text>Hello new drawer</Text>
    </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon:({size,color}) => <AntDesign name="home" size={size} color={color} />
        }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{
          drawerIcon:({size,color}) => <AntDesign name="setting" size={size} color={color} />
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}