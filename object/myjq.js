class Jq {
    constructor(arg,root) {
        if(typeof root == 'undefined') {
            this.prevObject = new Jq(document, null);
        }
        if(root) {
            this.prevObject = root;
        }
        

        if(typeof arg == "string") {
            let el = document.querySelectorAll(arg);
            this.addEvent(el);
        } else if(typeof arg == "function") {
            window.addEventListener("DOMContentLoaded", arg);
        } else {
            // native node 
            if(typeof arg.length == "undefined") {
                this[0] = arg;
                this.length = 1;
            } else {
                this.addEvent(arg);
            }

        }
    }

    addEvent(el) {
        el.forEach((v,k) =>{
            this[k] = v;
        })
        this.length = el.length;
    }
    
    eq(index) {
        return new Jq(this[index], this);
    }

    end() {
        return this.prevObject;
    }

    css(...arg) {
        if(arg.length >1) {
            // array
            for(let i=0; i< this.length;i++) {
                this.setStyle(this[i], arg[0], arg[1]);
            }
        } else {
            if(typeof arg[0] == "string") {
                // string
                return this.getStyle(this[0], arg[0]);
            } else {
                // obj
                for(let i=0; i< this.length;i++) {
                    for(let j in arg[0]) {
                        this.setStyle(this[i], j, arg[0][j]);
                    }   
                }
            }
        }
    }

    getStyle(el, styleName) {
        return window.getComputedStyle(el, null)[styleName];
    }

    setStyle(el, styleName, styleValue) {
        if(typeof styleValue == 'number' && !(styleName in $.cssNumber)) {
            styleValue += 'px';
        }

        el.style[styleName] = styleValue;
    }

    click(fn) {
        for(let i=0;i<this.length;i++) {
            this[i].addEventListener('click',fn);
        }
    }
    
    on(eventName,fn) {
        let reg = /\s+/g
        eventName = eventName.replace(reg, ' ');
        let evertArr = eventName.split(' ');
        for(let i=0; i< eventName.length;i++) {
            for(let j=0;j<this.length;j++) {
                this[j].addEventListener(evertArr[i], fn);
            }
        }
    }
}

function $ (arg) {
    return new Jq(arg);
}

$.cssNumber = {
    animationIterationCount: true,
    columnCount: true,
    fillOpacity: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    pm: true,
    widows: true,
    zIndex: true,
    zoom: true
}