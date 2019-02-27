function solve() {
	let createTitleElement = document.getElementById("createTitle").value;
	let createContentElement = document.getElementById("createContent").value;

	if (createTitleElement && createContentElement) {

		let titleNode = document.createElement("h3");
		let contentNode = document.createElement("P");
		let articleNode = document.createElement("article");

		let titleTextNode = document.createTextNode(createTitleElement);
		let contentTextNode = document.createTextNode(createContentElement);

	

		titleNode.appendChild(titleTextNode);
		contentNode.appendChild(contentTextNode);

		articleNode.appendChild(titleNode);
		articleNode.appendChild(contentTextNode);

		document.getElementById("articles").appendChild(articleNode);
		// document.getElementById("articles").appendChild(contentNode);
	}

	document.getElementById("createTitle").value="";
	document.getElementById("createContent").value="";
}