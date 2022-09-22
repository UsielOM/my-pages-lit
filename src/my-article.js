import { LitElement, html } from 'lit-element';

export class MyArticle extends LitElement {

    render() {
        return html`
        <article>Article</article>
        `;
    }
}
customElements.define('my-article', MyArticle);