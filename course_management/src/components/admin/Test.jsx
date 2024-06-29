import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

export default function Test() {
    useEffect(() => {
        function preventCheating() {
            // Ngăn chặn sao chép
            document.addEventListener('copy', function (e) {
                e.preventDefault();
                toast.error('Copying is not allowed on this page.');
            });

            // Ngăn chặn menu chuột phải
            document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                toast.error('Right-click is not allowed on this page.');
            });

            // Ngăn chặn mở tab mới bằng cách nhấn Ctrl, Shift hoặc chuột giữa
            document.addEventListener('click', function (e) {
                if (e.target.tagName === 'A' && (e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1)) {
                    e.preventDefault();
                    toast.error('Opening links in new tabs is not allowed.');
                }
            });

            document.onkeydown = function (e) {
                if (e.ctrlKey &&
                    (e.keyCode === 67 ||
                        e.keyCode === 84 ||
                        e.keyCode === 86 ||
                        e.keyCode === 85 ||
                        e.keyCode === 117)) {
                    toast.error('Not allowed');
                    return false;
                } else {
                    return true;
                }
            };


            // Ngăn chặn F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, 
            document.addEventListener('keydown', function (e) {
                if (e.key === 'F12' ||
                    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'V'))
                ) {
                    e.preventDefault();
                    toast.error('Inspect Element and Paste are not allowed.');
                }
            });


            // Ngăn chặn dán (paste)
            document.addEventListener('paste', function (e) {
                e.preventDefault();
                toast.error('Pasting is not allowed on this page.');
            });
        }
        preventCheating();
    }, [])
    return (

        <div>
            <h1>Prevent Cheating Example</h1>
            <p>This page has some basic measures to prevent cheating, such as copying text, opening links in new tabs, and using
                developer tools.</p>
            <a href="https://www.example.com">Example Link</a>
        </div>
    )
}
