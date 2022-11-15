import Button from '../components/Button/Button.jsx';

export default {
    title: 'Button',
    component: Button,
    argTypes: { handleClick: { action: 'handleClick'} }
}
const Template = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
    backgroundColor: '#9b3636',
    label: 'Primary',
    size: 'md'
}

export const Secondary = Template.bind({})

Secondary.args = {
    backgroundColor: 'black',
    label: 'Secondary',
    size: 'lg'
}