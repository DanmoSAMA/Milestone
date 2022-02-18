import { defineStore } from 'pinia';

export const usePosts = defineStore('posts', {
  state: () => {
    return {
      posts: [
        {
          title: '荷塘月色',
          content: `这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了；妻在屋里拍着闰儿⑴，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。
          沿着荷塘，是一条曲折的小煤屑路。这是一条幽僻的路；白天也少人走，夜晚更加寂寞。荷塘四面，长着许多树，蓊蓊郁郁⑵的。路的一旁，是些杨柳，和一些不知道名字的树。没有月光的晚上，这路上阴森森的，有些怕人。今晚却很好，虽然月光也还是淡淡的。`,
          id: 0,
        },
        {
          title: '背影',
          content: `我与父亲不相见已二年余了，我最不能忘记的是他的背影。
          那年冬天，祖母死了，父亲的差使1也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧2回家。到徐州见着父亲，看见满院狼藉3的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：“事已如此，不必难过，好在天无绝人之路！”`,
          id: 1,
        },
        {
          title: '济南的冬天',
          content: `最妙的是下点小雪呀。看吧，山上的矮松越发的青黑，树尖上顶着一髻儿白花，好像日本看护妇。山尖全白了，给蓝天镶上一道银边。山坡上，有的地方雪厚点，有的地方草色还露着，这样，一道儿白，一道儿暗黄，给山们穿上一件带水纹的花衣；看着看着，这件花衣好像被风儿吹动，叫你希望看见一点更美的山的肌肤。等到快日落的时候，微黄的阳光斜射在山腰上，那点薄雪好像忽然害了羞，微微露出点粉色。就是下小雪吧，济南是受不住大雪的，那些小山太秀气！`,
          id: 2,
        },
        {
          title: '技术文章',
          content: 
`# title
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
- X 和 Y 是同类型
- 1 extends 1，2 extends 2

显然第一条和第三条满足，所以只需要X和Y同类型即可，而equal函数的作用就是判断同类型，只要同类型就返回true

> aaa
> aaa
> a
> aaa
`,
          id: 3,
        },
      ],
    };
  },
});
