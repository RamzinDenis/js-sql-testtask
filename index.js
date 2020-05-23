const arrSort = (arr, sortType) => {
	if (sortType !== "ascend" && sortType !== "descend")
		throw new Error("Choose the correct sorting form - 'ascend' or 'descend'");
	else if (sortType === "ascend") return arr.sort((a, b) => a - b);
	else return arr.sort((a, b) => b - a);
};

const testedArr = [3, 4, 1, 2, 6, 9];

arrSort(testedArr, "descend");

console.log(testedArr);

const makeRussianFedaritionFlag = () => {
	const flag = document.createElement("div");
	flag.className = "flag";
	flag.append(createFlagParts("header"));
	flag.append(createFlagParts("body"));
	flag.append(createFlagParts("footer"));
	document.body.append(flag);
};

const createFlagParts = className => {
	const flagPart = document.createElement("div");
	flagPart.className = className;

	for (let i = 0; i < 20; i++) {
		const flagRow = document.createElement("div");
		for (let i = 0; i < 80; i++) {
			const O = document.createTextNode("O");
			flagRow.append(O);
		}
		flagPart.append(flagRow);
	}

	return flagPart;
};

makeRussianFedaritionFlag();

const createForm = () => {
	const form = document.createElement("form");
	form.classList.add("form");

	const nameInput = createInput("name", "ФИО");
	const commentInput = createInput("comments", "Комментарий");
	const phoneInputWrapper = createPhoneFieldWrapper(
		true,
		commentInput,
		"phone",
		"Телефон"
	);
	form.append(nameInput, phoneInputWrapper, commentInput);

	document.body.append(form);
};

const createInput = (name, placeholder) => {
	const input = document.createElement("input");
	input.name = name;
	input.className = name;
	input.placeholder = placeholder;
	return input;
};

const createAddPhoneBtn = commentInput => {
	const btn = document.createElement("button");
	btn.textContent = "+";
	btn.className = "form__btn";
	btn.addEventListener("click", event =>
		handleFormButtonClick.call(btn, event, commentInput)
	);
	return btn;
};

function handleFormButtonClick(event, commentInput) {
	event.preventDefault();
	if (document.querySelectorAll(".extra-phone"))
		commentInput.before(
			createPhoneFieldWrapper(true, commentInput, "extra-phone", "Телефон N")
		);
	this.remove();
}

const createPhoneFieldWrapper = (
	isAddButton,
	commentInput,
	name,
	placeholder
) => {
	const wrapper = document.createElement("div");
	wrapper.className = "phone__wrapper";

	const phoneInput = createInput(name, placeholder);

	wrapper.append(phoneInput);
	isAddButton && wrapper.append(createAddPhoneBtn(commentInput));
	return wrapper;
};

createForm();
