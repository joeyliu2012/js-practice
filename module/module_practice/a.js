let name = 'tom';
let age = 20;

// export default {name,age};  // 只能使用一次
export { name as default};

export let sex = 'M';            //  export 可以导出多次  import时需使用{} 且名字必须一致
export let weight = '165lbs'     //  只有写上export 才对外可见
export let height = '175cm';

console.log('module a');
export function test() {
    console.log('test...')
}
