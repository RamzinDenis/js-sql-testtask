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
			const span = document.createElement("span");
			span.textContent = "O";
			flagRow.append(span);
		}
		flagPart.append(flagRow);
	}

	return flagPart;
};

makeRussianFedaritionFlag();
