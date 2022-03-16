import React, { useEffect, useRef, useState } from 'react';
import  dropDownIcon  from '../../Assets/Icons/downArrow.svg';
import './style.scss'
import Country from '../../Utils/country_Code_Data.json'

const EmiDropdown = (props) => {
    const { multiSelect, id, items, item, hint, disabled, seletedItem } = props
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
                setSelection([...selection, item]);
                toggle()
            }
        }
        else if (selection.some((current) => current.value === item.value)) {
            toggle()
        }
        // else {
        //     let selectionAfterRemoval = selection;
        //     selectionAfterRemoval = selectionAfterRemoval.filter(
        //         (current) => current.id !== item.id
        //     );
        //     setSelection([...selectionAfterRemoval]);
        // }
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
                onKeyPress={() => toggle()}
                onClick={() => toggle()}
            >
                <div className='dropdown-header__title'>{
                    item !== '' ? <p className='dropdown-header__title__content' > {item}</p> : <p className='dropdown-header__title__hint' >{hint}</p>
                }

                </div>
                <div className='dropdown-header__action'>
                    <img src={dropDownIcon} className={!open ? `img-dd_icon` : `img-dd_icon_active`} alt='dropdown_icon' />
                </div>

            </div>
            {open && (
                <div className='list-wrapper w-100'>
                    {Country.length > 0 ? <ul className='dd-list'>
                        {Country.map((val) => (
                            <li className='dd-list-item' key={val.name}>
                                <button className={`${isItemInSelection(val) ? 'item-button-selected' : 'item-button'}`} type='button' onClick={() => handleOnClick(item)} >
                                <img className='flag_img' src={val.image} alt='black_check' />
                                    <span className='btn-title'>{val.name}</span>
                                    {/* {isItemInSelection(item) &&
                                        <img src={dropDownIcon} alt='black_check' />
                                    } */}
                                </button>
                            </li>
                        ))}
                    </ul> :
                        <div className="loader__wrapper">
                            {/* <SmallLoader /> */}
                            <p>loading</p>
                        </div>
                    }

                </div>
            )}
        </div>
    );
}

export default EmiDropdown;