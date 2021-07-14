// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from '../button.component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    size: {
      type: 'select', // Type 'select' is automatically inferred when 'options' is defined
      options: ['small', 'large'],
      defaultValue: 'small'
    }
  },
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const withBasicConfig = Template.bind({});
withBasicConfig.args = {
  primary: true,
  label: 'Button',
};

