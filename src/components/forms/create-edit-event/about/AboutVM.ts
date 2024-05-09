import { EventFormValues } from "../../../../interfaces/EventFormValuesInterface";
import {useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Links from "@tiptap/extension-link";
import {Placeholder} from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import {CharacterCount} from "@tiptap/extension-character-count";
import {useCallback} from "react";
import {useField, useFormikContext} from "formik";

const AboutVM = () => {
    const { values, setFieldValue } = useFormikContext<EventFormValues>();
    const [field, meta] = useField('about');

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Links,
            Placeholder.configure({
                placeholder: 'Tell more details about event and what will be happening during it',
            }),
            TaskList.configure({
                HTMLAttributes: {
                    class: "not-prose pl-2",
                },
            }),
            TaskItem.configure({
                HTMLAttributes: {
                    class: "flex items-start my-4",
                },
                nested: true,
            }),
            CharacterCount.configure({
                mode: 'nodeSize',
                limit: 1000,
            })
        ],
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
        onUpdate({ editor }) {
            setFieldValue("about",editor.getHTML());
        },
    })

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