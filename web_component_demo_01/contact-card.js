// needed slots when implementing in html are:
//            <span slot="name"></span>
//            <span slot="title"></span>
//            <span slot="bio"></span>

const template = document.createElement('template')
template.innerHTML = ` 

    <style>


    .card {
        position: relative;
        height: 40em;
        width: 30em;
        background-color: #454445;
        color: #E5E5E5;
        border: 0.25em solid #171717;
        border-radius: 1em;
        font-family: 'Titillium Web', sans-serif;
        text-align:center;
        transition: transform 0.3s ease;

    }
    
    .card:hover {
        border: 0.25em solid #BB86FC;
        transform:translateY(-5%)
    }

    .hat {
        font-size: 1.5em;
        background-color:#111111;
        padding: 0.25em;
        border-radius: 0.5em 0.5em 0 0;
    }

    .icon-container {
        width: 14em;
        height: 14em;
        margin-top: 2em;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        background-color:#111111;
    }

    .pfp {
        margin-top: 1.5em;
        color: #2F2F2F;
    }

    .bio {
        font-size: 1.2em;
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 2em;
    }

    .boot {
        margin-top: 2em;
    }

    .contact-button {
        font-size: 1.25em;
        background-color: #C191FE;
        border-radius: 0.5em;
        padding: 0.5em;
        border: none;
        cursor: pointer;
        position: absolute;
        left:0;
        right:0;
        margin-left: 38%;
        margin-right: 38%;
        top: 80%;      
    }

    a {
        text-decoration: none;
        color: #111111;
        font-family: 'Titillium Web', sans-serif;
    }

    .contact-button:hover {
        border: 0.1em solid #171717;
    }

    </style>

    <div class="card">

        <div class="hat">
            <div class="name">
                <slot name="name"/>
            </div>
            <div class="title">
                <slot name="title"/>
            </div>
        </div>

        <div class="icon-container">
            <div id="pfp">
                <svg xmlns="http://www.w3.org/2000/svg" class="pfp" height="10em" viewBox="0 0 448 512">
                <path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>
                </svg>            
            </div>
        </div>

        <div class="bio">    
            <slot name="bio"/>
        </div>

        <div class="boot">
            <div class="contact">
                    <button class="contact-button">
                        <a href = 'mailto: '>CONTACT</a>
                    </button>
            </div>
        </div>

    </div>

`;

    class ContactCard extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

window.customElements.define('contact-card', ContactCard)