// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {CommonModule} from '@angular/common';
import {ChannelValueModule} from '@pxblue/angular-components';
import {componentWrapperDecorator, moduleMetadata} from '@storybook/angular';
import {MatIconModule} from "@angular/material/icon";

export default {
  title: 'Example/ChannelValue',
  argTypes: {
    value: {
      description: 'The value (bold text) to display',
      control: 'text',
    },
    units: {
      description: 'The text to display for the units (light text)',
      control: 'text'
    },
    prefix: {
      description: 'Show units before the value',
      control: 'boolean',
      defaultValue: 'false'
    },
    color: { control: 'color' },
  },
  parameters: {
    docs: {
      description: {
        component: 'You can put custom markdown here'
      },
    },
  },
  decorators: [
      moduleMetadata({
        imports: [CommonModule, ChannelValueModule, MatIconModule],
      })
    ]
} as Meta;


export * from './with-basic-usage';
export * from './with-units';
export * from './with-icon';
export * from './with-full-config';
