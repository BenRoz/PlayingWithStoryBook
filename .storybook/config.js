import { configure } from '@storybook/react';
// import 'storybook-addon-i18n-tools';
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
