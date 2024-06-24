import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import { Head, useForm } from '@inertiajs/react';
import { User } from '@/types/User';
import { useTranslation } from 'react-i18next';

const Create = () => {
  const { t } = useTranslation();
  const { data, setData, post, errors, processing } = useForm<User>({
    first_name: '',
    last_name: '',
    patronymic: '',
    birth_date: '',
    gender: '',
    email: '',
    about: ''
  });

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('users.store'));
  };

  return (
    <Container className="mt-4">
      <Head title="Create" />
      <Row className="justify-content-center mb-3">
        <Col>
          <h1 className="text-center">{t('header.createUser')}</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-lg-6">
          <Form className="border rounded p-3" onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label className="text-muted small">
                {t('form.firstName')}
              </Form.Label>
              <Form.Control
                value={data.first_name}
                onChange={e => setData('first_name', e.target.value)}
                type="text"
                isInvalid={!!errors.first_name}
                placeholder={t('form.firstName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.first_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label className="text-muted small">
                {t('form.lastName')}
              </Form.Label>
              <Form.Control
                value={data.last_name}
                onChange={e => setData('last_name', e.target.value)}
                type="text"
                isInvalid={!!errors.last_name}
                placeholder={t('form.lastName')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.last_name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPatronymic">
              <Form.Label className="text-muted small">
                {t('form.patronymic')}
              </Form.Label>
              <Form.Control
                value={data.patronymic}
                onChange={e => setData('patronymic', e.target.value)}
                type="text"
                isInvalid={!!errors.patronymic}
                placeholder={t('form.patronymic')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.patronymic}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label className="text-muted small">
                {t('form.gender')}
              </Form.Label>
              <Form.Select
                value={data.gender}
                onChange={e => setData('gender', e.target.value)}
                isInvalid={!!errors.gender}
              >
                <option></option>
                <option>{t('rest.male')}</option>
                <option>{t('rest.female')}</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-muted small">
                {t('form.email')}
              </Form.Label>
              <Form.Control
                value={data.email}
                onChange={e => setData('email', e.target.value)}
                type="text"
                isInvalid={!!errors.email}
                placeholder={t('form.email')}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label className="text-muted small">
                {t('form.dateBirth')}
              </Form.Label>
              <Form.Control
                value={data.birth_date}
                onChange={e => setData('birth_date', e.target.value)}
                type="date"
                isInvalid={!!errors.birth_date}
                placeholder="DD.MM.YY"
              />
              <Form.Control.Feedback type="invalid">
                {errors.birth_date}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAbout">
              <Form.Label className="text-muted small">
                {t('form.aboutYou')}
              </Form.Label>
              <Form.Control
                value={data.about}
                onChange={e => setData('about', e.target.value)}
                type="text"
                as="textarea"
                rows={3}
                isInvalid={!!errors.about}
                placeholder=""
              />
              <Form.Control.Feedback type="invalid">
                {errors.about}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col className="text-end">
                <Button variant="primary" type="submit" disabled={processing}>
                  {t('rest.createBtn')}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
