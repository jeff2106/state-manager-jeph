class StateManager {
    constructor(initialState) {
        this.state = new Proxy(initialState, {
            get: (target, prop) => {
                return prop in target ? target[prop] : undefined;
            },
            set: (target, prop, value) => {
                target[prop] = value;
                return true;
            },
        });
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        Object.keys(newState).forEach((key) => {
            this.state[key] = newState[key];
        });
    }

    getProperty(prop) {
        return this.state[prop];
    }

    setProperty(prop, value) {
        this.state[prop] = value;
    }

    allKeysHaveValues(ignoreKeys = []) {
        return this.checkValues(this.state, ignoreKeys);
    }

    checkValues(obj, ignoreKeys) {
        return Object.keys(obj).every((key) => {
            if (ignoreKeys.includes(key)) {
                return true;
            }
            const value = obj[key];
            if (value !== undefined && value !== null && value !== '') {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    return this.checkValues(value, ignoreKeys);
                }
                return true;
            }
            return false;
        });
    }
}

module.exports = StateManager;
