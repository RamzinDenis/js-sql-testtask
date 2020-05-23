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
	const phoneInput = phoneInputWrapper.querySelector(".phone");
	const submitBtn = createSubmitBtn(nameInput, phoneInput, commentInput);

	form.append(nameInput, phoneInputWrapper, commentInput, submitBtn);

	document.body.append(form);
};

const createInput = (name, placeholder) => {
	const input = document.createElement("input");
	input.name = name;
	input.className = name;
	input.placeholder = placeholder;
	return input;
};

const createSubmitBtn = (nameInput, phoneInput, commentInput) => {
	const button = document.createElement("button");
	button.textContent = "submit";
	button.addEventListener("click", e => {
		e.preventDefault();
		const person = new Person(
			nameInput.value,
			commentInput.value,
			phoneInput.value
		);
		if (!nameInput.value || !phoneInput.value || !commentInput.value)
			return alert("Пожалуйста, заполните все формы");
		person.send();
	});
	return button;
};

const createAddPhoneBtn = commentInput => {
	const btn = document.createElement("button");
	btn.textContent = "+";
	btn.className = "form__btn";
	btn.addEventListener("click", event =>
		handleAddExtraPhoneClick.call(btn, event, commentInput)
	);
	return btn;
};

function handleAddExtraPhoneClick(event, commentInput) {
	event.preventDefault();
	if (document.querySelectorAll(".extra-phone").length > 1) return;
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

class Person {
	constructor(name, comment, phone) {
		this.name = name;
		this.comment = comment;
		this.phone = phone;
	}
	send = () => {
		alert(`Имя : ${this.name}, комментарий : ${this.comment}, телефон : ${this.phone}. 
        Данные успешно отправлены!`);
	};
}
