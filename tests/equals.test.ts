describe("Equality Operators", () => {
    // Loose Equality (==)
    test("Loose equality (==) with '42' and 42", () => {
        //@ts-ignore
        expect("42" == 42).toBe(true); // Type conversion occurs
    });

    test("Loose equality (==) with true and 1", () => {
        //@ts-ignore
        expect(true == 1).toBe(true); // true is converted to 1
    });

    test("Loose equality (==) with null and undefined", () => {
        expect(null == undefined).toBe(true); // null and undefined are loosely equal
    });

    test("Loose equality (==) with NaN and NaN", () => {
        //@ts-ignore
        expect(NaN == NaN).toBe(false); // NaN is not equal to itself in loose equality
    });

    // Strict Equality (===)
    test("Strict equality (===) with '42' and 42", () => {
        //@ts-ignore
        expect("42" === 42).toBe(false); // Different types, no conversion
    });

    test("Strict equality (===) with true and 1", () => {
        //@ts-ignore
        expect(true === 1).toBe(false); // Different types, strict comparison
    });

    test("Strict equality (===) with null and undefined", () => {
        expect(null === undefined).toBe(false); // Different types
    });

    test("Strict equality (===) with NaN and NaN", () => {
        //@ts-ignore
        expect(NaN === NaN).toBe(false); // NaN is not equal to itself !!1
    });

    // Object.is
    test("Object.is with NaN and NaN", () => {
        expect(Object.is(NaN, NaN)).toBe(true); // Object.is considers NaN equal to NaN !!!!
    });

    test("Object.is with +0 and -0", () => {
        expect(Object.is(+0, -0)).toBe(false); // Differentiates between +0 and -0
    });

    test("Object.is with null and null", () => {
        expect(Object.is(null, null)).toBe(true); // Identical values
    });

    test("Object.is with true and true", () => {
        expect(Object.is(true, true)).toBe(true); // Identical boolean values
    });
});

describe("Jest Matchers", () => {
    // toBe Matcher (strict equality)
    test("toBe with primitive values", () => {
        expect(42).toBe(42); // Uses strict equality (===)
    });

    test("toBe with strings", () => {
        expect("Hello").toBe("Hello"); // Exact string match
    });

    test("toBe with boolean values", () => {
        expect(true).toBe(true); // Exact boolean match
    });

    // toEqual Matcher (recursive comparison)
    test("toEqual with identical objects", () => {
        expect({ name: "Alice" }).toEqual({ name: "Alice" }); // Compares properties recursively
    });

    test("toEqual with identical arrays", () => {
        expect([1, 2, 3]).toEqual([1, 2, 3]); // Compares array elements recursively
    });

    test("toEqual with nested objects", () => {
        expect({ person: { name: "Alice", age: 30 } }).toEqual({ person: { name: "Alice", age: 30 } });
    });

    // toStrictEqual Matcher (strict recursive comparison)
    test("toStrictEqual with identical arrays", () => {
        expect([1, undefined, 3]).toStrictEqual([1, undefined, 3]); // Checks structure strictly
    });

    test("toEqual vs. toStrictEqual with undefined properties", () => {
        const a = { name: "Alice" };
        const b = { name: "Alice", age: undefined };

        expect(a).toEqual(b); // Passes because undefined properties are ignored
        expect(a).not.toStrictEqual(b); // Fails because `age` is not present in `a`
    });

    test("toStrictEqual with objects with identical structures", () => {
        expect({ id: 1, active: true }).toStrictEqual({ id: 1, active: true });
    });
});