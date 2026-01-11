import { useState }             from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined }         from "@ant-design/icons";
import { Link, useLocation }    from "react-router-dom";
import "./Navbar.scss";
import logoBlue                 from "../../assets/logo/logo blue.png";


const menuItems = [
  { key: "/", label: "Home" },
  { key: "/case-studies", label: "Case Studies" },
  { key: "/about", label: "About Us" },
  {
    key: "/professional",
    label: "Professional Solutions",
    children: [
      { key: "/professional/revenue", label: "Revenue Cycle Management" },
      { key: "/professional/healthCare", label: "Health Care Consulting" },
      { key: "/professional/contactCenter", label: "Medical Contact Center" },
    ],
  },

  {
    key: "/technology",
    label: "Technology Solutions",
    children: [
      { key: "/technology/audit", label: "Accelon Audit" },
      { key: "/technology/beauty", label: "Accelon Beauty" },
      { key: "/technology/notes", label: "Accelon Notes" },
      { key: "/technology/voice", label: "Accelon Voice" },
      { key: "/technology/code", label: "Accelon Code" }
    ]
  },
  { key: "/contact", label: "Contact Us" },
];


const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const defaultAction = () => {
    window.open(
      "https://calendly.com/contact-accelonhealth/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };
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
      <Button
      onClick={() => defaultAction()}
        type="primary"
        className="demo-btn desktop-menu"
        style={{
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
        onClick={ () => setOpen(!open) }
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



        <Button
          onClick={() => defaultAction()}
          type="primary"
          block
          className="demo-btn-mobile"
          style={{
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
