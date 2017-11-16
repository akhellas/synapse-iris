let tmpl = document.createElement('template');

tmpl.innerHTML = `
  <style>:host { ... }</style> <!-- look ma, scoped styles -->
  <b>I'm in shadow dom!</b>
  <slot></slot>
`;

class IrisDocumentsInbox extends HTMLElement {

  static get observedAttributes() {
    return ['test']; 
  }

  constructor() {
    super();

    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('IDI', 'connected');
    this.innerHTML = "<b>iris-documents-inbox</b>";
  }

  disconnectedCallback() {
    console.log('IDI', 'disconnected');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log('IDI', 'attributeChanged', attrName, oldVal, newVal);
  }
}

customElements.define('iris-documents-inbox', IrisDocumentsInbox);
