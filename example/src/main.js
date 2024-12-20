import { Menu, MenuItem, MenuDivider } from '../../src/index.js'
import { render } from 'preact'
import './main.css'
import {signal } from '@preact/signals'

const showModal = signal(false)

const App = () => {
  return (
    <div class="menu-container">
      <Menu
        trigger={({ ...props }) => <button {...props}>Show</button>}
        visible = {showModal.value}
        onToggle={() => {
          showModal.value = !showModal.value
        }}
      >
        <MenuItem>
          <button>Back</button>
        </MenuItem>
        <MenuItem>
          <button>Forward</button>
        </MenuItem>
        <MenuDivider />
      </Menu>
    </div>
  )
}

render(<App />, document.querySelector('#app'))
