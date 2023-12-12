import React, { useState } from 'react';
import TabButton from './TabButton';
import {EXAMPLES} from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import "../index.css";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState('components');

    
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic){
      tabContent = 
      <div key={selectedTopic} id='tab-content' className="fade-in">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    }
  

    function handleSelect(selectedButton) {
        //string for the button (Components, JSX, Props, State)
        setSelectedTopic(selectedButton);
      }

        return (
                <Section id="examples" title='Examples'>
                    <Tabs                     
                    buttons={
                        <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>
                            Props
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>
                            State
                        </TabButton>
                        </>}
                    >
                    {tabContent}
                    </Tabs>                                    
                </Section>
        )
}