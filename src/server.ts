import * as net from 'net';
import { decrypt } from './utils';
let otpList = [];

const server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        let str = data.toString('utf-8');

        if(str.startsWith('makeotp ')) {
            let otp = str.replace('makeotp', '')
            otpList.push(otp.trim());
            console.log('OTP 추가됨\n');
            console.log(otpList);
        }
        if(str.startsWith('checkotp ')) {
            let otp = str.replace('checkotp ', '');
            console.log('복호화 진행: ' + decrypt(otp));
            if(otpList.includes(decrypt(otp))) {
                console.log('OTP 인증 성공! 리스트에서 제거합니다\n현재 OTP 리스트');
                otpList.splice(otpList.indexOf(otp), 1);
                console.log(otpList);
            }
            else {
                console.log('OTP 인증 실패\n현재 OTP 리스트\n');
                console.log(otpList);
            }
        }
        if(str == 'show') 
            console.log(otpList);
    })
})

server.listen(8080, () => {
    console.log('server is running...')
})