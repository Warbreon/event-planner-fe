import React from 'react'
import { Formik, FormikProps, Form as FormikForm, FormikConfig } from 'formik';

type FormProps<T> = FormikConfig<T> & {
    renderTitle?: () => React.ReactNode;
    renderSubtitle?: () => React.ReactNode;
    children: ((props: FormikProps<T>) => React.ReactNode) | React.ReactNode;
}

const Form = <T extends {}>({
    renderTitle,
    renderSubtitle,
    children,
    ...formikConfig
}: FormProps<T>) => (
    <Formik {...formikConfig}>
        {formikBag => (
            <>
                {renderTitle && renderTitle()}
                {renderSubtitle && renderSubtitle()}
                <FormikForm>
                    {typeof children === 'function' ? children(formikBag) : children}
                </FormikForm>
            </>
        )}
    </Formik>
);

export default Form