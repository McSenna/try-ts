import  { useState, useRef } from 'react';
import { Button, Popper, Paper } from '@mui/material';

const MyPopper = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <div className='flex items-end justify-end mr-5'>
      <Button ref={anchorRef} onClick={() => setOpen((prev) => !prev)}>
        Toggle Popper
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom">
        <div className='mr-5 mt-2'>
          <Paper className='p-2 shadow-md'>
          This is a Popper content!
        </Paper>
          <Paper className='p-2 shadow-md mt-0.5'>
          This is a Popper content!
        </Paper>
          <Paper className='p-2 shadow-md mt-0.5'>
          This is a Popper content!
        </Paper>
        </div>
        
      </Popper>
    </div>
  );
};

export default MyPopper;
