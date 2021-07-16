import {Story} from "@storybook/angular/types-6-0";
import {ChannelValueComponent} from "@pxblue/angular-components";

const Template: Story<ChannelValueComponent> = (args: ChannelValueComponent) => ({
  template: `
    <pxb-channel-value value="123" units="hz">
        <mat-icon>trending_up</mat-icon>
    </pxb-channel-value>`,
  props: args
});

export const withIcon = Template.bind({});
withIcon.story = { name: 'with icon' };
/*
withIcon.parameters = {
  docs: {
    description: {
      story: '<div style="color: gray">A ChannelValue can support an icon.</div>',
    },
  },
};*/

