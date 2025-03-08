import { useEffect } from "react"
import VrstaPlesaService from "../../services/VrstePlesaService"



export default function PlesoviPregled(){
    async function dohvatiPlesove() {
        const odgovor = VrstaPlesaService.get()
    }
    // hook (kuka) se izvodi prilikom dolaska na stranicu Plesovi

    useEffect(()=>{
        dohvatiPlesove();
    }, [])

    return(
        <>
        Ovdje će se vidjeti vrste plesova iz baze
        </>
    )



}