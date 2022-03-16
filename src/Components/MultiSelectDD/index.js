import React, { useEffect, useRef, useState } from 'react';
// import { Icons } from '../../../Assets/Icons';
// import { SmallLoader } from '../Loader';
import './style.scss'
import Check from "../../Assets/Icons/check-circle.svg";
import Down from "../../Assets/Icons/down.svg";
import Close from "../../Assets/Icons/close.svg";

const MultiSelectDD = (props) => {
    const { multiSelect, id, items, item, hint, disabled, seletedItem ,removeSelected} = props
    useEffect(() => {
      console.table("props",props);
    }, [])
    
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => {
        if (!disabled) {
            setOpen(!open);
        }
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    function handleOnClick(item) {
        if (!selection.some((current) => current.value === item.value)) {
            if (!multiSelect) {
                setSelection([item]);
                seletedItem(item)
                toggle()
            } else if (multiSelect) {
                console.log("multiselect is enabled");
                setSelection([...selection, item]);
                seletedItem([...selection, item]);
                toggle()
            }
        }
        else if (selection.some((current) => current.value === item.value)) {
            toggle()
        }
    }

const handle_removeSelected=(arg)=>{
removeSelected(arg)
}
    function isItemInSelection(item) {
        if (selection.some((current) => current.value === item.value)) {
            return true;
        }
        return false;
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && ref.current.id && !ref.current.contains(event.target)) {
                    setOpen(false)
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }
    return (
        <div style={disabled ? { background: ' #F7F9F8' } : { backgroundColor: '#ffffff' }} ref={wrapperRef} id={id} className='dropdownWrapper'>
            <div
                tabIndex={0}
                className='dropdown-header'
                role='button'
                
            >
                <div className='dropdown-header__title'>{
                    multiSelect?
                    item.length >0 ? 
                    item.map(val=>{
                        return(
                            <>
                            <div className='btn btn-primary d-flex flex-row justify-center align-items-center mx-2'> <button className='btn' onClick={()=>{handle_removeSelected(val)}}><img src={Close}/></button> <p className=' text-white dropdown-header__title__content' > {val.value}</p> </div>
                          
                            </>
                        );
                    })
                    
                    : <p className='dropdown-header__title__hint' >{hint}</p>
                    :item.value !== '' ? <p className='dropdown-header__title__content' > {item.value}</p> : <p className='dropdown-header__title__hint' >{hint}</p>
                }

                </div>
                <div className='dropdown-header__action'
                onKeyPress={() => toggle()}
                onClick={() => toggle()}
                >
                    <img src={Down} className={!open ? `img-dd_icon` : `img-dd_icon_active`} alt='dropdown_icon' />
                </div>

            </div>
            {open && (
                <div className='list-wrapper w-100'>
                    {items.length > 0 ? <ul className='dd-list'>
                        {items.map((item) => (
                            <li className='dd-list-item' key={item.id}>
                                <button className={`${isItemInSelection(item) ? 'item-button-selected' : 'item-button'}`} type='button' onClick={() => handleOnClick(item)} >
                                    <span className='btn-title'>{item.value}</span>
                                    {isItemInSelection(item) &&
                                        <img className='d-none' src={Check} alt='black_check' />
                                    }
                                </button>
                            </li>
                        ))}
                    </ul> :
                        <div className="loader__wrapper">
                            {/* <SmallLoader /> */}
                            <p>loading..</p>
                        </div>
                    }

                </div>
            )}
        </div>
    );
}

export default MultiSelectDD;