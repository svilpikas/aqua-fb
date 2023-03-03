import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { PageLoading } from '.'
import { STORY_PREFIX } from '../constants'

const stories = storiesOf(`${STORY_PREFIX}|PageLoading`, module)
stories.addDecorator(withKnobs)

stories.add('component', () => <PageLoading />)
