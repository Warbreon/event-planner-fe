import * as Yup from 'yup';

export const eventFormSchema = Yup.object().shape({
    image: Yup.mixed()
        .required('Please upload an image.')
        .test(
            'fileFormat',
            'Unsupported format',
            (value) => {
                const file = value as File;
                return file ? ['image/jpeg', 'image/png', 'image/gif'].includes(file.type) : true;
            }
        )
});