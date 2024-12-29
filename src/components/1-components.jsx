import reactLogo from '../assets/react.svg';
import './1-component.css';
import datas from '../assets/data.json';
//Challenge - 2
// function Header() {
//     return (
//       <>  
//           <header><img src={reactLogo} alt="logo of react" />
//           <p>React Facts</p>
//           </header>
//       </>
//     )
// }

// const NavBar = function(){
//     return (
//       <>
//           <div className='nav-bar'>
//           <nav>
            
//               <Header/>
//               <li>
//                 <li>Pricing</li>
//                 <li>Contact</li>
//                 <li>About</li>
//               </li>
              
//           </nav>
//           </div>
//           <h1>Hey there lets check this out</h1>
            
//       </>
//     )
// }

// function MainContent(){
//     return(
//         <>
//             <main>
//                 <h1>Fun Facts About React</h1>
//                 <ul>
//                     <li>was first released in 2013</li>
//                     <li>was originally created by Jordan Walke</li>
//                     <li>Has well over100k stars on github</li>
//                     <li>Is maintained by meta</li>
//                     <li>Powers over thousand of enterprises apps, including mobile apps</li>
//                 </ul>
//             </main>
//         </>
//     )
// }



// export {Header,NavBar,MainContent};



  
function Header() {
    return (
      <>  
          <nav>
           🌎myTraveljournal
          </nav>

      </>
    )
}

function Cards() {
    return (
        <>
            {datas.map((data, index) => (
                <div className="cards-container" key={index}>
                    <div className="cards">
                        <img src={data.image} alt={`image of ${data.country}`} />
                        <div className="card-data">
                            <div className="card-top">
                                <p>
                                    {data.country}
                                    <a href="https:maps.+google.com">View on Google maps</a>
                                </p>
                                <h2>{data.title}</h2>
                            </div>
                            <div>
                                <p>{data.dates}</p>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export {Header,Cards};