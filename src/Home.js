import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";


function Home() {

  const renderizarPosts = () => 
    {
        const posts = [];
        for (let i = 0; i < 5; i++)
        {
            posts.push(<div class="col"><Image src= "logo192.png"/></div>);
        }
        return posts;
    }


  return (
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-4">
          <Image src= "./logo192.png"/>
        </div>
        <div class="col-8">
        <Card>
          <Card.Body>
            <Card.Title>Username</Card.Title>
            <Card.Text>Description</Card.Text>
            <Card.Footer>
              <div class= "row">
                <div class="col">
                  Hola
                </div>
                <div class="col">
                  Hola
                </div>
                <div class="col">
                  Hola
                </div>
              </div>
            </Card.Footer>
          </Card.Body>
        </Card>
        </div>
      </div>

      <div class="row justify-content-start">
        {renderizarPosts()}        
      </div>

    </div>
  );
}

export default Home;
