import Home from './Home';
import Team from './Team'
import Products from './Products';
import Shop from './Shop';
import Footer from './Footer';
import AnimatedText from 'react-animated-text-content';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { useState } from 'react';








const Main = () => {

const [ theme , SetTheme ] = useState('light')
 
const themeHandler = ( theme ) => {
    SetTheme(theme)
}

return (
    <>

<Home theme={themeHandler}/>

<Products theme={theme}/>

<Team theme={theme}/>

<Shop theme={theme}/>
   
<Footer theme={theme}/>
  
    </>
 )
}

export default Main;