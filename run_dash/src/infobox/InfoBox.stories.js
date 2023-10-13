// src/components/InfoBox.stories.js
import React from 'react';
import InfoBox from './InfoBox';

export default {
  title: 'InfoBox',
  component: InfoBox,
};

const Template = (args) => <InfoBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Mileage',
  data: '100 miles',
};
