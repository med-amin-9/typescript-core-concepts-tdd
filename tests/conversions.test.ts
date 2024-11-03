import { Conversions } from "../src/conversions";

// Test für die Umwandlung in Number
describe("Conversions to Number", () => {
    test("convert string '42' to number", () => {
        expect(Conversions.toNumber("42")).toBe(42);
    });

    test("convert string 'hello' to NaN", () => {
        expect(Conversions.toNumber("hello")).toBeNaN();
    });

    test("convert boolean true to 1", () => {
        expect(Conversions.toNumber(true)).toBe(1);
    });

    test("convert boolean false to 0", () => {
        expect(Conversions.toNumber(false)).toBe(0);
    });

    test("convert undefined to NaN", () => {
        expect(Conversions.toNumber(undefined)).toBeNaN();
    });

    test("convert null to 0", () => {
        expect(Conversions.toNumber(null)).toBe(0);
    });
});

// Test für die Umwandlung in String
describe("Conversions to String", () => {
    test("convert number 42 to string '42'", () => {
        expect(Conversions.toString(42)).toBe("42");
    });

    test("convert boolean true to string 'true'", () => {
        expect(Conversions.toString(true)).toBe("true");
    });

    test("convert boolean false to string 'false'", () => {
        expect(Conversions.toString(false)).toBe("false");
    });

    test("convert null to string 'null'", () => {
        expect(Conversions.toString(null)).toBe("null");
    });

    test("convert undefined to string 'undefined'", () => {
        expect(Conversions.toString(undefined)).toBe("undefined");
    });
});

// Test für die Umwandlung in Boolean
describe("Conversions to Boolean", () => {
    test("convert non-zero number to true", () => {
        expect(Conversions.toBoolean(42)).toBe(true);
    });

    test("convert zero to false", () => {
        expect(Conversions.toBoolean(0)).toBe(false);
    });

    test("convert empty string to false", () => {
        expect(Conversions.toBoolean("")).toBe(false);
    });

    test("convert non-empty string to true", () => {
        expect(Conversions.toBoolean("hello")).toBe(true);
    });

    test("convert null to false", () => {
        expect(Conversions.toBoolean(null)).toBe(false);
    });

    test("convert undefined to false", () => {
        expect(Conversions.toBoolean(undefined)).toBe(false);
    });
});
