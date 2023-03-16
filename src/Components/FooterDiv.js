function FooterDiv(){
    let footerDivStyle={
        width:"100%",
        height:"25vh",
        color:"white",
        background:"black",
        display:"flex",
        justifyContent:"space-around"
       
    }
    return (
        <div style={footerDivStyle}>
                <div style={{height:"100%",width:"30%",textAlign:"left"}}>
                    <h4>Block Header</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, consequuntur? 
                adipis  adipisicing</p>
                </div>
                <div style={{height:"100%",width:"30%",textAlign:"left"}}>
                    <h4>Block Header</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, consequuntur? 
                adipis  adipisicing</p>
                </div>
                <div style={{height:"100%",width:"30%",textAlign:"left"}}>
                    <h4>Block Header</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, consequuntur? 
                adipis  adipisicing</p>
                </div>
        </div>
    )
}

export default FooterDiv