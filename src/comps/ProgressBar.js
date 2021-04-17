import React from 'react'

import useStorage from '../hooks/useStorage'


export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);
    console.log(progress);
    return (
        <div className="progress-bar">
            Progress
        </div>
    )
}
