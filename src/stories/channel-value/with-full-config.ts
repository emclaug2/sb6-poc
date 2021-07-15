import {Story} from "@storybook/angular/types-6-0";
import {ChannelValueComponent} from "@pxblue/angular-components";

const Template: Story<ChannelValueComponent> = (args: ChannelValueComponent) => ({
  template: `
    <pxb-channel-value [value]="value" [units]="units" [prefix]="prefix" [color]="color">
        <mat-icon>trending_up</mat-icon>
    </pxb-channel-value>`,
  props: args
});

export const withFullConfig = Template.bind({});
withFullConfig.story = { name: 'with full config' };
withFullConfig.args = {
    value: '123',
    units: 'hz',
    prefix: false,
    color: 'red'
};

