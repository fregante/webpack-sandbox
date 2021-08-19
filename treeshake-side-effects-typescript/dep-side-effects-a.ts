const sideEffectA1 = new Map();
fetch('sideEffectA2');
document.body.scrollHeight; // Triggers CSS layout
const sideEffectA3 = ['just', 'an', 'array'];

export function logSideA() {
	console.log(console);
}
