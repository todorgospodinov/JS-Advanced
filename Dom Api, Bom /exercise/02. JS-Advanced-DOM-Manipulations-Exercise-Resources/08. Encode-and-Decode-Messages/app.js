function encodeAndDecodeMessages() {
    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    let textAreaEncode = document.getElementsByTagName('textarea')[0];
    let textAreaDecode = document.getElementsByTagName('textarea')[1];

    encodeButton.addEventListener('click', function () {
        let input = textAreaEncode.value;
        let encodedMessage = '';

        for (let char = 0; char < input.length; char++) {
            encodedMessage +=  String.fromCharCode(input.charCodeAt(char) + 1);
        }
        textAreaDecode.value = encodedMessage;
        textAreaEncode.value = '';
    });


    decodeButton.addEventListener('click', function () {
        let input = textAreaDecode.value;
        let encodedMessage = '';

        for (let char = 0; char < input.length; char++) {
            encodedMessage +=  String.fromCharCode(input.charCodeAt(char) - 1);
        }
        textAreaDecode.value = encodedMessage;
    });
}