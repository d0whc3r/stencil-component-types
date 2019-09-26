import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  shadow: true
})
export class MyOtherComponent {
  render() {
    return <div>Content from my-component
      <p>
        <my-component first="Malik" middle="Abdul" last="Aziz"/>
      </p>
    </div>;
  }
}
