const { sum, myFunction, fetchData, fetchPromise } = require("./sum");

// test("description", testFunction)
test("tests adding two integers numbers e.g : 1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
});

test("one is truthy", () => {
    const n = 1;
    expect(n).toBeTruthy();
});

test("throws on invalid input", () => {
    expect(() => {
        myFunction("invalidInput");
    }).toThrow();
});

// async tests
test("the data is peanut butter", done => {
    function callback(data) {
        try {
            expect(data).toBe("peanut butter");
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

test("the data is peanut butter -- resolve", () => {
    return expect(fetchPromise()).resolves.toBe("peanut butter");
});

// test("the fetch fails with an error -- reject", () => { return expect(fetchPromise()).rejects.toThrow("error"); });

test("the data is peanut butter -- await", async () => {
    const data = await fetchPromise();
    expect(data).toBe("peanut butter");
});

// There are different types of matcher
// toBe() : used for primitives values like numbers, booleans and numbers
// toEqual() : used to commpare complex types like objects and arrays
// toBeFalsy : tests if a value is false, zero, blank or undefined
// toBeTruthy : does the opposite
// toThrow() : when you expect a function to throw an error
/*
test mockups with jest

const mockCallback = jest.fn(x => 42 + x)
mockCallback(0) //output 42
*/

test("mock implementation of a basic function", () => {
    const mock = jest.fn(x => 7 + x);
    expect(mock(1)).toBe(8);
    expect(mock).toHaveBeenCalledWith(1);
});

test("spying on a method of an object", () => {
    const video = {
        play() {
            return true;
        }
    };
    // to test if play has been called
    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    // used to restore the original implementation of the function
    spy.mockRestore();
});