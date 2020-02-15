import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const TopBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Google Books Search</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/saved">Saved</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <br></br>
        </div>
    );
}

export default TopBar;
