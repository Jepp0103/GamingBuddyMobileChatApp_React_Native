import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styled from 'styled-components/native'

const Tab = createBottomTabNavigator()

const getHeaderName = (route) => route?.state?.routeNames[route.state.index] || 'Chat'

const IconDiv = styled.View`
    width: 50px;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center:
`

const IconButton = styled.ImageBackground`
    flex: 2;
`

const IconText = styled.Text`
    flex: 1;
`

// export default ({ navigation, route }) => {
//     useLayoutEffect(() => {
//         const headerName = getHeaderName(route);
//         navigation.setOptions({
//            title: headeName
//         });
//     }, [route]);
//
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused }) => {
//                     let icon = route.name === "chat" ? chatIcon : buddiesIcon;
//                     return (
//                         <IconDiv>
//                             <IconButton source={icon ? icon : chatIcon} color={focused ? "white" : "grey"} />
//                             <IconText>${route.name}</IconText>
//                         </IconDiv>
//                     );
//                 }
//             })}
//             tabBarOptions={{
//                 style: {
//                     backgroundColor: "#303438"
//                 }
//             }}
//         >
//             <Tab.Screen name="Chat" component={Chats} />
//             <Tab.Screen name="Buddies" component={Buddies} />
//         </Tab.Navigator>
//     );
// };
