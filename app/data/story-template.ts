export const template = `import type { Meta, StoryObj } from '@storybook/react';
//import component
const meta: Meta<//type of component> = {  
  title: //title of component,  
  component: //component ,
};
export default meta;
type Story = StoryObj<//type of component>;
const StoryTemplate: Story = {  
  render: (args) => //render component,
};
export Primary = {  
  ...StoryTemplate,  
  args: {      
    //component's props  
  }
}`;

export const component =
  "import React, { useState } from 'react';const CounterButton = ({handleClick}) => {  const [count, setCount] = useState(0);  return (    <button onClick={handleClick}>      {`Clicked ${count} time${count === 1 ? '' : 's'}`}    </button>  );};export default CounterButton;";
