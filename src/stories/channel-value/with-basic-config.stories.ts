// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from '../button.component';
import {CommonModule} from '@angular/common';
import {ChannelValueModule} from '@pxblue/angular-components';
import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {MatIconModule} from "@angular/material/icon";


export default {
  title: 'Example/ChannelValue',
  component: Button,
  decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with Storybook
        imports: [CommonModule, ChannelValueModule ],
      }),
    // 👇 Wraps our stories with a decorator
      componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
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
  template: `<div>sup buddy</div>`,
  props: args,
});

export const withBasicConfig: Story = (args: any) => ({
  template: `<pxb-channel-value [value]="value"></pxb-channel-value>`,
  args: {
    value: 'test'
  }
});

