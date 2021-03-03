class InvalidValueError extends Error { 
    constructor(value){
        super(`Ungültiger Wert: ${value}`);
        this._value = value;
    }

    get value(){
        return this._value;
    }
    set value(value){
        this._value = value;
    }
}