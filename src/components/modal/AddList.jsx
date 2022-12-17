import { useEffect, useRef, useState } from "react";


export  function addList ({ open, close,data }) {
    const ref = useRef();
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState([]);

    const dragStart = (e, position) => {
        dragItem.current = position;
    };

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
    };
    const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
    };

    useEffect(() => {
        const modlalClose = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                close();
            }
        };
        document.addEventListener("mousedown", modlalClose);
        return () => {
            document.removeEventListener("mousedown", modlalClose);
        };
    });

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = open ? 'hidden' : 'auto';
        if(data){
            setList(data)
        }
    }, [open,data])
    
    return (
        <div className="main">

            {open ? (
               
                <div className="App" show={open} ref={ref}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-contents">  <p className="he" >
                        Edit outlines
                    </p>
                    <p className="close" onClick={close} role="img" aria-label="smile">
                        &times;
                    </p>
                  </div>
                    <div className="modal-desk overflow-auto" style={{maxHeight:"400px"}} >
                        {
                            list &&
                            list?.map((item, index) => (
                                <div style={{ backgroundColor: '#e0e0e0', marginBottom: 'px', textAlign: 'center', fontSize: '20px',padding:"10px 5px",borderRadius:"5px" }}
                                    onDragStart={(e) => dragStart(e, index)}
                                    onDragEnter={(e) => dragEnter(e, index)}
                                    onDragEnd={drop}
                                    key={index}
                                    draggable>
                                    {item[0]}xsssss
                                </div>
                            ))}

                        <br />
                        
                    </div>
                    <button className="btns" onClick={close}>
                           + Add outline
                        </button>
                </div>
                </div>
                </div>


            ) : (
                null)}
        </div>
    );
}