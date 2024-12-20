export function Menu({ children, trigger, visible, onToggle }) {
  const Trigger = trigger
  const triggerModeProps = {
    onClick: function () {
      onToggle?.()
    },
  }

  return (
    <div class="preach-menu--wrapper">
      <div class="preach-menu--trigger">
        <Trigger {...triggerModeProps} />
      </div>
      <div class="preach-menu--container">
        {visible && <menu class="preach-menu">{children}</menu>}
      </div>
    </div>
  )
}

export function MenuItem({ children }) {
  return <div class="preach-menu--item">{children}</div>
}

export function MenuDivider() {
  return <div class="preach-menu--divider" />
}
