import styles from './index.less';
import React, { useEffect, useRef, useState } from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject } from 'mobx-react'
import { injectIntl } from 'react-intl'
import { defineMessages, defineMessage } from '@formatjs/intl'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function () {
  const [text, setText] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const reactQuillRef = useRef();
  const videoRef = useRef();
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }
  useEffect(() => {
    // const editor= reactQuillRef.getEditor();
    // console.log(editor.getContents())

  }, [text])

  function handleQuillChange(val, delta, source, editor) {
    console.log(val, delta, source, editor)
    console.log('content == ', editor.getContents())
    setText(val)
  }

  var url = `https://api.dev.yqcloud.com/hfle/yqc/v1/0/files/download-by-key?fileKey=0/a29f881a83c9436fb470a5f2bef31e1c@person_with_alpha.alpha.mp4`


  useEffect(()=>{
    fetch(url).then(result => {
      console.log('res -- ', result.body, typeof result.body)
      // const blob = new Blob([result.body], {type: 'application/octet-stream'});
      const blob = new Blob([result.body], {type: 'video/mp4'});
      let _videoUrl =  URL.createObjectURL(blob)
      console.log('blob -- ', blob,  URL.createObjectURL(blob))
      // setVideoUrl(_videoUrl)
    })
  }, [])
  




  function onload(res){
    console.log('aaa -- ', videoRef.current)
  }

  return (
    <div>
      <video ref={videoRef} src={url} controls="controls" onLoad={onload}>
        您的浏览器不支持 video 标签。
      </video>
     {/* {videoUrl && <iframe src={videoUrl}/>}  */}
      <ReactQuill
        ref={reactQuillRef}
        value={text}
        modules={modules}
        onChange={handleQuillChange}
      />
    </div>
  )
}