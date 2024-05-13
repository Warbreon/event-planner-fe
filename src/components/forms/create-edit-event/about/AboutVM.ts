import {useCallback} from "react";
import {useField} from "formik";
import TipTapEditorConfig from "../../../../configs/TipTapEditorConfig";

const AboutVM = () => {
    const [field, meta] = useField('about');
    const editor = TipTapEditorConfig();

    const setLink = useCallback(() => {
        const previousUrl = editor!.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        if (url === null) {
            return
        }

        if (url === '') {
            editor!.chain().focus().extendMarkRange('link').unsetLink()
                .run()

            return
        }

        editor!.chain().focus().extendMarkRange('link').setLink({ href: url })
            .run()
    }, [editor])

    return { editor, setLink, meta }
}

export default AboutVM