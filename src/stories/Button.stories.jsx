import Button from '../components/Button/Button.jsx';

export default {
    title: 'Button',
    component: Button,
    argTypes: { 
        handleClick: { action: 'handleClick'},
        backgroundColor: { control: 'color' },
    }
}
const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    primary: true,
    label: 'Primary'
}

export const Secondary = Template.bind({})

Secondary.args = {
    label: 'Secondary',
}

export const Lg = Template.bind({});
Lg.args = {
  size: 'lg',
  label: 'Large',
};

export const Sm = Template.bind({});
Sm.args = {
  size: 'sm',
  label: 'Small',
};
