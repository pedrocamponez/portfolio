import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import theme from "../../../../theme";

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }))

    return (
        <>
            <AppBar position="relative">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar