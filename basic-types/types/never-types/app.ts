let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Ronaldo';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('Internal server error', 500);

export {};
