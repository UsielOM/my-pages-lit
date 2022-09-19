import { LitElement, html } from 'lit-element';

export class MyPages extends LitElement {

    static get properties() {
        return {
            article: { attribute: false },
        };
    }
    constructor() {
        super();
        this.article = {
            title: 'My Nifty Article',
            text: 'Some witty text.',
        };

    }

    headerTemplate() {
        return html `<header>${this.article.title}</header> `;
    }

    articleTemplate() {
        return html `<article> ${this.article.text}</article>`;
    }
    footerTemplate() {
        return html `<footer>Your footer here.</footer>`;
    }

    render() {
        return html `
        ${this.headerTemplate()}
        ${this.articleTemplate()}
        ${this.footerTemplate()}
        
        `;
    }
}
customElements.define('my-pages', MyPages);