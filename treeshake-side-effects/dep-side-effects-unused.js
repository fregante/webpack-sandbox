const sideEffectUnused1 = new Map();
fetch('sideEffectUnused2');
document.body.scrollHeight; // Triggers CSS layout
const sideEffectUnused3 = ['just', 'an', 'array'];

export function logSideUnused() {
	console.log(console);
}
