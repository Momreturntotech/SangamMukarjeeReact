function ConditionalRender(){
    const flag=false;

    function SubConditionalRender(){
        return(
            flag?<h3>This is SubConditionalRender</h3>:<h3>This is Flag is Flase</h3>
        )
    }

    return (
        <>
        <h1>This is Conditional Rendering Components</h1>
        <SubConditionalRender/>
        </>
       
    )
}
export default ConditionalRender;