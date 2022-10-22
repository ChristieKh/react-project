import { classNames } from "shared/lib/classNames/classNames";


describe("classNames", () => {
	test("with only first param", () => {
		expect(classNames("someClasses")).toBe("someClasses");
	});

	test("with additional class", () => {
		const expected = "someClasses class1 class2";
		expect(classNames("someClasses", {}, ["class1", "class2"])).toBe(expected);
	});

	test("with mods", () => {
		const expected = "someClasses class1 class2 hovered scrollable";
		expect(classNames(
			"someClasses",
			{ hovered: true, scrollable: true },
			["class1", "class2"]))
			.toBe(expected);
	});

	test("with mode false", () => {
		const expected = "someClasses class1 class2 hovered";
		expect(classNames(
			"someClasses",
			{ hovered: true, scrollable: false },
			["class1", "class2"]))
			.toBe(expected);
	});

	test("with mode undefined", () => {
		const expected = "someClasses class1 class2 scrollable";
		expect(classNames(
			"someClasses",
			{ hovered: undefined, scrollable: true },
			["class1", "class2"]))
			.toBe(expected);
	});
});
