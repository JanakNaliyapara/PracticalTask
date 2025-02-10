import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Home from '../screen/home';


const Router = () =>{
    const stack = createNativeStackNavigator()
    return(
        <>
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                </stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Router