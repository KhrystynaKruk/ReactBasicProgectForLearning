import React from "react"
import ReactMde from "react-mde"
import 'react-mde/lib/styles/css/react-mde-all.css';
import PropTypes from "prop-types";
import Showdown from "showdown"

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote?.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
Editor.propTypes = {
    currentNote: PropTypes.shape({
        body: PropTypes.string.isRequired,
        // Add more properties as needed
    }).isRequired,
    updateNote: PropTypes.func.isRequired,
};