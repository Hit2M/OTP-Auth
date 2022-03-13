import * as net  from "net";
import { encrypt, decrypt } from "./utils";
import { checkOTP, requestOTP, showList } from "./otp";

const socket = net.connect(8080, '127.0.0.1', function() {
    console.log('this is client.');
})

process.stdin.resume();

process.stdin.on('data', function (chunk) {
    let data = chunk.toString('utf-8').trim();
    if(data.startsWith('make ')) {
        let otp = data.replace('make ', '');
        console.log('OTP를 추가합니다 ' + decrypt(encrypt(otp)));
        requestOTP(otp);
    }
    if(data.startsWith('check ')) {
        let otp = data.replace('check ', '');
        checkOTP(otp);
    }
    if(data == 'list') {
        showList();
    }

    socket.write(data);
})