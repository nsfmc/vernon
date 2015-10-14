/* @flow */

import React, {Component} from 'react'

export default class Main extends Component {

  ohai (person:string): string {
    return `ohai, ${person}!`
  }

  render (): any {
    return <p>{this.ohai('world')}</p>
  }
}
