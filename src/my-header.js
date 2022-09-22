import { LitElement, html } from 'lit-element';

export class MyHeader extends LitElement {

    
    render() {
        return html`
        <header>Header</header>
        `;
    }
}
customElements.define('my-header', MyHeader);