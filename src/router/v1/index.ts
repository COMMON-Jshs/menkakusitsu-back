import { RouterBase } from "../RouterBase";

class V1 extends RouterBase {
    a: number = 0;

    constructor() {
        super();
        this.setPath("/v1");
    }
}

export default V1;
