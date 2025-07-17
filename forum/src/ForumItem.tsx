import { Forum } from "./Forum.ts";
import { Row, Col, Image } from 'react-bootstrap';
type ForumItemProps = {
    forum: Forum;
}

export const ForumItem = (props: ForumItemProps) => {
    const { forum } = props;
    return (
        <>
        <Row className="p-3">
            <Col className='d-flex justify-content-center'>
                <Image src={forum.Zdjecie} roundedCircle fluid></Image>
            </Col>
            <Col className='m-auto'>
                <h3>{forum.Nazwa}</h3>
                <p>{forum.Wpis}</p>
            </Col>
        </Row>
        <hr/>
        </>
    )
}