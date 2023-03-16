function MidDiv(){
    let midDivStyle={
        width:"100%",
        height:"60vh",
        
        display:"flex"
    }
    return (
        <div style={midDivStyle}>
            <div style={{width:"40%",height:"100%"}}>
                <div>
                <h2>Header</h2>
                <h2>Footer</h2>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, consequuntur? 
                adipis  adipisicing 
                </p>
                </div>
                <div style={{display:"flex",marginTop:"100px",justifyContent:"center"}}>
                <div style={{width:"30px",height:"30px",background:"#b3860b",borderRadius:"50%",marginTop:"20px"}}></div>
                <div style={{width:"40px",height:"40px",background:"#9e092c",borderRadius:"50%"}}></div>
                <div style={{width:"40px",height:"40px",background:"#0b5a96",borderRadius:"50%",marginTop:"20px"}}></div>
                </div>
                
                
            </div>
            <div style={{width:"60%",height:"100%"}}>
                <img style={{marginTop:"10px"}} src="https://media.istockphoto.com/id/543562666/photo/happy-little-girl-with-big-sunglasses-looking-at-the-sun.jpg?s=170667a&w=0&k=20&c=bvawI-EptS_4Nq7FL2_gGrcwrmf4s0kD-hglhwp6FLA="></img>
            </div>
        </div>
    )
}

export default MidDiv