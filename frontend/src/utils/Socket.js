import API from './API';
import io from 'socket.io-client';

const connect = ()=>{
    return io(API);
}

export default connect;