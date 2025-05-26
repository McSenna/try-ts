import  { useState, useRef } from 'react';
import { Button, Popper, Paper } from '@mui/material';

const MyPopper = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div>
      <Button ref={anchorRef} onClick={() => setOpen((prev) => !prev)}>
        Toggle Popper
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom">
        <Paper sx={{ padding: 2 }}>
          This is a Popper content!
        </Paper>
        <Paper sx={{ padding: 2 }}>
          This is a Popper content!
        </Paper>
        <Paper sx={{ padding: 2 }}>
          This is a Popper content!
        </Paper>
      </Popper>
    </div>
  );
};

export default MyPopper;
