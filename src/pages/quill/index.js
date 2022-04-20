import styles from './index.less';
import React, { useEffect, useRef, useState } from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject } from 'mobx-react'
import { injectIntl } from 'react-intl'
import { defineMessages, defineMessage } from '@formatjs/intl'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const htmlStr = `<h2>The three greatest things you learn from traveling</h2><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><figure class="image image-style-side"><img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano.jpg" alt="A lone wanderer looking at Mount Bromo volcano in Indonesia." srcset="https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano.jpg, https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano_2x.jpg 2x" sizes="100vw"><figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption></figure><h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p><blockquote><p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p><p><strong>Marcel Proust</strong></p></blockquote><h3>Improvisation</h3><p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p><ul><li>buy the ticket</li><li>&nbsp;</li><li>start your adventure</li></ul><figure class="image image-style-side"><img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/umbrellas.jpg" alt="Three Monks walking on ancient temple." srcset="https://ckeditor.com/docs/ckeditor5/latest/assets/img/umbrellas.jpg, https://ckeditor.com/docs/ckeditor5/latest/assets/img/umbrellas_2x.jpg 2x" sizes="100vw"><figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption></figure><h3>Confidence</h3><p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>`

export default function () {
  const [text, setText] = useState(htmlStr)
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
    console.log('val == ', val)
    console.log('delta == ', delta)
    // console.log('content == ', editor.getContents())
    setText(val)
  }

  // var url = `https://api.dev.yqcloud.com/hfle/yqc/v1/0/files/download-by-key?fileKey=0/a29f881a83c9436fb470a5f2bef31e1c@person_with_alpha.alpha.mp4`


  // useEffect(()=>{
  //   fetch(url).then(result => {
  //     console.log('res -- ', result.body, typeof result.body)
  //     // const blob = new Blob([result.body], {type: 'application/octet-stream'});
  //     const blob = new Blob([result.body], {type: 'video/mp4'});
  //     let _videoUrl =  URL.createObjectURL(blob)
  //     console.log('blob -- ', blob,  URL.createObjectURL(blob))
  //     // setVideoUrl(_videoUrl)
  //   })
  // }, [])

  // function onload(res){
  //   console.log('aaa -- ', videoRef.current)
  // }

  return (
    <div>
      {/* <video ref={videoRef} src={url} controls="controls" onLoad={onload}>
        您的浏览器不支持 video 标签。
      </video> */}
     {/* {videoUrl && <iframe src={videoUrl}/>}  */}
      <ReactQuill
        style={{display: 'none'}}
        ref={reactQuillRef}
        value={text}
        modules={modules}
        onChange={handleQuillChange}
      />
    </div>
  )
}