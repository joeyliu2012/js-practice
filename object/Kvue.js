class Kvue extends EventTarget {
    constructor(options) {
        super();
        this.options = options;
        this.compile();
        this.observe(this.options.data);
    }

    observe(data) {
        Object.keys(data).forEach(key => {
            this.defineRect(data, key, data[key]);
        })
    }

    defineRect(data, key, value) {
        let _this = this;
        Object.defineProperty(data, key, {
            configurable: true,
            enumerable: true,
            get() {
                return value;
            },
            set(newValue) {
                let event = new CustomEvent(key, {
                    detail: newValue
                });
                _this.dispatchEvent(event);
                value = newValue;
            }
        })
    }

    compile() {
        let els = document.querySelector(this.options.el);
        let childNodes = els.childNodes;
        this.compileNodes(childNodes);
    }

    compileNodes(childNodes) {
        childNodes.forEach(node => {
            if (node.nodeType == 1) {
                // console.log('node');
                let attrs = node.attributes;
                [...attrs].forEach(attr => {
                    let attrName = attr.name;
                    let attrValue = attr.value;
                    attrName = attrName.substr(2);
                    if(attrName == 'html') {
                        node.innerHTML = this.options.data[attrValue];
                    } else if (attrName == 'model') {
                        node.value = this.options.data[attrValue];
                        node.addEventListener('input', e => {
                            this.options.data[attrValue] = e.target.value;
                        })
                    }
                })
                if (node.childNodes.length > 0) {
                    this.compileNodes(node.childNodes);
                }
            } else if (node.nodeType == 3) {
                // console.log('text');
                let reg = /\{\{\s*(\S+)\s*\}\}/g
                let textContent = node.textContent;
                let test = reg.test(textContent);
                if (test) {
                    let $1 = RegExp.$1;
                    node.textContent = this.options.data[$1];
                    node.textContent = textContent.replace(reg, this.options.data[$1])

                    this.addEventListener($1, e => {
                        // console.log('set', e.detail);
                        let newValue = e.detail;
                        let oldValue = this.options.data[$1];
                        let reg = new RegExp(oldValue,'g');
                        node.textContent = node.textContent.replace(reg, newValue);
                    })
                }
            }
        });
    }
}