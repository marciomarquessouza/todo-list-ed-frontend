import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach(req);
}

addDecorator(themeDecorator);

configure(loadStories, module);
