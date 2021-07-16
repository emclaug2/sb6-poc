import {Story} from "@storybook/angular/types-6-0";
import {ChannelValueComponent} from "@pxblue/angular-components";
import { withBasicUsageName } from './names';

const Template: Story<ChannelValueComponent> = (args: ChannelValueComponent) => ({
  template: `<pxb-channel-value value="123"></pxb-channel-value>`,
  props: args,
});

export const withBasicUsage = Template.bind({});
withBasicUsage.story = { name: withBasicUsageName };
