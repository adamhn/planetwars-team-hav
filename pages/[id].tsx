import { Container, Col, Row } from '@gjensidige/nci-core-grid/lib';
import { Title } from '@gjensidige/nci-core-typography/lib';
import { Text } from '@gjensidige/nci-core-typography/lib';
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

    console.log("Planet " + planet);
    return (
        <Container>
            <Row>
                <Col xxs={{ span: 5, offset: 3 }}>
                    <Title tag="h1">Details</Title>
                    <Text>Gravity: </Text>
                    <Text>Population: </Text>
                    <Text>Terrains: </Text>
                    <Text>Diameter: </Text>
                </Col>
            </Row>
        </Container>
    )
}

export default StaticPropsDetail

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
    return {
        // Passed to the page component as props
        props: { post: {} },
    }
}