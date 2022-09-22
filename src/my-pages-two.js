import { LitElement, html } from 'lit-element';
import './my-header';
import './my-article';
import './my-footer';
export class MyPagesTwo extends LitElement {


    
   
    render() {
        return html`
        <my-header></my-header>
        <my-article></my-article>
        <my-footer></my-footer>
        `;
    }
}
customElements.define('my-pages-two', MyPagesTwo);