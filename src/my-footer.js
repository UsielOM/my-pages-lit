import { LitElement, html } from 'lit-element';

export class MyFooter extends LitElement {

    render() {
        return html`
        <footer>Footer</footer>
        `;
    }


}
customElements.define('my-footer', MyFooter);