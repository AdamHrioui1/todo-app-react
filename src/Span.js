import React, { useEffect } from 'react'

function Span({ add, showSpan, setShowSpan, success, spanContent}) {
    useEffect(() => {
        const removeSpan = setTimeout(() => {
            setShowSpan(false)
        }, 3000)

        return () => clearTimeout(removeSpan)
    }, [add])

    return (
        <>
          {showSpan ? <span className={success ? 'success' : 'danger'}>{spanContent}</span> : '' }
        </>
    )
}

export default Span
