import './App.scss';
import CreateTodo from './components/CreateTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Toaster } from 'react-hot-toast';


function App() {

  return (
  <>
      <Toaster 
      containerClassName="toaster"
        toastOptions={{
        
            success: {
              duration: 2000,
              style: {
                color: 'green',
              },
            },
            error: {
              duration: 1000,
              style: {
                color: 'red',
              },
            },
        }}
  />

      <div className="App">
        <CreateTodo />
      </div>
  </>  
  );
}

export default App;
