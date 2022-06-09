import './App.css';
import { Provider } from 'react-redux'
import { store } from './store'
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Login from './screens/Login';
import Slots from './screens/Slots';
function App(){
	  
  return (
      <Provider store={store}>
      	<Routes>
        <Route path="/login" element={<Login/>}>
        </Route>
	  <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Slots/>
                  </ProtectedRoute>
                }
              />
      </Routes>
	</Provider>
  );
}

export default App;
