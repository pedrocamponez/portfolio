import { Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyleButton";
import theme from "../../../../theme";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
    }))

    const StyledImg = styled("img")(() => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="xl">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} display="flex" justifyContent="center">
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Hi! I am Pedro Camponez,</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">a Software Engineer</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("Download")} >
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("Contact")} >
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero >
        </>
    )
}

export default Hero
