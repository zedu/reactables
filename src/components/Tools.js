import React from 'react'
import Button from './Button.js'
import styles from '../css/styles.css'

var CommonConstants = require('./CommonConstants');
var EditorConstants = require('./EditorConstants');

class Tools extends React.Component {
  render()
  {
    return (
      <div className="gt_head_tools">
        <Button>New</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    )
  }
}

export default Tools