import React, { createContext, useState } from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

export const ModalContext = createContext({
    show: (param: ModalContent) => {},
    hide: () => {},
})

interface Modal extends ModalContent {
    show: boolean
}
interface ModalContent {
    desc?: string
    confirmButton?: string
    cancelButton?: string
    useConfirmButton?: boolean
    useCancelButton?: boolean
    confirmCallback?: () => void
    cancelCallback?: () => void
}
const ModalProvider = (props) => {
    const [modal, setModal] = useState<Modal>({ show: false })
    return (
        <ModalContext.Provider
            value={{
                show: (param: ModalContent) => {
                    setModal({
                        show: true,
                        desc: param.desc,
                        confirmButton: param.confirmButton,
                        cancelButton: param.cancelButton,
                        useConfirmButton: param.useConfirmButton ?? true,
                        useCancelButton: param.useCancelButton ?? true,
                        confirmCallback: param.confirmCallback,
                        cancelCallback: param.cancelCallback,
                    })
                },
                hide: () => {
                    setModal({
                        show: false,
                    })
                },
            }}>
            {props.children}
            <Modal
                open={modal.show}
                onClose={() => setModal({ show: false })}
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
                        {modal.desc}
                    </Typography>
                    <div>
                        {modal.useConfirmButton ? (
                            <Button
                                onClick={() => {
                                    modal.confirmCallback &&
                                        modal.confirmCallback()
                                    setModal({ show: false })
                                }}>
                                {modal.confirmButton}
                            </Button>
                        ) : (
                            <></>
                        )}
                        {modal.useCancelButton ? (
                            <Button
                                onClick={() => {
                                    modal.cancelCallback &&
                                        modal.cancelCallback()
                                    setModal({ show: false })
                                }}>
                                {modal.cancelButton}
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
