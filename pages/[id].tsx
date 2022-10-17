import { Container, Col, Row } from '@gjensidige/nci-core-grid/lib';
import { Title } from '@gjensidige/nci-core-typography/lib';
import { Text } from '@gjensidige/nci-core-typography/lib';
import { getAllPlanets } from '../utils/api';
import { Planet } from "../utils/types";

type Props = {
    errors?: string
    planet?: Planet;
}

const StaticPropsDetail = ({ planet, errors }: Props) => {
    if (errors) {
        return (
            <div title="Planet">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </div>
        )
    }

    console.log("Planet " + JSON.stringify(planet));
    return (
        <Container>
            <Row>
                <Col xxs={{ span: 5, offset: 3 }}>
                    <Title tag="h1">Details</Title>
                    <Text>Gravity: {planet?.gravity}</Text>
                    <Text>Population: {planet?.population}</Text>
                    <Text>Terrains: {planet?.terrains}</Text>
                    <Text>Diameter: {planet?.diameter}</Text>
                </Col>
            </Row>
        </Container>
    )
}

export default StaticPropsDetail


export async function getStaticPaths() {

    const data = await getAllPlanets()
    const planets = data.data.allPlanets.planets as Planet[];
    const paths = planets.map((planet) => ({
        params: { id: planet.id },
    }))
    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}


// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {


    return {
        // Passed to the page component as props
        props: { planet: {} },
    }
}