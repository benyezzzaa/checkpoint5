import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({info}) {
  return (
    <Card style={{ width: '18rem' }}className='joueur1' >
      <Card.Img variant="top" src={info.image} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          {info.age}
        </Card.Text>
        <Card.Text>
          {info.team}
        </Card.Text>
        <Card.Text>
            {info.nationaliter}
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Player;