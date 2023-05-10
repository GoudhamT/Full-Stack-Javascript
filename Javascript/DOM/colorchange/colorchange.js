// let clk_btn = document.querySelector('#button')

// clk_btn.addEventListener('click',btn_clk)

function btn_clk()
{
    document.body.style.backgroundColor = gethex()
    // console.log('clicked')
}

function gethex()
{
    const hexip = '0123456789ABCDEF'
    let hexval = '#'
    for(i=0;i<6;i++){
        hexval = hexval + hexip[Math.floor(Math.random()*16)]
    }
    return hexval
}