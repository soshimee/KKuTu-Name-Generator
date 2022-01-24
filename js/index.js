const $ = document.querySelector.bind(document);
let length = 16;
let amount = 1;

$(".length").oninput = () => {
	length = parseInt($(".length").value);
};

$(".amount").oninput = () => {
	amount = parseInt($(".amount").value);
};

$(".generate").onclick = () => {
	$(".output").innerText = "";
	for (let i = 0; i < amount; i++) {
		const elem = document.createElement("p");
		elem.innerText = new RandExp(`[ A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ]{${length}}`).gen();
		$(".output").appendChild(elem);
	}
};