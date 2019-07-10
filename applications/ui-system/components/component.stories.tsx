import React from 'react';

import { storiesOf } from '@storybook/react';
import BismillahComponent from './bismillah-component';
import Badge from './badge';
import Button from './button';
import IconButton from './iconButton';

storiesOf('Component', module).add('Bismillah Component', () => <BismillahComponent/>);

storiesOf('Badge', module)
.add('Info Badge', () => <Badge type='info'>count!</Badge>)
.add('Cancel Badge', () => <Badge type='cancel'>cancel!</Badge>)
.add('Active Badge', () => <Badge type='active'>active!</Badge>)
.add('Pending Badge', () => <Badge type='pending'>pending!</Badge>)
.add('Disabled Badge', () => <Badge type='disabled'>disabled!</Badge>)
.add('Count Badge', () => <Badge type='count'>5</Badge>);


storiesOf('Button', module)
  .add('Default Button Primary', () => <Button contentEditable>Default Button</Button>)
  .add('Disable Button Primary', () => <Button disabled>Default Button</Button>)
  .add('Default Button Secondary', () => <Button color='secondary'>Default Button</Button>)
  .add('Disable Button Secondary', () => <Button color='secondary' disabled={true}>Default Button</Button>)
  .add('Link Button', () => <Button href='http://google.com'>Link Button</Button>)
  .add('Large Button', () => <Button size='large'>Large Button</Button>)
  .add('Large Disable Button', () => <Button size='large' disabled>Large Button</Button>)
  .add('Circular Button', () => <IconButton color='secondary' type='circular' icon='arrow-right'></IconButton>)
  .add('Icon Left Button', () => <IconButton position='left' icon='gear'>Default Button</IconButton>)
  .add('Icon Right Button', () => <IconButton position='right' icon='gear'>Default Button</IconButton>);



