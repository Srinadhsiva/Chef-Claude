import './App.css'
// import {Heade r,MainContent,} from './components/1-components' // for challenge 2
// import { Header,Cards } from './components/1-components'; // for Challenge 3
import { Header,Main,} from './components/2-components.jsx';
function App() {
  

  return (
      // // Challenge 1
      // <>   {/* parent element. */}      
      //   <a href="https://react.dev" target="_blank">
      //   <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      //   <h1>Fun facts about React</h1>
      //   <ul>
      //     <li>Was first released in 2013 </li>
      //     <li>Was originally created by Jordan walke</li>
      //     <li>Has well over 100k stars on github</li>
      //     <li>Is maintained by meta</li>
      //     <li>Powers thousands of enterprise app including mobile apps</li>
      //   </ul>
      // </>

      // <>
      //   < Header />
      //   <h1>reason 1</h1>
      //   <footer>© 20xx Rani development. All rights reserved.</footer>
      // </>
      //Challenge 2
      // <div>
      //   {/* <NavBar /> */}
      //   <Header />
      //   <MainContent />
      // </div>

      // Challenge 3

      // <>
      //   <Header />
      //   <Cards />
      // </>

      // Challenge - new - section
      <>
         <Header />
         <Main />
      </>
  )
}


export default App
