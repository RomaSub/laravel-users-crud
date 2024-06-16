import { Form, Col, Row, Container, Button } from 'react-bootstrap'
import { Head, useForm } from '@inertiajs/react';

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        first_name: "",
        last_name: "",
        birth_date: "",
        about: "",
    })

    function submit(e) {
        e.preventDefault();
        post('/users')
    }

    return (
        <Container className='mt-4'>
            <Head title="Create" />
            <Row className='justify-content-center mb-3'>
                <Col>
                    <h1 className='text-center'>Create user</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='col-lg-6'>
                    <Form className='border rounded p-3' onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label className="text-muted small">First name</Form.Label>
                            <Form.Control
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                type="text"
                                isInvalid={!!errors.first_name}
                                placeholder="First name" />
                            <Form.Control.Feedback type="invalid">
                                {errors.first_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label className="text-muted small">Last name</Form.Label>
                            <Form.Control
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                type="text"
                                isInvalid={!!errors.last_name}
                                placeholder="Last name" />
                            <Form.Control.Feedback type="invalid">
                                {errors.last_name}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label className="text-muted small">Date birth</Form.Label>
                            <Form.Control
                                value={data.birth_date}
                                onChange={(e) => setData('birth_date', e.target.value)}
                                type="date"
                                isInvalid={!!errors.birth_date}
                                placeholder="DD.MM.YY" />
                            <Form.Control.Feedback type="invalid">
                                {errors.birth_date}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAbout">
                            <Form.Label className="text-muted small">About you</Form.Label>
                            <Form.Control
                                value={data.about}
                                onChange={(e) => setData('about', e.target.value)}
                                type="text"
                                as="textarea"
                                rows="3"
                                isInvalid={!!errors.about}
                                placeholder="" />
                            <Form.Control.Feedback type="invalid">
                                {errors.about}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Col >
                                <Button variant="primary" type="submit" disabled={processing}>Create</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Create;
