import { Component, Prop, h, Host, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ap-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class APButton {

  @Element() el: HTMLElement;

  @Event() clickedButton: EventEmitter;

  @Prop() type ?= 'button';
  @Prop() content: string;
  @Prop() color ?= 'primary-70';


  render() {
    return <Host role="button" tabindex={0} type={this.type} color={this.color} onClick={e => this.clickedButton.emit(e)}>{this.content}</Host>;
  }
}
