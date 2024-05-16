import {EditorContent } from '@tiptap/react'
import PageHeader from "../../../headers/page-headers/PageHeader";
import {Box, Typography} from "@mui/material";
import styles from './About.module.css';
import {
    FormatBold,
    FormatItalic,
    FormatListBulleted,
    FormatListNumbered,
    FormatStrikethrough,
    FormatUnderlined,
    Link
} from "@mui/icons-material";
import AboutVM from "./AboutVM";
import ErrorTooltip from "../../../../shared/components/error-tooltip/ErrorTooltip";

const About = () => {
    const { editor, setLink, meta } = AboutVM();

    if (!editor) return null

    return (
        <Box className={styles.container}>
            <PageHeader
                text='About'
                className='event-form-section'
            />
            <Typography variant='body1' className={'create-event-description'}>Description</Typography>
            <Box className={ meta.touched && meta.error ? styles.buttonContainerError : styles.buttonContainer}>
                <button
                    type={"button"}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <FormatBold/>
                </button>
                <button
                    type={"button"}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <FormatItalic/>
                </button>
                <button
                    type={"button"}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <FormatListBulleted/>
                </button>
                <button
                    type={"button"}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <FormatListNumbered/>
                </button>
                <button
                    type={"button"}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <FormatUnderlined/>
                </button>
                <button
                    type={"button"}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <FormatStrikethrough/>
                </button>
                <button
                    type={"button"}
                    onClick={setLink}
                    className={editor.isActive('link') ? styles.buttonActive : styles.buttonDisabled}
                >
                    <Link/>
                </button>
                <div className={styles.errorMessage}>
                    <ErrorTooltip title={meta.error} isVisible={meta.touched && Boolean(meta.error)} />
                </div>
            </Box>
            <Box className={meta.touched && meta.error ? styles.editorError : styles.editor}>
                <EditorContent editor={editor} />
            </Box>
        </Box>
    )
}

export default About