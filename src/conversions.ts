export class Conversions {
    static toNumber(x: any): number {
        if (x === null) return 0;
        if (x === undefined || isNaN(Number(x))) return NaN;
        return Number(x);
    }

    static toBoolean(x: any): boolean {
        return Boolean(x);
    }

    static toString(x: any): string {
        if (x === null) return "null";
        if (x === undefined) return "undefined";
        return String(x);
    }
}