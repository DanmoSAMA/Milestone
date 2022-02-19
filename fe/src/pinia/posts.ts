import { defineStore } from 'pinia';

export const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: [
        {
          title: '技术文章',
          content: 
`# 大标题 Test

## 小标题
在类型系统中实现 JS 中的\`Array.includes\`函数. \`Includes\`类接受两个泛型参数, 返回值应为\`true\`或者\`false\`

\`\`\`ts
import { Equal } from '@type-challenges/utils'
type Includes<T extends readonly any[], U> =
  T extends [infer F, ...infer V] ?
  Equal<U, F> extends true
  ? true : Includes<V, U>
  : false
\`\`\`

**虽然不怎么想依赖equal函数，但是github上的很多答案都用了，我就妥协了**

看看equal函数的实现：

\`\`\`ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false;
\`\`\`

因此，如果equal要返回true，就需要满足：

- T extends T
  * xxx
- X 和 Y 是同类型
- 1 extends 1，2 extends 2

显然第一条和第三条满足，所以只需要X和Y同类型即可，而equal函数的作用就是判断同类型，只要同类型就返回true

> 显然第一条和第三条满足，所以只需要X和Y同类型即可，而equal函数的作用就是判断同类型，只要同类型就返回true显然第一条和第三条满足，所以只需要X和Y同类型即可，而equal函数的作用就是判断同类型，只要同类型就返回true显然第一条和第三条满足，所以只需要X和Y同类型即可，而equal函数的作用就是判断同类型，只要同类型就返回true显然第一条和第三条满足，所以只需要X和Y同类型即可，而equal函数的作用就是判断同类型，只要同类型就返回true
`,
          id: 0,
        },
      ],
    };
  },
});
