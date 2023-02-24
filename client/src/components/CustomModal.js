 export const ModalStyle = (p) => {
    const styled = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(28,28,28,0.75)'
        },
        content: {
            position: 'absolute',
            top: '150px',
            left: '70px',
            right: '70px',
            bottom: '150px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: `${p}px`
        }
    }

    return styled
}