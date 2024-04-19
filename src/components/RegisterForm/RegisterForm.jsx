import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string("Enter your email").required("Email is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ mt: 2, width: "100%" }}
    >
      <TextField
        fullWidth
        id="name"
        name="name"
        label="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.name && formik.errors.name && (
          <FormHelperText error>{formik.errors.name} </FormHelperText>
        )}
      </Box>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.email && formik.errors.email && (
          <FormHelperText error>{formik.errors.email} </FormHelperText>
        )}
      </Box>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.password && formik.errors.password && (
          <FormHelperText error>{formik.errors.password} </FormHelperText>
        )}
      </Box>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        fullWidth
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default RegisterForm;
