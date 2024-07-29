import React from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AppRouter from './routes/AppRouter';

const App = () => {

  const [user, setUser] = React.useState("");

  return (
    <>
   
      <Navbar user={user}/>
      <AppRouter/>
      <Footer/>
   
    </>
   
  )
}

export default App
