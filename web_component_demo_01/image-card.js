// implement the web component in your html as follows:
//      <image-card img-src="/images/camera.jpg">
//              <span slot="caption">Lorem ipsum dolor sit amet.</span>
//      </image-card>
//
const template = document.createElement('template');
template.innerHTML = `
    <style>

#card {
    display: flex;
    justify-content: center;
    position: relative;
    height: 40em;
    width: 30em;
    background-color: #000000;
    color: #E5E5E5;
    border: 0.3em solid #171717;
    border-radius: 1.5em;
    font-family: 'Roboto', sans-serif;
    text-align:center;
    overflow: hidden;
    transition: border-radius 1s ease-out;
}

#card:hover {
    border-radius: 5em;
}

#card:hover #text_caption{
    opacity: 100%;
    transition: opacity 1s ease-out;
}

#card slot::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 1s ease;
  }

#card slot:hover::before {
    transform: scaleX(1);
  }

#card img {
    width: 100%; 
    height: 40em;
    object-fit: cover;
}

#text_caption {
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    position: absolute;
    top: 50%;
}
    </style>

    <div id="card">
    <div id="text_caption">
        <slot name="caption"></slot>
    </div>
        <div id="image">
            <img alt="Card Image">
        </div>
    </div>


`;

class ImageCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const imgSrc = this.getAttribute('img-src');
        this.shadowRoot.querySelector('#card img').src = imgSrc;
    }
}

window.customElements.define('image-card', ImageCard);
