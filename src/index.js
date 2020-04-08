import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './index.css';

class MarkdownPreviwerApp extends React.Component {
    render(){
        return (
            <div id='markdown-preview-app' class='container-fluid'>
                <MarkdownPreviwer />
            </div>
        )
    }
}

class MarkdownPreviwer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            output: {__html: marked('', {sanitize: true})}
        }
        this.handleOnChange = this.handleOnChange.bind(this);

    }
    handleOnChange = (event) => {
        let newInput = event.target.value
        this.setState({
            input: newInput,
            output: {__html: marked(newInput, {sanitize: true})}
        })
    }

    render(){
        let placeHolderText = `Enter markdown here: (Need help? see https://www.markdownguide.org/basic-syntax/)`; 
        return(
            <div is='markdown-preview' class='row'>
                <div id='editor-container' class='col'>
                    <h1>Editor</h1>
                    <textarea id='editor' placeholder={placeHolderText} onChange={this.handleOnChange}></textarea>
                </div>
                <div id='preview-container' class='col'>
                    <h1>Preview</h1>
                    <div id='preview' dangerouslySetInnerHTML={this.state.output}></div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <MarkdownPreviwerApp />,
    document.getElementById('root')
);