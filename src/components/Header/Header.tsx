import { Box, Button } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import './Header.scss'
import { HeaderProps } from '../../models/types';


const Header = (props: HeaderProps) => {

  const { filter, setFilter, setAddingFormStatus } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box className="header-box">
      <Button onClick={() => setAddingFormStatus('add')} variant="contained" className='add-task-btn'>ADD TASK</Button>
      <Box sx={{ minWidth: 140 }}>
        <FormControl fullWidth>
          <Select
            id="select"
            value={filter}
            onChange={handleChange}
          >
            <MenuItem value={'All'}>All</MenuItem>
            <MenuItem value={'Uncompleted'}>Uncompleted</MenuItem>
            <MenuItem value={'Completed'}>Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Header