import {EventFormValues} from "../interfaces/EventFormValuesInterface";
import {useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Links from "@tiptap/extension-link";
import {Placeholder} from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import {CharacterCount} from "@tiptap/extension-character-count";
import {useFormikContext} from "formik";

const TipTapEditorConfig = () => {
    const { setFieldValue } = useFormikContext<EventFormValues>();

    return useEditor({
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
                limit: 5000,
            })
        ],
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
        onUpdate({editor}) {
            setFieldValue("about", editor.getHTML());
        },
    });
}

export default TipTapEditorConfig