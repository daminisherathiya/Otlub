import { useState, useId } from "react";
import { Menu } from "../../atoms/Menu";
import { MenuItem } from "../../atoms/MenuItem";
import { Link } from "../../atoms/Link";
import { Button } from "../../atoms/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function Dropdown({ menu, buttonProps, menuProps, menuLinkProps }) {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={menu.items.length > 0 && <KeyboardArrowDownIcon className="tw-text-xs" />}
        onClick={handleClick}
        open={open}
        href={menu.items.length > 0 ? null : menu.link}
        {...buttonProps}
      >
        {menu.name}
      </Button>
      {menu.items.length > 0 && (
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": buttonId,
          }}
          {...menuProps}
        >
          {menu.items.map((item, index) => (
            <MenuItem key={index} onClick={handleClose} className="tw-min-h-0 tw-p-0">
              <Link href={item.link} {...menuLinkProps}>
                {item.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}
