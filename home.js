// test code

const divs =
	document.querySelectorAll(
		'div'
	)
for (let div of divs) {
	div.style.backgroundColor =
		'green'
}

console.log(
	'Script test outer file'
)
