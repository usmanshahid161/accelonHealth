import { useState }             from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined }         from "@ant-design/icons";
import { Link, useLocation }    from "react-router-dom";
import "./Navbar.scss";
import logoWhite                from "../../assets/logo/Logo white.png";
import logoBlue                 from "../../assets/logo/logo blue.png";

const menuItems = [
  { key: "/", label: "Home" },
  { key: "/about", label: "About Us" },

  {
    key: "/outsourcing",
    label: "Professional Solutions",
    children: [
      { key: "/outsourcing/audit", label: "Audit" },
      { key: "/outsourcing/beauty", label: "Beauty" },
      { key: "/outsourcing/notes", label: "Notes" },
      { key: "/outsourcing/healthCare", label: "Health Care" },
      { key: "/outsourcing/contactCenter", label: "Contact Center" },
      { key: "/outsourcing/revenue", label: "Revenue Cycle" },
      { key: "/outsourcing/voice", label: "Voice" },
      { key: "/outsourcing/code", label: "Code" }
    ],
  },

  { key: "/technology", label: "Technology Solutions" },
  { key: "/case-studies", label: "Case Studies" },
  { key: "/contact", label: "Contact Us" },
];


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className={"navbarHeader"}>
      <div className="navbar">
      {/* Logo */ }

      <div className="logo">
        <Link to="/">
          <img src={ logoBlue } alt="Accelon Health"/>
        </Link>
      </div>

      {/* Desktop Menu */ }
      <Menu
        mode="horizontal"
        selectedKeys={ [location.pathname] }
        className="menu desktop-menu"
      >
        { menuItems.map(item =>
          item.children ? (
            <Menu.SubMenu key={ item.key } title={ item.label }>
              { item.children.map(sub => (
                <Menu.Item key={ sub.key }>
                  <Link to={ sub.key }>{ sub.label }</Link>
                </Menu.Item>
              )) }
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={ item.key }>
              <Link to={ item.key }>{ item.label }</Link>
            </Menu.Item>
          )
        ) }
      </Menu>


      {/* CTA Button */ }
      <Button type="primary" className="demo-btn desktop-menu" style={{
        height:48,
        width:180,
        background:"linear-gradient(to right, #1C2460, #0077C7)",
      }}>
        Book a Demo
      </Button>

      {/* Mobile Menu Icon */ }
      <Button
        className="mobile-menu-btn"
        icon={ <MenuOutlined/> }
        onClick={ () => setOpen(true) }
      />

      {/* Mobile Drawer */ }
      <Drawer
        placement="right"
        open={ open }
        onClose={ () => setOpen(false) }
        width={ 280 }
      >
        <Menu
          mode="inline"
          selectedKeys={ [location.pathname] }
          onClick={ () => setOpen(false) }
        >
          { menuItems.map(item =>
            item.children ? (
              <Menu.SubMenu key={ item.key } title={ item.label }>
                { item.children.map(sub => (
                  <Menu.Item key={ sub.key }>
                    <Link to={ sub.key }>{ sub.label }</Link>
                  </Menu.Item>
                )) }
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={ item.key }>
                <Link to={ item.key }>{ item.label }</Link>
              </Menu.Item>
            )
          ) }
        </Menu>


        <Button type="primary" block className="demo-btn-mobile" style={{
          height:48,
          width:"100%",
          background:"linear-gradient(to right, #1C2460, #0077C7)",
        }}>
          Book a Demo
        </Button>
      </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
