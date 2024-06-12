import React, { useState } from 'react';
import Header from './components/Header';
import Instruction from './components/Instruction';



function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  return (

    <div className='bg-[#2d2d2d] min-h-screen grid place-content-center'>
    {isHeaderVisible && 
      <div className='md:w-[650px]'>
      <Header onClose={() => setIsHeaderVisible(false)} />
        <Instruction title="#1 Tag Your Generation cue sheet" buttonText="Next" description="Add a name, project name, game title (can change later)"/>
        <Instruction title="#2 Paste the names of the sounds you need" buttonText="Generate" description="Use commas to separate words, up to 10 generations"/>
      </div>
    }
    </div>

  );
}

export default App;
