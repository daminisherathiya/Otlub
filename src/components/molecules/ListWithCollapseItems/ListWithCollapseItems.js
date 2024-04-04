import { useState } from "react";
import { List } from "../../atoms/List";
import { ListItemButton } from "../../atoms/ListItemButton";
import { ListItemText } from "../../atoms/ListItemText";
import { Collapse } from "../../atoms/Collapse";
import { Link } from "../../atoms/Link";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function ListWithCollapseItems({ menu }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {menu.items.length > 0 ? (
        <>
          <ListItemButton onClick={handleClick} className="tw-pl-6">
            <ListItemText primary={menu.name} classes={{ primary: "tw-text-sm" }} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menu.items.map((item, index) => (
                <Link key={index} href={item.link} className="tw-text-white tw-no-underline">
                  <ListItemButton className="tw-pl-10">
                    <ListItemText primary={item.name} classes={{ primary: "tw-text-sm" }} />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <Link href="https://www.google.com/" className="tw-text-white tw-no-underline">
          <ListItemButton className="tw-pl-6">
            <ListItemText primary={menu.name} classes={{ primary: "tw-text-sm" }} />
          </ListItemButton>
        </Link>
      )}
    </>
  );
}
