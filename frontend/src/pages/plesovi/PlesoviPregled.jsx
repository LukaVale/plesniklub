import { useEffect, useState } from "react"
import VrstaPlesaService from "../../services/VrstePlesaService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";



export default function PlesoviPregled(){

    const [plesovi, setPlesovi] = useState([]);
    const navigate = useNavigate();

    async function dohvatiPlesove() {
        try {
            const odgovor = await VrstaPlesaService.get();
            console.log('Odgovor s API-ja:', odgovor); // Debug
            if (odgovor && odgovor.data) {
                setPlesovi(odgovor.data);
            } else {
                console.warn('Nema podataka u odgovoru:', odgovor);
            }
        } catch (error) {
            console.error('Greška prilikom dohvata podataka:', error);
        }
    }
    // hook (kuka) se izvodi prilikom dolaska na stranicu Plesovi

    useEffect(()=>{
        dohvatiPlesove();
    }, [])

    return(
        <>
        <Link
        to={RouteNames.PLES_NOVI}
        className="btn btn-success siroko"
        >Dodaj novi ples</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>
                        Naziv
                    </th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {plesovi && plesovi.map((ples,index)=>(
                    <tr key={index}>
                        <td>
                            {ples.naziv}
                        </td>
                        <td>
                            <Button onClick={()=>navigate(`/plesovi/${ples.sifra}`)}>
                                Promjena
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )



}