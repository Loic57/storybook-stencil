import { React } from 'react'
import { APButton } from '../../../dist/collection/components/button/button';

export default {
  title: 'Foundation/Button',
  component: APButton
};

// custom event listener
/* document.addEventListener('clickedButton', (e) => {
  console.log(e)
}) */

const Template = (args) => {
  return <ap-button {...args}></ap-button>;
}

export const Button = Template.bind({});
Button.args = {
  content: "This is a button",
}
