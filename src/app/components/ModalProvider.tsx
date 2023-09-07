import React, { createContext, useReducer, useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

export const ModalContext = createContext({
    show: (param) => {},
    hide: () => {},
})

const initialState = {
    show: false,
    desc: '',
    confirmButton: '',
    cancelButton: '',
    useConfirmButton: true,
    useCancelButton: true,
    confirmCallback: null,
    cancelCallback: null,
}

const modalReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, ...action.payload, show: true }
        case 'CLOSE_MODAL':
            return { ...state, show: false }
        default:
            return state
    }
}

const ModalProvider = (props) => {
    const [modalState, dispatch] = useReducer(modalReducer, initialState)

    const openModal = (param) => {
        dispatch({ type: 'OPEN_MODAL', payload: param })
    }
    const hideModal = () => {
        dispatch({ type: 'CLOSE_MODAL' })
    }
    return (
        <ModalContext.Provider
            value={{
                show: openModal,
                hide: hideModal,
            }}>
            {props.children}
            <Modal
                open={modalState.show}
                onClose={hideModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box
                    sx={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        right: '0px',
                        bottom: '0px',
                        width: '400px',
                        height: '200px',
                        margin: 'auto',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        padding: '20px',
                    }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        {modalState.desc}
                    </Typography>
                    <div>
                        {modalState.useConfirmButton ? (
                            <Button
                                onClick={() => {
                                    modalState.confirmCallback &&
                                        modalState.confirmCallback()
                                    hideModal()
                                }}>
                                {modalState.confirmButton}
                            </Button>
                        ) : (
                            <></>
                        )}
                        {modalState.useCancelButton ? (
                            <Button
                                onClick={() => {
                                    modalState.cancelCallback &&
                                        modalState.cancelCallback()
                                    hideModal()
                                }}>
                                {modalState.cancelButton}
                            </Button>
                        ) : (
                            <></>
                        )}
                    </div>
                </Box>
            </Modal>
        </ModalContext.Provider>
    )
}
export default ModalProvider
