import { useState, useEffect }  from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined }         from "@ant-design/icons";
import { Link, useLocation }    from "react-router-dom";
import { useTranslation }       from "react-i18next";
import "./Navbar.scss";
import logoBlue                 from "../../assets/logo/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [language, setLanguage] = useState(
    i18n.language === "ar" ? "العربية" : "English"
  );

  const toggleLanguage = (ln) => {
    // ln is the clicked language
    i18n.changeLanguage(ln); // directly change to clicked language
    setLanguage(ln === "ar" ? "العربية" : "English"); // update button label
  };

  const defaultAction = () => {
    window.open(
      "https://calendly.com/contact-accelonhealth/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight;
      setIsFixed(window.scrollY > triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { key: "/", label: t("navbar.home") },
    {
      key: "/professional",
      label: t("navbar.professionalSolutions"),
      children: [
        { key: "/professional/revenue", label: t("navbar.revenueCycleManagement") },
        { key: "/professional/healthCare", label: t("navbar.healthcareConsulting") },
        { key: "/professional/contactCenter", label: t("navbar.medicalContactCenter") },
      ],
    },
    {
      key: "/technology",
      label: t("navbar.technologySolutions"),
      children: [
        { key: "/technology/notes", label: t("navbar.accelonNotes") },
        { key: "/technology/code", label: t("navbar.accelonCode") },
        { key: "/technology/audit", label: t("navbar.accelonAudit") },
        { key: "/technology/voice", label: t("navbar.accelonVoice") },
        { key: "/technology/beauty", label: t("navbar.accelonBeauty") },
      ],
    },
    { key: "/about", label: t("navbar.aboutUs") },
    { key: "/case-studies", label: t("navbar.caseStudies") },
    { key: "/contact", label: t("navbar.contactUs") },
    {
      key: "/language",
      label: `${ language }`,
      children: [
        { key: "en", label: "English" },
        { key: "ar", label: "العربية" }
      ],
    }
  ];

  return (
    <header className={ `navbarHeader ${ isFixed ? "fixed" : "" }` }>
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
          triggerSubMenuAction="hover"
        >
          { menuItems.map((item) =>
            item.children ? (
              <Menu.SubMenu key={ item.key } title={ item.label }>
                { item.children.map((sub) => (
                  <Menu.Item key={ sub.key }>
                    {
                      sub.key === "en" || sub.key === "ar" ? <div onClick={ () => toggleLanguage(sub.key) }>
                        { sub.label }
                      </div> : <Link to={ sub.key }>{ sub.label }</Link>
                    }
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
          onClick={ defaultAction }
          type="primary"
          className="demo-btn desktop-menu"
          style={ {
            height: 48,
            width: 180,
            background: "linear-gradient(to right, var(--primary-color), #0077C7)",
          } }
        >
          { t("navbar.bookDemo") }
        </Button>

        {/* Mobile Menu Icon */ }
        <Button
          className="mobile-menu-btn"
          icon={ <MenuOutlined/> }
          onClick={ () => setOpen(!open) }
        />

        {/* Mobile Drawer */ }
        <Drawer placement="right" open={ open } onClose={ () => setOpen(false) } width={ "100%" }>
          <Menu mode="inline" selectedKeys={ [location.pathname] } onClick={ () => setOpen(false) }>
            { menuItems.map((item) =>
              item.children ? (
                <Menu.SubMenu key={ item.key } title={ item.label }>
                  { item.children.map((sub) => (
                    <Menu.Item key={ sub.key }>
                      {
                        sub.key === "en" || sub.key === "ar" ? <div onClick={ () => toggleLanguage(sub.key) }>
                          { sub.label }
                        </div> : <Link to={ sub.key }>{ sub.label }</Link>
                      }
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

          {/* Mobile CTA Button */ }
          <Button
            onClick={ defaultAction }
            type="primary"
            block
            className="demo-btn-mobile"
            style={ {
              height: 48,
              width: "100%",
              background: "linear-gradient(to right, var(--primary-color), #0077C7)",
            } }
          >
            { t("navbar.bookDemo") }
          </Button>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
