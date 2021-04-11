import * as mns from '../../mutation-types';
import main from '../../../main';
import {WebSocketDataBundle} from "@/core/models/web-socket-data-bundle";
import {WebSocketControllerLoader} from "@/core/bootstrap/web-socket-controller-loader";

export default {
    // Connection open
    [mns.SOCKET_ONOPEN](state, event) {
        main.config.globalProperties.$socket = event.currentTarget;
        state.socket.isConnected = true;
        console.log('SOCKET_ONOPEN');
    },
    // Connection closed
    // eslint-disable-next-line no-unused-vars
    [mns.SOCKET_ONCLOSE](state, event) {
        state.socket.isConnected = false;
        // console.log("The line is disconnected: " + new Date());
        // console.log(event);
        console.log('SOCKET_ONCLOSE');
    },
    // An error occurred
    // eslint-disable-next-line no-unused-vars
    [mns.SOCKET_ONERROR](state, event) {
        //console.log(state, event);
        console.log('SOCKET_ONERROR');
    },
    // Receive the message sent by the server
    [mns.SOCKET_ONMESSAGE](state, message) {
        state.socket.message = message;

        // Создаём экземпляр бандла вебсокета.
        let webSocketDataBundle = new WebSocketDataBundle(
            main.config.globalProperties.$socket,
            message
        ) // new.

        // Создаём экземпляр загрузчика вебсокет контроллера.
        let webSocketControllerLoader = new WebSocketControllerLoader(webSocketDataBundle);

        // Запускаем лоадер.
        webSocketControllerLoader.run();
    },
    // Auto reconnect
    // eslint-disable-next-line no-unused-vars
    [mns.SOCKET_RECONNECT](state, count) {
        //console.log("Socket reconnect", state, count);
        console.log('SOCKET_RECONNECT');
    },
    // Reconnect error
    [mns.SOCKET_RECONNECT_ERROR](state) {
        state.socket.reconnectError = true;
        console.log('SOCKET_RECONNECT_ERROR');
    }
}