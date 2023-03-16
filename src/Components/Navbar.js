function Navbar(){
    let navDivStyle={
        width:"100%",
        height:"15vh",
        background:"#f0f0eb",
        display:"flex",
        justifyContent:"space-around"
    }
    return (
        <div style={navDivStyle}>
            <h1 style={{color:"#bdbdbd"}}>LOGO</h1>
            <div style={{display:"flex",justifyContent:"space-evenly",width:"50%",alignItems:"center"}}>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Contacts</h2>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",width:"12%",alignItems:"center",color:"#bdbdbd"}}>
            <i class="fa-brands fa-facebook-f fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
        </div>
    )
}

export default Navbar