// needed slots when implementing in html are:
//            <span slot="name"></span>
//            <span slot="title"></span>
//            <span slot="bio"></span>

const template = document.createElement('template')
template.innerHTML = ` 

    <style>

    .card {
        height: 40em;
        width: 30em;
        background-color: #454445;
        color: #E5E5E5;
        border: 0.25em solid #171717;
        border-radius: 1em;
        font-family: 'Titillium Web', sans-serif;
        text-align:center;

    }
    
    .card:hover {
        border: 0.25em solid #BB86FC;
    }

    .hat {
        font-size: 1.5em;
        background-color:#111111;
        padding: 0.25em;
        border-radius: 0.5em 0.5em 0 0;
    }

    .input-container {
        font-size: 1.5em;
        padding: 3em;
    }

    input, text {
        border: 0.1em solid #171717;
        font-size: 0.9em;
        color: #E5E5E5;
        font-family: 'Titillium Web', sans-serif;
        text-align: center;
        background-color: #2F2F2F;
        padding: 0.25em;
        margin: 1em;
        border-radius: 0.5em;
    }

    input:focus {
        outline: none;
        border: 0.1em solid #BB86FC;
    }

    .input {
        display:flex;
        flex-direction:column;
        margin-left: 10%;
        margin-right: 10%;
    }

    .sign-in-button {
        font-size: 1.5em;
        background-color: #C191FE;
        border-radius: 0.5em;
        padding: 0.25em;
        border: none;
        cursor: pointer;          
    }

    button {
        color: #111111;
        font-family: 'Titillium Web', sans-serif;
    }

    .sign-in-button:hover {
        border: 0.1em solid #171717;
    }

    </style>

    <div class="card">

        <div class="hat">
            <div class="text">
                Sign in to your account
            </div>
        </div>

        <div class="input-container">    

            <div class="input"> 
                <label for="fname">First Name</label>
                <input type="text" class="field">
            </div>

            <div class="input"> 
                <label for="lname">Last Name</label>
                <input type="text" class="field">
            </div>

        </div>

        <div class="boot">
            <div class="contact">
                    <button class="sign-in-button">
                        <div class="button-text">Sign In</div>
                    </button>
            </div>
        </div>

    </div>

`;

    class SignIn extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode:'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

window.customElements.define('sign-in', SignIn)
