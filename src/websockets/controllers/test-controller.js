import {WebSocketController} from "@/core/base/web-socket-controller";

export class TestController extends WebSocketController{
    // eslint-disable-next-line no-unused-vars
    index(id){
        console.log('called from index ', id);
    } // index.
} // TestController.