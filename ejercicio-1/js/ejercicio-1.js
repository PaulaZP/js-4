const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillrect(75, 75, 150, 150);

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
ctx.fill();