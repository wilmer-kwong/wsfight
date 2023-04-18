import { Avatar, Button, Container, TextField, Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user.context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Copyright from '../components/Copyright';
import { VpnKey } from "@mui/icons-material";

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { emailPasswordSignup } = useContext(UserContext);
    const [form, setForm] = useState({
        email: "",
        password: "",
        passwordConf: ""
    });

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/login");
    }

    const validate = async () => {
        if (form.password !== form.passwordConf)
            throw new Error(
                "Mismatch password and password confirmation.",
                {name: "Password Mismatch"}
            );
    }

    const onSubmit = async (e) => {
        try {
            await validate();
            await emailPasswordSignup({
                email: form.email,
                password: form.password,
            });
            toast.success("User created successfully.", {
                position: "bottom-right",
                autoClose: 2000,
                draggable: true,
            })
            console.log("user created. redirecting...")
            setTimeout(() => redirectNow(), 3000);
        } catch (error) {
            toast.error(error.message, {
                position: "bottom-right",
                autoClose: 2000,
                draggable: true,
            });
        }
    };

    return (
        <>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        paddingTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <VpnKey />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            label="Email"
                            margin="normal"
                            required
                            fullWidth
                            autoFocus
                            type="email"
                            variant="outlined"
                            name="email"
                            value={form.email}
                            onInput={onFormInputChange}
                        />
                        <TextField
                            label="Password"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            variant="outlined"
                            name="password"
                            value={form.password}
                            onInput={onFormInputChange}
                        />
                        <TextField
                            label="Confirm Password"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            variant="outlined"
                            name="passwordConf"
                            value={form.passwordConf}
                            onInput={onFormInputChange}
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2 }}
                            onClick={onSubmit}
                        >
                            Signup
                        </Button>
                        <p>Have an account already? <Link to="/login">Login</Link></p>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8 }} />
            </Container>
            <ToastContainer />
        </>
    );
}

export default Signup;