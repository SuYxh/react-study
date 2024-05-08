import { isEven } from '@xhtest/monorepo-pkg-a';
import { add } from '@xhtest/monorepo-pkg-c';


export const isOdd = (x: number) => !isEven(x);

console.log(isEven(5));
console.log(add(1,2));
