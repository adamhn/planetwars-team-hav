import { Container, Col, Row } from "@gjensidige/nci-core-grid/lib";
import { Title } from "@gjensidige/nci-core-typography/lib";
import { Text } from "@gjensidige/nci-core-typography/lib";
import { getAllPlanets } from "../utils/api";
import { Planet } from "../utils/types";

type Props = {
  errors?: string;
  planet?: Planet;
};

const StaticPropsDetail = ({ planet, errors }: Props) => {
  if (errors) {
    return (
      <div title="Planet">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </div>
    );
  }

  console.log("Planet " + planet);
  return (
    <Container>
      <Row>
        <Col xxs={{ span: 5, offset: 3 }}>
          <Title tag="h1">{planet?.name}</Title>
          <Text>
            Gravity: <strong>{planet?.gravity}</strong>
          </Text>
          <Text>
            Population: <strong>{planet?.population}</strong>
          </Text>
          <Text>
            Terrains: <strong>{planet?.terrains.join(", ")}</strong>
          </Text>
          <Text>
            Diameter: <strong>{planet?.diameter}</strong>
          </Text>
        </Col>
      </Row>
    </Container>
  );
};

export default StaticPropsDetail;

// This gets called on every request
export async function getServerSideProps(context: any) {
  const id = context.params.id; // Get ID from slug `/book/1`
  // Fetch data from external API
  console.log(id);
  try {
    const data = await getAllPlanets();
    const planets = data.data.allPlanets.planets as Planet[];
    const planet = planets.find((p) => p.id === id);
    return { props: { planet } };
  } catch (error) {
    console.error("could not fetch planets", error);
  }

  // Pass data to the page via props
  return { props: null };
}
