//  append
//<opening> [existing content] [adds content here]</opening>

// changing the innerHTML property
// element.innerHTML = " string representing html "
// <opening></opening>

// changing the innerText Property
// element.innerTEXT = " string representing html "
// <opening> if you have <p></p> it gets rendered as text instead of as a p tag</opening>

// directly change an attribute of a element in js
// example
// img.src = "some other url"
// element.classList.add("card")

const $form = document.querySelector("#instrument-form");

$form.addEventListener("submit", (event) => {
	event.preventDefault();
	// do stuff
	const formData = new FormData($form);
	console.log(formData.get("instrument"), formData.get("student-name"));
	$form.reset();
});
