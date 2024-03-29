import '../App.css';
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(text.length);
    const [noNewlineCount, setNoNewlineCount] = useState(text.length);
    const [simpleCount, setSimpleCount] = useState(text.length);

    const handleCountChange = (e: any) => {
        setText(e.target.value);
    };

    useEffect(() => {
        setCount(text.length);
        setNoNewlineCount(text.replace(/\r?\n/g, '').length);
        setSimpleCount(
            text
                .replace(/\r?\n/g, '')
                .replace(/\s/g, '')
                .replace(/[、。,.]/g, '').length
        );
    }, [text]);
    const onoue =
        '今回の授業で学んだこと：\n疑問に思ったこと：\nもっと知りたいと持ったこと：\nその他感想等：';

    return (
        <div>
            <button onClick={() => setText('')}>クリア</button>
            <button onClick={() => setText(onoue)}>尾上</button>
            <button onClick={() => setText('現在作成中！ｗｗ')}>
                discordに保存
            </button>
            <div className="display">
                <p>現在の文字数 : {count}</p>
                <p>改行を除いた文字数 : {noNewlineCount}</p>
                <p>改行・句読点・空白を除いた文字数 : {simpleCount}</p>
            </div>
            <textarea
                rows={20}
                cols={80}
                value={text}
                onChange={handleCountChange}
            />
        </div>
    );
};

export default Counter;
