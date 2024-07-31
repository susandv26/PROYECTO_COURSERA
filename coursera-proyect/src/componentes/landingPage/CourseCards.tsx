import { Button, Card, Stack } from "react-bootstrap";
import picture from '../imagenes/Example.png';

function CourseCard(){
    return (
        <Card style={{ width: '18rem' ,padding:"0px"}}>
      <Card.Img variant="top" src={picture} style={{width:"full",margin:"0px"}}/>
      <Card.Body>
        <Card.Title>Curso Generico</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Card.Text>
        <Button variant="primary">Inicia ahora</Button>
      </Card.Body>
    </Card>);
}
interface props{
    tipo?:string;
    titulo?:string;
    parrafo?:string;
}
function ListCourses(props:props){
    return(<><div className="mx-5">

    <div style={{textAlign:"left"}} className="text-primary mt-4 mb-4 ">{props.tipo}</div>
    <h2 style={{textAlign:"left"}}>{props.titulo}</h2>
    <p style={{textAlign:"left"}}>{props.parrafo}</p>
    <Stack direction="horizontal" gap={3} className="mt-1">
      <div className="p-2"><CourseCard/></div>
      <div className="p-2"><CourseCard/></div>
      <div className="p-2"><CourseCard/></div>
      <div className="p-2"><CourseCard/></div>
    </Stack>
    <div className="text-start mb-4" style={{gap:"10px"}}>

        <Button variant="primary" size="lg" className="mx-2" >
          mostrar mas
        </Button>
        <Button variant="outline-primary" size="lg" className="">
          mostrar todo
        </Button>
        
    
    </div>
    </div>
    </>

    );
}

export default ListCourses