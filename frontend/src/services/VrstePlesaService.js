

async function get(){
    return await HttpService.get('/VrstePlesa')
    .then((odgovor)=>{
        console.table(odgovor.data)
    })
    .catch((e)=>{})
}

export default {
    get
}