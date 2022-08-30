import styles from './index.less';
import React, { useEffect, useRef, useState } from 'react';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { inject } from 'mobx-react'
import { injectIntl } from 'react-intl'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Quill from 'quill'
import { debounce } from 'lodash';

const KnowledgeClick = (editor) => {
  // editor.editing.view.document.on('click', (eventInfo, eventData) => {
  //   const { domTarget } = eventData;
  //   if (domTarget.nodeName === 'SPAN' && domTarget.getAttribute('yqmention-type') === 'knowledge') {
  //     const knowledgeId = domTarget.getAttribute('data-yqmention');
  //     const tenantId = domTarget.getAttribute('tenantId');
  //     const url = `${window.location.origin}/#/itsm/portal/knowledge/dashboard/detail/${knowledgeId}?tenantId=${tenantId}`;
  //     window.open(url);
  //   }
  // });
};
// var str = `
// <h2>The three greatest things you learn from traveling</h2><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><figure class="image image-style-side"><img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano.jpg" alt="A lone wanderer looking at Mount Bromo volcano in Indonesia." srcset="https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano.jpg, https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano_2x.jpg 2x" sizes="100vw"><figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption></figure><h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p><blockquote><p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p><p><strong>Marcel Proust</strong></p></blockquote><h3>Improvisation</h3><p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p><ul><li>buy the ticket</li><li>&nbsp;</li><li>start your adventure</li></ul><figure class="image image-style-side"><img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/umbrellas.jpg" alt="Three Monks walking on ancient temple." srcset="https://ckeditor.com/docs/ckeditor5/latest/assets/img/umbrellas.jpg, https://ckeditor.com/docs/ckeditor5/latest/assets/img/umbrellas_2x.jpg 2x" sizes="100vw"><figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption></figure><h3>Confidence</h3><p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>
// `
// var str = `
// <p>哈哈哈哈​@文档知识@文档知识@文档知识<span class="yqmention" data-yqmention="299547906141061120" origin-name="文档知识" yqmention-type="knowledge" tenantid="240800233754275840">@文档知识</span>&nbsp;</p>
// `

var str = `<p>的点点滴滴多的</p>​<p class='proc-user' style='color:#2979ff;display:inline' data='@金建业' realName='金建业' id='209101713834045440' atpersonId='209101713834045440'>@金建业</p><span class='proc-knowledge' style='color:#2979ff;display:inline-block;cursor:pointer' data='@上下游合作伙伴证明.docx' name='上下游合作伙伴证明.docx' id='308942103386386432' tenantid='207965165382135808' atknowledgeid='308942103386386432'><span contenteditable='false'>@上下游合作伙伴证明.docx</span></span>`
export default function () {
  const [text, setText] = useState(str)
  const [editorInstance, setEditor] = useState('')


  function htmlToDelta(html) {
    var div = document.createElement('div')
    div.setAttribute('id', 'htmlToDelta')
    // div.innerHTML = '<div id="quillEditor" style="display:none">' + html + '</div>'
    div.innerHTML = `<div id="quillEditor" style="display:none">${html}</div>`
    document.body.appendChild(div)
    var quill = new Quill('#quillEditor', {
      theme: 'snow'
    });
    const delta = quill.getContents()
    document.getElementById('htmlToDelta').remove()
    console.log('delta -- ', delta)
    return delta
  }

  return (
    <div>
      <Button type="primary" onClick={() => {
        htmlToDelta(text)
      }}>转化</Button>
      <Button type="primary" onClick={() => {
        editorInstance.editing.view.document.selection.setTo()
      }}>光标</Button>
      <CKEditor
        
        editor={ClassicEditor}
        // config={{
        //   extraPlugins: [KnowledgeClick],
        //   YQMention: {
        //     showAt: debounce((editor, bounds, extra = {}) => {

        //     }, 300),
        //     hideAt: debounce(() => {
        //     }, 500),
        //   },
        // }}
        data={text}
        onReady={editor => {
          setEditor(editor)
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data)
          console.log({ event, editor, data });
          console.log('selection ', editor.editing.view.document)

        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', event, editor.editing.view.document.selection);
        }}
      />
    </div>
  )
}