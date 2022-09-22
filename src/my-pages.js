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
        return html `<footer>Your footer here.</footer>
        
        `;
    }

    render() {
        return html `
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        ${this.headerTemplate()}
        ${this.articleTemplate()}
        ${this.footerTemplate()}
        <button class="btn btn-danger">hola</button>        
       

        `;
    }
}
customElements.define('my-pages', MyPages);