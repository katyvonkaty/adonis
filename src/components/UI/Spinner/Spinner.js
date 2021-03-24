import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Spinner = () => (
  <div>

    <Segment>
      <Dimmer active inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

    </Segment>
  </div>
)

export default Spinner
