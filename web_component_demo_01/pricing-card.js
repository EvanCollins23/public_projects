// This web component has the following slot elements 
// This is how the element should be called in html
// 
// <pricing-card style="--list-style-image: url('/PATH TO YOUR IMAGE');">
//      <span slot="name"> {user text} </span>
//      <span slot="pitch"> {user text} </span>
//      <span slot="price"> {user text} </span>
//      <span slot="time"> {user text} </span>
//      <span slot="feature_1"> {user text} </span>
//      <span slot="feature_2"> {user text} </span>
//      <span slot="feature_3"> {user text} </span>
//      <span slot="feature_4"> {user text} </span>
//      <span slot="feature_5"> {user text} </span>
// </pricing-card>
//
// The size of the card can be scaled up or down via the font-size property of the card
//
//  If you do not want to use all of the 5 features in the feature list include the slot tags but leave them blank like this
//      <span slot="feature_1"> {user text} </span>
//      <span slot="feature_2"> {user text} </span>
//      <span slot="feature_3"> {user text} </span>
//      <span slot="feature_4"></span>
//      <span slot="feature_5"></span>
//


const template = document.createElement('template')
template.innerHTML = ` 

    <style>

    :host {
        --list-style-image: none; /* default value */
      }      

    #card {
        height: 40em;
        width: 30em;
        background-color: #454445;
        color: #E5E5E5;
        border: 0.25em solid #171717;
        border-radius: 1em;
        font-family: 'Roboto', sans-serif;
        text-align:center;
        position: relative;
        top: 0;
        transition: top ease 0.5s;
    }
    
    #card:hover {
        border: 0.25em solid #BB86FC;
        top: -10px;
    }

    a {
        text-decoration: none;
        color: #111111;
        font-family: 'Roboto', sans-serif;
    }

    .hat {
        font-size: 2em;
        background-color:#111111;
        padding: 0.5em;
        border-radius: 0.37em 0.37em 0 0;
    }

    .pitch_container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pitch{
        text-align:justify;
        max-width: 35ch;
        font-size: 1.2em;
        margin-top: 2em;
        margin-bottom: 2em;
    }

    .purchase-button {
        width: 16em;
        font-size: 1.5em;
        background-color: #C191FE;
        border-radius: 0.5em;
        border: none;
        padding: 0.5em;
        cursor: pointer;
        margin-bottom: 0.5em;       
    }

    .purchase-button:hover {
        background-color: #cba5fd;
        
    }

    .price {
        text-align:justify;
        margin-left: 3em;
        margin-bottom: 2em;
    }

    #amount {
        font-size: 2em;
    }

    .feature_container {
        text-align: justify;
        margin-left: 2em;
    }

    ol {
        list-style-image: var(--list-style-image);
        font-size: 1.3em;
        line-height: 1.25em;
    }

    li::marker {
        background-color: #111111;
        font-size: 2em;
    }

    </style>

    <div id="card">

        <div class="hat">
            <div class="name">
                <slot name="name"/>
            </div>
        </div>

        <div class="pitch_container">
            <div class="pitch">
                <slot name="pitch"/>        
            </div>
        </div>

        <div class="pricing">

        <div class="price">
                <span id="amount">
                    <slot name="price"/>
                </span>
                <span id="time">/
                    <slot name="time"/>
                </span>
        </div>

        <div class="button_container">
            <button class="purchase-button">
            <a href = '#'> Purchase</a>
        </div>

        <div class="feature_container">
            <ol>
                <li id="feature_1"><slot name="feature_1"/></li>
                <li id="feature_2"><slot name="feature_2"/></li>
                <li id="feature_3"><slot name="feature_3"/></li>
                <li id="feature_4"><slot name="feature_4"/></li>
                <li id="feature_5"><slot name="feature_5"/></li>          
            </ol>
        </div>

    </div>

`;

class PricingCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.hideEmptyItems();
    }

    hideEmptyItems() {
        const featureListItems = this.shadowRoot.querySelectorAll('.feature_container li');

        featureListItems.forEach((li) => {
            const slotName = li.getAttribute('id');
            const slotContent = this.querySelector(`[slot="${slotName}"]`).textContent.trim();

            if (slotContent === '') {
                li.style.display = 'none';
            }
        });
    }


    //connectedCallback() {
    //    const imgSrc = this.getAttribute('img-src');
    //    this.shadowRoot.querySelector('ol img').url = imgSrc;
    //}


}

window.customElements.define('pricing-card', PricingCard);