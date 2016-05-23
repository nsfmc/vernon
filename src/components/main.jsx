/* @flow */
import * as css from './main.css';
import React, {Component} from 'react'

export default class Main extends Component {

  ohai (person:string): string {
    return `ohai, ${person}!`
  }

  render (): any {
    return <p className={css.foo}>{this.ohai('world')}</p>
  }
}
