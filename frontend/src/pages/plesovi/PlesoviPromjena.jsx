import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import VrstePlesaService from "../../services/VrstePlesaService";
import { useEffect, useState } from "react";



export default function PlesoviPromjena(){

    const navigate=useNavigate();

    const [ples,setPlesovi] = useState({});
    const routeParams = useParams();

    async function dohvatiPles() {
        const odgovor= await VrstePlesaService.getBySifra(routeParams.sifra)
        setPlesovi(odgovor)
    }

    useEffect(()=>{
        dohvatiPles();
    },[])

    async function uredi(ples) {
        const odgovor = await VrstePlesaService.uredi(routeParams.sifra, ples);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RouteNames.PLESOVI_PREGLED)
    }
    
    function odradiSubmit(e){//e je event
        e.preventDefault(); 

        let podaci = new FormData(e.target);

        uredi(
            {
                naziv: podaci.get('naziv')
            }
        );
    }
    
    return(
    <>

    <h4 className="text-center mb-2">
    Promjena plesa <b> {ples.naziv} </b>
    </h4>
    <Form onSubmit={odradiSubmit}>

        <Form.Group controlId="naziv">
            <Form.Label>Unesi novi naziv plesa</Form.Label>
            <Form.Control type="text" name="naziv" required placeholder={ples.naziv} />
        </Form.Group>
        <hr />
        <Row>
        <Col xs={6} s={6} md={3} lg={2} xl={6} xxl={6}>
            <Link
            to={RouteNames.PLESOVI_PREGLED}
            className="btn btn-danger siroko"
            >Odustani</Link>
        </Col>
        <Col xs={6} s={6} md={9} lg={10} xl={6} xxl={6}>
            <Button variant="success" type="submit" className="siroko">
                Promjeni
            </Button>
        </Col>
    </Row>
    </Form>
    </>)
}