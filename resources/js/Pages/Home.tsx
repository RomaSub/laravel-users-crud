import { Link, Head, usePage } from '@inertiajs/react';
import { Row, Col, Table, Container, Pagination } from 'react-bootstrap';
import { User } from '@/types/User';

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
  const { component } = usePage();

  const paginationLabels = {
    prev: '< Prev',
    next: 'Next >'
  };

  return (
    <>
      <Head title={component} />
      <h1 className="mt-3 text-center">Users</h1>
      <Container className="mt-4">
        <Row>
          <Col>
            <Table striped hover bordered>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Patronymic</th>
                  <th>Gender</th>
                  <th>Date birth</th>
                  <th>Email</th>
                  <th>Show</th>
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
