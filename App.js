import { StatusBar } from 'expo-status-bar';
import Started from './Screens/GetStarted';
import Login from './Screens/Login';
import Input from './Screens/ContexAPI/login';
import { ModeChanged } from './Screens/ContexAPI/context';


export default function App() {
  return (

      // <Login/>
      <ModeChanged>
        
        <Input/>

        <StatusBar style="auto" />

      </ModeChanged>
      
 
  );
}
