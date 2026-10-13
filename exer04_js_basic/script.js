function callTenTimes(callback) {
    for (let i = 0; i < 10; i++) {
        callback();
    }
}
callTenTimes(function () {
    alert('함수 호출');
});