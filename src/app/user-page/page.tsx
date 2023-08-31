'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const userPage = () => {
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
            alert('아이디를 입력하세요!')
            inputId.current.focus()
            return false
        }

        if (!pwReg.test(pwValue)) {
            alert(
                '비밀번호는 8자 이상이어야 하며, 대문자/소문자/특수문자를 모두 포함해야 합니다',
            )
            inputPw.current.focus()
            return false
        }

        if (!emailReg.test(emailValue)) {
            alert('이메일을 올바르게 작성하세요 예) abc@abc')
            inputEmail.current.focus()
            return false
        }

        console.log('회원가입이 정상적으로 처리되었습니다.')
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
                    // onChange={(e) => handleValue(e.target.value, inputId)}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="pw"
                    inputRef={inputPw}
                    // onChange={(e) =>
                    //     checkValue(e.target, e.target.value, inputPw)
                    // }
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Email"
                    inputRef={inputEmail}
                    // onChange={(e) =>
                    //     checkValue(e.target, e.target.value, inputEmail)
                    // }
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
