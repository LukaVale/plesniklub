import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import VrstePlesaService from "../../services/VrstePlesaService";



export default function PlesoviDodaj(){

    const navigate=useNavigate();

    async function dodaj(ples) {
        const odgovor = await VrstePlesaService.dodaj(ples);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RouteNames.PLESOVI_PREGLED)
    }
    
    function odradiSubmit(e){//e je event
        e.preventDefault(); 

        let podaci = new FormData(e.target);

        dodaj(
            {
                "naziv": podaci.get('naziv')
            }
        );
    }
    
    return(
    <>
    Dodavanje smjera
    <Form onSubmit={odradiSubmit}>

        <Form.Group controlId="naziv">
            <Form.Label>Naziv</Form.Label>
            <Form.Control type="text" name="naziv" required/>
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
                Dodaj Ples
            </Button>
        </Col>
    </Row>
    </Form>
    </>)
}