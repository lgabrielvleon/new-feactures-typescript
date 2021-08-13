
const NullishProperties = () =>{
    const foo = null ?? 'HelloWorld'; // 'HelloWorld'
    console.info(foo);
    const bar = '' ?? 'HelloWorld'; // Nothing to display
    console.info(bar);
}

export default NullishProperties;
