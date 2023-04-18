import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

function ShowButton(props) {
    return (
        <Button sx={{position: 'absolute', top: 0, left: 0}} onClick={(props.onClick)} variant='outlined'>
            <MenuIcon fontSize='large' />
        </Button>
    )
}

export default ShowButton;