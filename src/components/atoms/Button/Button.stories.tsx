import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Button } from './'
import { STORY_PREFIX } from '../constants'

const stories = storiesOf(`${STORY_PREFIX}|Button`, module)
stories.addDecorator(withKnobs)

stories.add('component', () => (
  <Button message="" exampleAction={() => {}}>
    {text('Text', 'Button text')}
  </Button>
))
