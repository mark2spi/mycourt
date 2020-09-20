import React from 'react'

import './styles.scss'

const Checkbox = ({ label }) => {
  return (
    <label class="checkbox">{label}
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  )
}

export default Checkbox
