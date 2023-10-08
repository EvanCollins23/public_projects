// implement the web component in your html as follows:
//      <hero-section img-src="/path-to-image/image.svg">
//              <span slot="slogan">{user text}</span>
//      </hero-section>
//
const template = document.createElement('template');
template.innerHTML = `
    <style>
        #hero {
            color: white;
            font-family: 'Roboto', sans-serif;
            position: relative;
            height: 30%;
            width: 100%;
            margin-top: 5em;
            margin-bottom:5em;
            outline: 0.25em solid #111111;
        }

        #slogan {
            font-size: 3em;
            padding: 3em;
            text-align: center;
            width: 30ch;
            position: absolute;
            top: 50%;
            left: 50%;
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        #hero-image {
            height: 40em;
        }

        #hero-image img {
            opacity: 20%;
            height: 100%;
            width: 100%;
            opacity: 100%;
            object-fit: cover;
        }
    </style>

    <div id="hero">

        <div class="slogan_container">
            <div id="slogan">
                <slot name="slogan"/>
            </div>
        </div>

        <div id="hero-image">
            <img alt="Hero Image">
        </div>
    </div>
`;

class HeroSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Access imgSrc from the attribute and set the image source
        const imgSrc = this.getAttribute('img-src');
        this.shadowRoot.querySelector('#hero-image img').src = imgSrc;
    }
}

window.customElements.define('hero-section', HeroSection);