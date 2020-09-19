import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = (props) => {
  const isImage = /\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG)$/.test(props.data.url)
  return (
    <a className="sc-message--file" href={props.data.url} download={props.data.fileName}>
      { isImage ? <img src={props.data.url} /> : <span><FileIcon /><p className="fileName">{props.data.fileName}</p>
      </span>
      }
    </a>
  );
};

export default FileMessage;
