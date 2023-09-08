'use client'

import React, { useContext } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ModalContext } from './components/ModalProvider'

import './globals.css'
import './styles/home.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormValue {
    id?: string
    pw?: string
}

export const homeCatagories = [
    { id: 'motel', name: '모텔', icon: './icons/ico_category_01.png' },
    {
        id: 'hotel',
        name: '호텔·리조트',
        icon: './icons/ico_category_02.png',
    },
    {
        id: 'pension',
        name: '펜션',
        icon: './icons/ico_category_03.png',
    },
    {
        id: 'gHouse',
        name: '게스트하우스',
        icon: './icons/ico_category_04.png',
    },
    {
        id: 'camping',
        name: '캠핑·글램핑',
        icon: './icons/ico_category_05.png',
    },
]
export default function Home() {
    const { show, hide } = useContext(ModalContext)

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>()

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        if (data.id == 'helloworld' && data.pw == 'Qwer!234') {
            show({
                desc: '로그인 성공',
                useConfirmButton: true,
                confirmButton: '확인',
            })
        } else {
            show({
                desc: '등록된 정보가 다릅니다. 다시 시도해주세요.',
                useConfirmButton: false,
                useCancelButton: true,
                cancelButton: '다시 시도',
            })
        }
    }

    return (
        <main className="container">
            <h2 className="text-center mx-4 mt-[70px]">Login</h2>
            <Box
                onSubmit={handleSubmit(onSubmit)}
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
                    variant="outlined"
                    {...register('id', { required: true, minLength: 1 })}
                />
                {errors.id?.type === 'required' && (
                    <p role="alert">Id is required</p>
                )}
                <TextField
                    fullWidth
                    label="pw"
                    variant="outlined"
                    {...register('pw', {
                        required: true,
                        pattern:
                            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/,
                    })}
                />
                {errors.pw?.type === 'required' && (
                    <p role="alert">PASSWORD is required</p>
                )}
                {errors.pw?.type === 'pattern' && (
                    <p role="alert">
                        비밀번호는 8자 이상, 대문자/소문자/특수문자를 모두 포함
                    </p>
                )}
                <Button type="submit">Login</Button>
            </Box>

            <div className="flex justify-center gap-6 mt-[30px]">
                {homeCatagories.map((obj) => {
                    return (
                        <Link
                            key={obj.id}
                            href={`/room-page/${obj.id}`}
                            className="text-center">
                            <img
                                src={obj.icon}
                                width="100"
                                height="100"
                                alt=""
                            />
                            {obj.name}
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}
