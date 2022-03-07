


function BoxColor(props) {
    const styleDiv1 = {
        backgroundColor: "rgb("+props.r+","+props.g+","+props.b+")",
        color: 'white'
    }

    const styleDiv2 = {
        backgroundColor: "rgb("+props.r+","+props.g+","+props.b+")",
        color: 'black'
    }

    const rConvert = props.r.toString(16).length === 1 ? '0'+props.r.toString(16):props.r.toString(16);
    const gConvert = props.g.toString(16).length === 1 ? '0'+props.g.toString(16):props.g.toString(16);
    const bConvert = props.b.toString(16).length === 1 ? '0'+props.b.toString(16):props.b.toString(16);


    if (props.g < 1 ) {
       return <div className="box-color-template" style={styleDiv1}>
                rgb({props.r},{props.g},{props.b})
                <br/>
                #{rConvert}{gConvert}{bConvert}
              </div>
    } else {
        return <div className="box-color-template" style={styleDiv2}>
                rgb({props.r},{props.g},{props.b})
                <br/>
                #{rConvert}{gConvert}{bConvert}
               </div>
    }
}

export default BoxColor;
