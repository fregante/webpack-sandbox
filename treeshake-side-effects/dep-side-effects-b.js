const sideEffectB1 = new Map();
fetch('sideEffectB2');
document.body.scrollHeight; // Triggers CSS layout
const sideEffectB3 = ['just', 'an', 'array'];

export function logSideB() {
	console.log(console);
}
