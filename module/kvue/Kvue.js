import Compile from './compile.js';

class Kvue {
    constructor(options) {
        this.options = options;
        this.compile = new Compile(options);
        this.observe(this.options.data);
    }

    observe(data) {
        let _this = this;
        this.options.data = new Proxy(data, {
            get(target, key) {
                console.log('get...');
                return target[key];
            },
            set(target, key, value) {
                console.log('set...');
                let event = new CustomEvent(key, {
                    detail: value
                });
                _this.compile.dispatchEvent(event);
                target[key] = value;
                return true;
            }
        })
    }
}

export default Kvue;