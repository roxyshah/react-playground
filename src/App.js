import React, { Component } from 'react';
// import Tooltip from './composition/Tooltip';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tabs from './state/Tabs';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './accordion/Accordion';
import './App.css'; 

// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//    ipsum
//   </Tooltip>
// );

// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// );

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis='2'>
//         This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split className='right'>
//         This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
//   )
// }


//array of objects each with a name and content
// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter count={123} />
        <Tabs tabs={tabsProp} /> */}
        <h2>Hello World</h2>
        <HelloWorld />

        <h2>Bomb</h2>
        <Bomb />

        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={6} />

        <h2>Accordion</h2>
        <Accordion sections={sectionsProp} />
      </div>
    );
  }
}

// export default App


// class App extends React.Component {
//     render () {
//         return <div>
//             <Tabs tabs={tabsProp} />
//         </div>
//     }
// }

export default App;
