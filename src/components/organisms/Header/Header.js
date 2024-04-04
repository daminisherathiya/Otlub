import { useState } from "react";
import { AppBar } from "../../atoms/AppBar";
import { Box } from "../../atoms/Box";
import { Toolbar } from "../../atoms/Toolbar";
import { IconButton } from "../../atoms/IconButton";
import { Container } from "../../atoms/Container";
import { Button } from "../../atoms/Button";
import { Badge } from "../../atoms/Badge";
import { Dropdown } from "../../molecules/Dropdown";
import { Drawer } from "../../atoms/Drawer";
import { Link } from "../../atoms/Link";
import { List } from "../../atoms/List";
import { ListWithCollapseItems } from "../../molecules/ListWithCollapseItems";
import MenuIcon from "@mui/icons-material/Menu";

const menus = [
  {
    name: "PRODUCT",
    link: "https://www.google.com/",
    items: [
      {
        name: "PRODUCT 1",
        link: "https://www.google.com/",
      },
      {
        name: "PRODUCT 2",
        link: "https://www.google.com/",
      },
      {
        name: "PRODUCT 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "ORDER & CARGO",
    link: "https://www.google.com/",
    items: [
      {
        name: "ORDER & CARGO 1",
        link: "https://www.google.com/",
      },
      {
        name: "ORDER & CARGO 2",
        link: "https://www.google.com/",
      },
      {
        name: "ORDER & CARGO 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "ACCOUNTING",
    link: "https://www.google.com/",
    items: [
      {
        name: "ACCOUNTING 1",
        link: "https://www.google.com/",
      },
      {
        name: "ACCOUNTING 2",
        link: "https://www.google.com/",
      },
      {
        name: "ACCOUNTING 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "RETAILS / SHOP",
    link: "https://www.google.com/",
    items: [
      {
        name: "RETAILS / SHOP 1",
        link: "https://www.google.com/",
      },
      {
        name: "RETAILS / SHOP 2",
        link: "https://www.google.com/",
      },
      {
        name: "RETAILS / SHOP 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "PAYMENT & INVOICES",
    link: "https://www.google.com/",
    items: [
      {
        name: "PAYMENT & INVOICES 1",
        link: "https://www.google.com/",
      },
      {
        name: "PAYMENT & INVOICES 2",
        link: "https://www.google.com/",
      },
      {
        name: "PAYMENT & INVOICES 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "PROMOTIONS",
    link: "https://www.google.com/",
    items: [
      {
        name: "PROMOTIONS 1",
        link: "https://www.google.com/",
      },
      {
        name: "PROMOTIONS 2",
        link: "https://www.google.com/",
      },
      {
        name: "PROMOTIONS 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "REPORTS",
    link: "https://www.google.com/",
    items: [
      {
        name: "REPORTS 1",
        link: "https://www.google.com/",
      },
      {
        name: "REPORTS 2",
        link: "https://www.google.com/",
      },
      {
        name: "REPORTS 3",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    name: "STORE MANAGEMENT",
    link: "https://www.google.com/",
    items: [],
  },
  {
    name: "ADVERTİSİNG MANAGEMENT",
    link: "https://www.google.com/",
    items: [],
  },
  {
    name: "TARGETS",
    link: "https://www.google.com/",
    items: [],
  },
];
const profileMenu = {
  name: <img src="/user.svg" alt="user" />,
  link: "https://www.google.com/",
  items: [
    {
      name: "Profile",
      link: "https://www.google.com/",
    },
    {
      name: "My account",
      link: "https://www.google.com/",
    },
    {
      name: "Logout",
      link: "https://www.google.com/",
    },
  ],
};

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar className="tw-sticky tw-z-50 tw-bg-primary-light tw-bg-none tw-shadow-none">
      <Container maxWidth="xl">
        <Toolbar className="tw-min-h-[70px]" disableGutters>
          <Box className="c-show-mobile-drawer tw-hidden">
            <Button onClick={toggleDrawer(!open)} className="tw-me-2 tw-min-w-0 tw-text-white">
              <MenuIcon />
            </Button>
            <Drawer className="tw-z-40" open={open} onClose={toggleDrawer(false)} classes={{ paper: "tw-bg-primary-light tw-bg-none tw-z-40" }}>
              <Toolbar className="tw-min-h-[70px]" />
              <Box className="tw-w-64" role="presentation">
                <List>
                  {menus.map((menu, index) => (
                    <ListWithCollapseItems key={index} menu={menu} />
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Link href="#" className="tw-me-7">
            <img src="/mainLogo.png" alt="Main logo" />
          </Link>
          <Box className="c-hide-web-header-items tw-flex">
            {menus.map((menu, index) => (
              <Box key={index}>
                <Dropdown
                  menu={menu}
                  buttonProps={{ className: "tw-text-white tw-text-[10px] tw-font-semibold tw-px-[9px]", classes: { icon: "tw-ml-[2px]" } }}
                  menuProps={{ classes: { paper: "tw-bg-primary-light" } }}
                  menuLinkProps={{ className: "tw-text-white tw-no-underline tw-text-xs tw-px-4 tw-py-[6px]" }}
                />
              </Box>
            ))}
          </Box>
          <Box className="tw-ms-auto">
            <IconButton className="tw-p-2" size="large" aria-label="show new chats">
              <img src="/chat.svg" alt="chat" />
            </IconButton>
            <IconButton className="tw-p-2" size="large" aria-label="go to home">
              <img src="/home.svg" alt="home" />
            </IconButton>
            <IconButton className="tw-p-2" size="large" aria-label="show new notifications">
              <Badge classes={{ badge: "tw-text-[8px] tw-h-[13.5px] tw-min-w-[13.5px] tw-px-1 tw-rounded-full tw-bg-error-light" }} badgeContent={3}>
                <img src="/bell.svg" alt="notification" />
              </Badge>
            </IconButton>
            <Dropdown
              menu={profileMenu}
              buttonProps={{ className: "tw-text-white tw-p-2 tw-min-w-0 -tw-mr-2" }}
              menuProps={{ classes: { paper: "tw-bg-primary-light" } }}
              menuLinkProps={{ className: "tw-text-white tw-no-underline tw-text-xs tw-px-4 tw-py-[6px]" }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
