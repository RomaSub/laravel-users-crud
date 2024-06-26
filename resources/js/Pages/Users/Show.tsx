import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { useForm, Head, Link } from '@inertiajs/react';
import { User } from '@/types/User';
import { useTranslation } from 'react-i18next';

interface ShowProps {
  user: User;
}

const Show: React.FC<ShowProps> = ({ user }: ShowProps) => {
  const { t } = useTranslation();
  const { delete: destroy } = useForm();

  const handlerSubmmit = (e: React.FormEvent) => {
    e.preventDefault();
    destroy(route('users.destroy', user.id));
  };

  return (
    <>
      <Head title="Show" />
      <h1 className="mt-3 text-center">
        {t('header.user')} {user.id}
      </h1>
      <Container className="mt-3">
        <Row className="justify-content-center">
          <Col className="col-lg-6">
            <Form onSubmit={handlerSubmmit} className="border rounded p-3">
              <Form.Group className="mb-2" controlId="formBasicFirstName">
                <Form.Label className="text-muted small">
                  {t('form.firstName')}
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={user.first_name}
                  type="text"
                  placeholder={t('form.firstName')}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicLastName">
                <Form.Label className="text-muted small">
                  {t('form.lastName')}
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={user.last_name}
                  type="text"
                  placeholder={t('form.lastName')}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPatronymic">
                <Form.Label className="text-muted small">
                  {t('form.patronymic')}
                </Form.Label>
                <Form.Control
                  disabled
                  readOnly
                  value={user.patronymic}
                  type="text"
                  placeholder={t('form.patronymic')}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicGender">
                <Form.Label className="text-muted small">
                  {t('form.gender')}
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={user.gender}
                  type="text"
                  placeholder={t('form.gender')}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className="text-muted small">
                  {t('form.email')}
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={user.email}
                  type="text"
                  placeholder={t('form.email')}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicDate">
                <Form.Label className="text-muted small">
                  {t('form.dateBirth')}
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={user.birth_date}
                  type="date"
                  placeholder="DD.MM.YY"
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicAbout">
                <Form.Label className="text-muted small">
                  {t('form.about')}
                </Form.Label>
                <Form.Control
                  readOnly
                  disabled
                  value={user.about || ''}
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder=""
                />
              </Form.Group>
              <Row>
                <Col className="text-end">
                  <Button type="submit" className="mx-2" variant="danger">
                    {t('rest.deleteBtn')}
                  </Button>
                  <Button
                    as={Link}
                    href={route('users.edit', user.id)}
                    variant="primary"
                  >
                    {t('rest.editBtn')}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Show;
