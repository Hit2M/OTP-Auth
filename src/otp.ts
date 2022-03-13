import * as net from 'net';
import { decrypt, encrypt } from './utils';

const socket = net.connect(8080, '127.0.0.1', function() {
})

export function requestOTP(number: string) {

    socket.write('makeotp ' + number);

    console.log('Request Make Otp for Server: ' + number + '\n');
} 

export function checkOTP(otpnumber: string) {
    socket.write('checkotp ' + encrypt(otpnumber));
}

export function showList() {
    socket.write('show');
}
