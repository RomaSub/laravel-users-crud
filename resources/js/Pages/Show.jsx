import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import {  useForm, Head, Link } from '@inertiajs/react';

const Show = ({ user }) => {
    const { delete: destroy } = useForm()

    function submit(e) {
        e.preventDefault();
        destroy(`/users/${user.id}`)
    }

    return (
        <>
            <Head title="Show"/>
            <h1 className='mt-3 text-center'>User {user.id}</h1>
            <Container className='mt-4'>
                <Row className='justify-content-center'>
                    <Col className='col-lg-6'>
                        <Form onSubmit={submit} className='border rounded p-3'>
                            <Form.Group className="mb-3" controlId="formBasicIdCreatedAt">
                                <Form.Label className="text-muted small">Created at</Form.Label>
                                <Form.Control
                                    disabled
                                    value={new Date(user.created_at).toLocaleTimeString()}
                                    type="text"
                                    placeholder="created at" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicIdUpdaetdAt">
                                <Form.Label className="text-muted small">Updated at</Form.Label>
                                <Form.Control
                                    disabled
                                    value={new Date(user.updated_at).toLocaleTimeString()}
                                    type="text"
                                    placeholder="updated at" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label className="text-muted small">First name</Form.Label>
                                <Form.Control
                                    disabled
                                    value={user.first_name}
                                    type="text"
                                    placeholder="First name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label className="text-muted small">Last name</Form.Label>
                                <Form.Control
                                    disabled
                                    value={user.last_name}
                                    type="text"
                                    placeholder="Last name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="text-muted small">Date birth</Form.Label>
                                <Form.Control
                                    disabled
                                    value={user.birth_date}
                                    type="date"
                                    placeholder="DD.MM.YY" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAbout">
                                <Form.Label className="text-muted small">About</Form.Label>
                                <Form.Control
                                    disabled
                                    value={user.about}
                                    type="text"
                                    as="textarea"
                                    rows="3"
                                    placeholder="" />
                            </Form.Group>
                            <Row>
                                <Col className='text-end'>
                                    <Button type="submit" className='mx-2' variant="danger">Delete</Button>
                                    <Button as={Link} href={`/users/${user.id}/edit`} variant="warning">Edit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Show;
