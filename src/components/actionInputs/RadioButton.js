import React from 'react'

const RadioButton = () => {
    return (
        <div>
 <label class="container">One
  <input type="radio" checked="checked" name="radio" />
  <span class="checkmark"></span>
</label>
<label class="container">Two
  <input type="radio" name="radio" />
  <span class="checkmark"></span>
</label>
          </div>
    )
}

export default RadioButton
