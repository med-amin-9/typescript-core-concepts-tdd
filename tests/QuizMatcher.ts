/**
 * Bitte ändern Sie diese Datei nicht bzw. ignorieren Sie sie.
 */

expect.extend({
    answer(received: any, expected: any) {
        if (expected==='?') {
            return { pass: false, message: () => `Noch nicht beantwortet` };
        } else if (expected==='hilfe') {
            return { pass: false, message: () => `Es wird ${typeof received == "string" ? '"' + received + '"' : received} zurückgegeben.` };
        } else if (Object.is(expected, received)) {
            return { pass: true, message: () => `${typeof received == "string" ? '"' + received + '"' : received} ist richtig.` };
        }
        return { pass: false, message: () => `${typeof expected == "string" ? '"' + expected + '"' : expected} ist falsch. Gebe "hilfe" ein um die tatsächliche Ausgabe zu sehen.` };
    }
});

declare global {
    namespace jest {
        interface Matchers<R> {
            answer(expected: any): CustomMatcherResult;
        }
    }
}

export { }