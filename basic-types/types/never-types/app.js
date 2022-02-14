"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Ronaldo';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Internal server error', 500);
//# sourceMappingURL=app.js.map