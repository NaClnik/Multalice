import * as mns from '../../mutation-types';
import main from '../../../main';

export default {
    // Connection open
    [mns.SOCKET_ONOPEN](state, event) {
        main.config.globalProperties.$socket = event.currentTarget;
        state.socket.isConnected = true;
    },
    // Connection closed
    [mns.SOCKET_ONCLOSE](state, event) {
        state.socket.isConnected = false;
        console.log("The line is disconnected: " + new Date());
        console.log(event);
    },
    // An error occurred
    [mns.SOCKET_ONERROR](state, event) {
        console.log(state, event);
    },
    // Receive the message sent by the server
    [mns.SOCKET_ONMESSAGE](state, message) {
        state.socket.message = message;
    },
    // Auto reconnect
    [mns.SOCKET_RECONNECT](state, count) {
        console.log("Socket reconnect", state, count);
    },
    // Reconnect error
    [mns.SOCKET_RECONNECT_ERROR](state) {
        state.socket.reconnectError = true;
    }
}