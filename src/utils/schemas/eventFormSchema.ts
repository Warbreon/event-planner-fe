import * as Yup from 'yup';

export const eventFormSchema = Yup.object().shape({
    imageUrl: Yup.mixed()
        .required('Please upload an image.')
        .test(
            'fileFormat',
            'Unsupported format.',
            (value) => {
                const file = value as File;
                return file ? ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) : true;
            }
        ),
    cardUrl: Yup.mixed()
        .required('Please upload an image.')
        .test(
            'fileFormat',
            'Unsupported format.',
            (value) => {
                const file = value as File;
                return file ? ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) : true;
            }
        )
});