

import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-first-componentes',
})
export class MyComponents {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        My name is desdsd {this.name}
      </p>
    );
  }
}

