import { HttpService } from "./HttpService"


async function get(){

    try {
        const odgovor = await HttpService.get('/VrstePlesa');
        console.log('API odgovor:', odgovor); // Debug
        return odgovor; // axios vraća { data: [...], status: 200, ... }
    } catch (error) {
        console.error('Greška u dohvatu plesova:', error);
        return { data: [] }; // vraćamo prazan niz kako bi izbjegli undefined error
    }
}

async function getBySifra(sifra){

    try {
        const odgovor = await HttpService.get('/VrstePlesa/'+sifra);
        console.log('API odgovor:', odgovor); // Debug
        return odgovor; // axios vraća { data: [...], status: 200, ... }
    } catch (error) {
        console.error('Greška u dohvatu plesova:', error);
        return { data: [] }; // vraćamo prazan niz kako bi izbjegli undefined error
    }
}

async function dodaj(ples){
    return HttpService.post('/VrstePlesa',ples)
    .then(()=>{return {greska:false, poruka:'Dodano'}})
    .catch(()=>{return {greska:true, poruka: 'Problem kod dodavanja'}})
}

export default {
    get,
    getBySifra,
    dodaj
}