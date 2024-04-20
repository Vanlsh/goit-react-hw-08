import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import { Box, Button, FormHelperText, TextField } from "@mui/material";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9 -/+]+$/, "Invalid number. You can use '0-9', ' ', '-', '+'")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { name: "", number: "" };

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: ContactSchema,
    onSubmit: (values, action) => {
      dispatch(addContact({ ...values }));
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
        label="Name"
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
        id="number"
        name="number"
        label="Number"
        type="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
      />
      <Box sx={{ minHeight: "25px", mt: "3px" }}>
        {formik.touched.number && formik.errors.number && (
          <FormHelperText error>{formik.errors.number} </FormHelperText>
        )}
      </Box>
      <Button
        color="primary"
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        fullWidth
        type="submit"
      >
        Add contact
      </Button>
    </Box>
  );
};

export default ContactForm;
