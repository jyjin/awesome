import styles from './index.less';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Button, Tooltip, Row, Col, Avatar } from 'antd';
import { fabric } from 'fabric';

export default function () {
  const canvasRef = useRef();
  const [canvas, setCanvas] = useState();
  const [ctx, setCtx] = useState();

  const canvasInit = () => {
    const _canvas = canvasRef.current;
    const ctx = _canvas.getContext('2d');
    setCtx(ctx);
    setCanvas(_canvas);
  };

  const fabricInit = () => {
    const canvas = new fabric.Canvas('canvas');
    canvas.setWidth(500);
    canvas.setHeight(500);
    canvas.setBackgroundColor('#fff');
    setCanvas(canvas);
  };

  const addRect = () => {
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
    });

    // "add" rectangle onto canvas
    canvas.add(rect);
  };
  const fabricInit1 = () => {
    var canvas = new fabric.Canvas('canvas');
    // var rect = new fabric.Rect({
    //   left: 100,
    //   top: 100,
    //   fill: 'red',
    //   width: 20,
    //   height: 20
    // });

    // // "add" rectangle onto canvas
    // canvas.add(rect);

    // create a rect object
    // create a rect object
    var deleteIcon =
      "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

    var img = document.createElement('img');
    img.src = deleteIcon;

    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = 'blue';
    fabric.Object.prototype.cornerStyle = 'circle';

    function Add() {
      var rect = new fabric.Rect({
        left: 100,
        top: 50,
        fill: 'yellow',
        width: 200,
        height: 100,
        objectCaching: false,
        stroke: 'lightgreen',
        strokeWidth: 4,
      });

      canvas.add(rect);
      canvas.setActiveObject(rect);
    }

    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: 16,
      cursorStyle: 'pointer',
      mouseUpHandler: deleteObject,
      render: renderIcon,
      cornerSize: 24,
    });

    Add();

    function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
      canvas.remove(target);
      canvas.requestRenderAll();
    }

    function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(img, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
  };

  const addFontText = () => {
    var textPath = new fabric.Text('Text on a path', {
      top: 150,
      left: 150,
      textAlign: 'left',
      charSpacing: -50,
    });
    canvas.add(textPath);
  };

  const addFontTextBox = () => {
    // var textPath = new fabric.TextBox();
    // canvas.add(textPath)
  };

  const addGradientText = () => {
    //设置线性渐变色
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop('0', 'magenta');
    gradient.addColorStop('0.5', 'blue');
    gradient.addColorStop('1.0', 'red');
    ctx.fillStyle = gradient;
    ctx.fillText('Big smile!', 10, 90);
  };

  useEffect(() => {
    // canvasInit()
    fabricInit();
  }, []);

  useEffect(() => {
    if (canvas) {
      addFontText();
      addFontTextBox();
      addRect();
    }
  }, [canvas, ctx]);

  return (
    <div className={styles.canvasPaint}>
      <ul className={styles.toolbar}>
        <li className={styles.font} onClick={addFontText}>
          添加文字
        </li>
        <li className={styles.font} onClick={addGradientText}>
          添加渐变文字
        </li>
        <li className={styles.font}>添加图片</li>
      </ul>
      <div id="canvasBox" className={styles.canvasBox}>
        {/* <canvas id='canvas' ref={canvasRef} className={styles.canvas}></canvas> */}
        <canvas id="canvas" className={styles.canvas}></canvas>
      </div>
      <div className={styles.setting}></div>
    </div>
  );
}
