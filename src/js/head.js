import Warrior from "./warrior";

class Head extends Warrior{
    constructor(options){
        options.height = Head.height;
    }
}

module.exports = Head;