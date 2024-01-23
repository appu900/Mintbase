import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDetailspopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        shop now
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="black"
              onClick={handleClose}
              aria-label="close"
              className="bg-black"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              add to cart
            </Button>
          </Toolbar>
        </AppBar>
        <div className="w-full h-full flex px-10  gap-8">
          {/* for product */}
          <div className="w-[60%] h-full">
            <iframe
              src="https://sketchfab.com/models/b8d6d16c5e6643ecba5ba3a724fe27e2/embed"
              frameborder="0"
              
              className="w-full h-full"
            ></iframe>
            <div className="w-full flex justify-between items-center">
              <div className="mt-10 flex items-center gap-4">
                <img
                  src="https://cdn.pixabay.com/photo/2018/10/29/21/46/human-3782189_640.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover cursor-pointer"
                />
                <div>
                  <p className="text-xl font-bold">Nil Sunna</p>
                  <p className="text-gray-600">Unity developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 {/* for rating and stars */}
                 {/* button forr giving stars */}
                 <div className="flex items-center gap-2">
                  <p className="opacity-80">❤️1k+</p>
                  <button 
                  className="border px-4 py-2 border-black cursor-pointer">⭐780</button>
                 </div>
              </div>
            </div>
          </div>
          {/* for details */}
          <div>

            <div>
              <h1 className="text-4xl capitalize font-bold text-gray-700">german Shepherd (Unity)</h1>
            </div>
            <div className="mt-8">
              <p className="text-3xl font-bold mb-3  text-pink-700">13ETH</p>
              <p className="max-w-[500px] text-gray-600">Are you ready to elevate your experience and stay ahead in the fast-paced world of technology? Our exclusive 6-month support package is designed to provide you with unparalleled assistance and access to the latest advancements in our cutting-edge models.</p>
            </div>
            <div className="my-5">
              <button className="w-[340px] py-6 bg-pink-600 rounded text-white uppercase font-bold">Add to cart</button>
            </div>
            <div className="my-5">
              <button className="w-[340px] py-6 bg-blue-600 rounded text-white uppercase font-bold">PAY with NFT</button>
            </div>

          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
