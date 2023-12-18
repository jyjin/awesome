import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.less';
import { Select, Button, Tooltip, Row, Col, Avatar } from 'antd';
import './lizi.less';

const str = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const dot = ';=,-./~';
const ctrl = ['shift', 'control', 'option'];
const dir = ['left', 'up', 'right', 'down'];
const cmd = ['command', '', 'command'];
const kuo = "[\\]'";

const getCharByKeyCode = (keycode) => {
  if (keycode === 8) {
    return 'delete';
  } else if (keycode === 9) {
    return 'tab';
  } else if (keycode === 13) {
    return 'enter';
  } else if (keycode >= 16 && keycode <= 18) {
    keycode -= 16;
    return ctrl[keycode];
  } else if (keycode === 20) {
    return 'cap';
  } else if (keycode === 27) {
    return 'esc';
  } else if (keycode === 32) {
    return 'space';
  } else if (keycode >= 37 && keycode <= 40) {
    keycode -= 37;
    return dir[keycode];
  } else if (keycode >= 48 && keycode <= 57) {
    keycode -= 48;
    return num.charAt(keycode);
  } else if (keycode >= 65 && keycode <= 90) {
    keycode -= 65;
    return str.charAt(keycode);
  } else if (keycode >= 91 && keycode <= 93) {
    keycode -= 91;
    return cmd[keycode];
  } else if (keycode >= 186 && keycode <= 192) {
    keycode -= 186;
    return dot.charAt(keycode);
  } else if (keycode >= 219 && keycode <= 222) {
    keycode -= 219;
    return kuo.charAt(keycode);
  }
};

// let his = ''
// import jyjin from '@public/jin.mp3'
export default () => {
  const playRef = useRef(null);
  const [cls, setCls] = useState('');
  const [char, setChar] = useState('按键');
  const [his, setHis] = useState('');

  useEffect(() => {
    window.addEventListener('keyup', onKeyDown, false);
    initparticles();
    return () => {
      window.removeEventListener('keyup', onKeyDown, false);
    };
  }, []);

  const onPlay = () => {
    console.log('audio loaded');
    playRef.current.play();
  };

  const onPause = () => {
    console.log('audio loaded');
    playRef.current.pause();
  };

  const onKeyDown = (e) => {
    const char = getCharByKeyCode(e.keyCode);
    console.log(`Your pressed ${e.keyCode} - [${char}]`, his);
    // his += char
    setHis(his + char);
    setChar(char);
    // initparticles();
  };

  const onFullScreen = () => {
    setCls(cls ? '' : styles.full);
  };

  const getAudio = () => {
    if (char === '\\') {
      return `./mp3/yhx.mp3`;
    } else if (char === '/') {
      return `./mp3/zxg.mp3`;
    } else if (char === '.') {
      return `./mp3/jh.mp3`;
    } else if (
      [
        ...ctrl,
        ...dir,
        ...cmd,
        'space',
        'delete',
        'esc',
        'enter',
        'cap',
      ].includes(char)
    ) {
      return `./mp3/${char}.mp3`;
    } else {
      return `./mp3/${char.toUpperCase()}.mp3`;
    }
  };

  console.log('audio src:', getAudio());
  return (
    <div className={styles.keybord + ' ' + cls}>
      <div className={styles.char + ' textcontainer'}>
        <div className="particletext hearts lizi">
          <span className={styles.charBox}> {char.toUpperCase()}</span>
        </div>
      </div>
      <audio
        className={styles.player}
        controls
        autoPlay
        ref={playRef}
        src={getAudio()}
      ></audio>
      <div className={styles.btns}>
        <Button type="primary" onClick={onPlay}>
          开始
        </Button>
        <Button type="danger" onClick={onPause}>
          暂停
        </Button>
        <Button type="primary" onClick={onFullScreen}>
          {cls ? '退出全屏' : '全屏'}
        </Button>
      </div>
    </div>
  );
};
