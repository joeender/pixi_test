// export default function myFunction(p1, p2) {
//     return p1 * p2; // The function returns the product of p1 and p2
// }

export namespace MyClass {
    export class Rec {
        Default: any = {Read: ['blah']};
        height: number;
        width: number;
        constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
        }
          // Getter
        get area(): number {
            return this.calcArea();
        }
          // Method
        calcArea() {
            return this.height * this.width;
        }

        print() {
            alert(this.area);
        }
    }
}


