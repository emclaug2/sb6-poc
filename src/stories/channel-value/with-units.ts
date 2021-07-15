import {Story} from "@storybook/angular/types-6-0";
import {ChannelValueComponent} from "@pxblue/angular-components";

const Template: Story<ChannelValueComponent> = (args: ChannelValueComponent) => ({
  template: `<pxb-channel-value value="123" [units]="units"></pxb-channel-value>`,
  props: args
});

export const withUnits = Template.bind({});
withUnits.story = { name: 'with units' };
withUnits.args = {
  units: 'hz'
};

