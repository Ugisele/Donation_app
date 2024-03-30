import { StatusBar } from 'expo-status-bar';
import Started from './Screens/GetStarted';
import Login from './Screens/Login';
import Input from './Screens/ContexAPI/login';
import { ModeChanged } from './Screens/ContexAPI/context';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './Screens/Navigation';



export default function App() {
  return (

      // <Login/>
      <ModeChanged>
        
        {/* <Input/> */}
        <NavigationContainer>
      <StackNav />
    </NavigationContainer>

        <StatusBar style="auto" />

      </ModeChanged>
      
 
  );
}
