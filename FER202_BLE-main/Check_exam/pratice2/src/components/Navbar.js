import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function MyNavbar() {
  const navigate = useNavigate();

  // Kiểm tra xem người dùng có đăng nhập hay không
  const isLoggedIn = localStorage.getItem('accessToken') !== null;

  // Hàm để xử lý logout
  const handleLogout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Điều hướng về trang login
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#about"></Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Button variant="outline-danger" onClick={handleLogout}>Logout</Button> // Hiển thị nút Logout nếu đã đăng nhập
            ) : (
              <Button variant="outline-primary" href="/login">Login</Button> // Hiển thị nút Login nếu chưa đăng nhập
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
