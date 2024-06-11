import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Register from "features/Auth/components/Register/Register";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={classes.link} to="/">
              IDK...
            </Link>
          </Typography>
          <NavLink className={classes.link} to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        disableEscapeKeyDown
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            // Set 'open' to false.
            setOpen(false);
          }
        }}
        open={open}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
