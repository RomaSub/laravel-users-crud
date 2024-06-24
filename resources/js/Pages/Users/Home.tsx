import { Link, Head, usePage } from '@inertiajs/react';
import { Row, Col, Table, Container, Pagination } from 'react-bootstrap';
import { User } from '@/types/User';
import { useTranslation } from 'react-i18next';

interface PaginationLink {
  label: string;
  url: string | undefined;
  active: boolean;
}

interface HomeProps {
  users: {
    data: User[];
    links: PaginationLink[];
  };
}

const Home = ({ users }: HomeProps) => {
  const { t } = useTranslation();
  const { component } = usePage();

  const paginationLabels = {
    prev: t('rest.prevBtn'),
    next: t('rest.nextBtn')
  };

  return (
    <>
      <Head title={component} />
      <h1 className="mt-3 text-center">{t('headers.users')}</h1>
      <Container className="mt-4">
        <Row>
          <Col>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>{t('form.firstName')}</th>
                  <th>{t('form.lastName')}</th>
                  <th>{t('form.patronymic')}</th>
                  <th>{t('form.gender')}</th>
                  <th>{t('form.dateBirth')}</th>
                  <th>{t('form.email')}</th>
                  <th>{t('rest.show')}</th>
                </tr>
              </thead>
              <tbody>
                {users.data.map((user: User) => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.patronymic}</td>
                    <td>{user.gender}</td>
                    <td>{user.birth_date}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        className="text-decoration-none"
                        href={route('users.show', user.id)}
                      >
                        Show
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Pagination>
          {users.links.map((link: PaginationLink) => (
            <Pagination.Item
              as={Link}
              key={link.label}
              active={link.active}
              href={link.url}
            >
              {link.label.includes('Previous')
                ? paginationLabels.prev
                : link.label.includes('Next')
                  ? paginationLabels.next
                  : link.label}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
};

export default Home;
