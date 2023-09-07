'use client'

import React, { useContext, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ModalContext } from '../components/ModalProvider'
import { useRouter } from 'next/navigation'

const userPage = () => {
    const { show, hide } = useContext(ModalContext)
    const router = useRouter()

    const inputId = useRef(null)
    const inputPw = useRef(null)
    const inputEmail = useRef(null)

    const handleCheck = (e) => {
        e.preventDefault()
        const idValue = inputId.current.value
        const pwValue = inputPw.current.value
        const emailValue = inputEmail.current.value

        const pwReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (idValue === '' || idValue === null) {
            show({
                desc: '아이디를 입력하세요',
                useConfirmButton: true,
                confirmButton: '확인',
                confirmCallback: null,
            })
            inputId.current.focus()
            return false
        }

        if (!pwReg.test(pwValue)) {
            show({
                desc: '비밀번호는 8자 이상이어야 하며, 대문자/소문자/특수문자를 모두 포함해야 합니다',
                useConfirmButton: true,
                confirmButton: '확인',
                confirmCallback: null,
            })
            inputPw.current.focus()
            return false
        }

        if (!emailReg.test(emailValue)) {
            show({
                desc: '이메일을 올바르게 작성하세요 예) abc@abc.ddd',
                useConfirmButton: true,
                confirmButton: '확인',
                confirmCallback: null,
            })
            inputEmail.current.focus()
            return false
        }
        show({
            desc: '회원가입이 정상적으로 처리되었습니다.',
            useConfirmButton: true,
            confirmButton: '로그인 페이지로 이동',
            confirmCallback: () => {
                router.push('/')
            },
        })
    }
    return (
        <div className="container">
            <h3 className="text-center mx-4">Sign up</h3>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {
                        margin: '8px auto',
                        width: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                    },
                }}
                noValidate
                autoComplete="off">
                <TextField
                    fullWidth
                    label="id"
                    inputRef={inputId}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="pw"
                    inputRef={inputPw}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Email"
                    inputRef={inputEmail}
                    variant="outlined"
                />
                <Button fullWidth variant="outlined" onClick={handleCheck}>
                    SIGN UP
                </Button>
            </Box>
        </div>
    )
}

export default userPage
