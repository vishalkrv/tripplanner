import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Button,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import * as Yup from "yup";
import Layout from "../../components/layout";
import { Formik, Form, Field } from "formik";

export default function BoardAdd() {
  //Set initial values
  const [data, setData] = useState({
    title: "",
    description: "",
    tags: "",
    days: "",
    travellers: "",
    budget: "",
    restrictions: "",
    preferredDate: "",
    status: "",
    postedBy: "",
    version: "",
  });

  /**
   *  Yup schema for validation of form fields
   */
  const schema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    tags: Yup.string().required("This field is required"),
    days: Yup.number().required("This field is required"),
    travellers: Yup.number().required("This field is required"),
    status: Yup.string().required("This field is required"),
  });

  /**
   * On SignUp Page submit, trigger a API call
   * @param {object} values description and password
   */
  const onSave = (values, actions) => {
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout isLogin={true} title="Trips">
      <Formik initialValues={data} onSubmit={onSave} validationSchema={schema}>
        {(actions) => (
          <Flex bg="white" w="100%" p="5" boxShadow="sm">
            <Form style={{width:"50%"}}>
              <Field name="title">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.title && form.touched.title}
                  >
                    <FormLabel htmlFor="title">Title</FormLabel>
                    <Input {...field} id="title" />
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="description">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.description && form.touched.description
                    }
                  >
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Input {...field} id="description" />
                    <FormErrorMessage>
                      {form.errors.description}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="tags">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.tags && form.touched.tags}
                  >
                    <FormLabel htmlFor="tags">Tags</FormLabel>
                    <Input {...field} id="tags" />
                    <FormErrorMessage>{form.errors.tags}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex>
                <Field name="days">
                  {({ field, form }) => (
                    <FormControl
                      orientation="horizontal"
                      isInvalid={form.errors.days && form.touched.days}
                    >
                      <FormLabel htmlFor="days">Days</FormLabel>
                      <Input {...field} type="number" id="days" />
                      <FormErrorMessage>{form.errors.days}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="travellers">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={
                        form.errors.travellers && form.touched.travellers
                      }
                      pl="4"
                    >
                      <FormLabel htmlFor="travellers">Travellers</FormLabel>
                      <Input {...field} type="number" id="travellers" />
                      <FormErrorMessage>
                        {form.errors.travellers}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Field name="budget">
                {({ field, form }) => (
                  <FormControl
                    orientation="horizontal"
                    isInvalid={form.errors.budget && form.touched.budget}
                  >
                    <FormLabel htmlFor="days">Budget</FormLabel>
                    <Input {...field} type="number" id="budget" />
                    <FormErrorMessage>{form.errors.budget}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="restrictions">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.restrictions && form.touched.restrictions
                    }
                  >
                    <FormLabel htmlFor="restrictions">Restrictions</FormLabel>
                    <Input {...field} id="restrictions" />
                    <FormErrorMessage>
                      {form.errors.restrictions}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="status">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.status && form.touched.status}
                  >
                    <FormLabel htmlFor="state">Status</FormLabel>
                    <Select {...field} id="status">
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </Select>
                    <FormErrorMessage>{form.errors.status}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex mt={10} justifyContent="flex-end" >
                <Button variant="outline" colorScheme="pink" size="md">Save</Button>
                <Button ml={4} variant="outline" colorScheme="pink" size="md">Post</Button>
              </Flex>
            </Form>
          </Flex>
        )}
      </Formik>
    </Layout>
  );
}
